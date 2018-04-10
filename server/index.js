//MODULES
require('dotenv').config();
const express = require('express')
   , bodyParser = require('body-parser')
   , massive = require('massive')
   , session = require('express-session')
   , passport = require('passport')
   , LocalStrategy = require('passport-local').Strategy
   , bcrypt = require('bcryptjs')
   , cors = require('cors')

//IMPORT CONTROLLERS (NEED TO UPDATE)


//SETUP app
const app = express();

//IMPORT VARIABLES FROM .env
const {SESSION_PORT
   , CONNECTION_STRING
   , SESSION_SECRET
   , REACT_APP_LOGOUT} = process.env;

//CONNECT DATABASE
massive(CONNECTION_STRING).then(db => {
   app.set('db', db)
})

//MIDDLEWARE
app.use(bodyParser.json());
app.use( session({
   secret: SESSION_SECRET
   , resave: false
   , saveUninitialized: false
   , cookie: {maxAge:2000000}
}))

//PASSPORT LOCAL STRATEGY
passport.use(new LocalStrategy(
   function(username, password, done) {
      app.get('db').get_user([username]).then(result => {
         const user = result[0];

         //VERIFY USERNAME EXISTS
         if(!user) {return done(null, 'Unauthorized')}

         // VERIFY PASSWORD MATCHES
         // const validPassword = bcrypt.compareSync(password, user.password);
         // if(!validPassword) return done(null, 'Unauthorized');

         //USER IS VERIFIED AND THEIR ID IS RETURNED
         return done(null, user)
      })
   }
))

passport.serializeUser((user, done) => {
   return done(null, user);
})

passport.deserializeUser((user, done) => {
   if(user === 'Unauthorized') {
      return done(null, 'Unauthorized');
   }
      return done(null, user);
})

app.use(passport.initialize());
app.use(passport.session());

//ENDPOINTS
//LOGIN & LOGOUT
app.post('/api/login', passport.authenticate('local'), (req, res, next) => {
   if(req.user === 'Unauthorized') {
      res.status(200).send(req.user)
   } else {
      res.redirect(200, '/dashboard')
   }
   next();
})

app.get('/logout', (req,res) => {
   req.logout();
   res.redirect(REACT_APP_LOGOUT);
})

//CONFIRM USER SESSION
app.get('/auth/me', (req, res) => {
   if (req.user) {
      res.status(200).send(req.user);
   } else {
      res.status(401).send('Not Logged In');
   }
})

//SERVER LISTENING
app.listen(SESSION_PORT, () => console.log(`Listening on port ${SESSION_PORT}`))