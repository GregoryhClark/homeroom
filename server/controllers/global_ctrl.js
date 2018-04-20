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
      let {username, } = req.body;
      username = username.toLowerCase(); //Force username to lowercase
      // const db = req.app.get('db');



      // db.run(`SELECT * 
      //         FROM users 
      //         WHERE username = '${username}'`).then(res => {
      //           if(res.length !== 0) {
      //             res.status(200).send('Username Available')
      //           } else {
      //             console.log('taken')
      //           }
      //         }
      //         )

    })
}