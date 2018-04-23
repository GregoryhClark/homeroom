module.exports = {
    updateUser:((req, res, next)=>{
        const db = req.app.get('db')
        if(req.user) {
            const {user_id} = req.body
            db.users.update({user_id}, req.body).then(update => {
                res.status(200).send(update[0])
            })
        } else {
            res.status(401).send('Update Unsuccessful.')
        }
    }),
    createUser: ((req,res,next) => {
      let {account_type, first_name, last_name, username, password, email, user_photo} = req.body;
      const db = req.app.get('db');
      username = username.toLowerCase(); //Force username to lowercase
      
      //CHECK IF USERNAME EXISTS
      db.run(`SELECT * 
        FROM users 
        WHERE username = '${username}'`).then(result => {
        if(result.length !== 0) {
          res.send('Username Unavailable');
        } else {

          //USERNAME IS UNIQUE, NOW CHECK EMAIL ADDRESS
          db.run(`SELECT * 
          FROM users 
          WHERE email = '${email}'`).then(result => {
          if(result.length !== 0) {
            res.send('Email Unavailable');
          } else {

          //USERNAME AND EMAIL ARE UNIQUE, CREATE USER
            db.users.insert(
              {   account_type: account_type
                , first_name: first_name
                , last_name: last_name
                , username: username
                , password: password
                , email: email
                , user_photo: user_photo
              }).then(result => res.send('Success'))
          }
        })
        }
      })    
    })
}