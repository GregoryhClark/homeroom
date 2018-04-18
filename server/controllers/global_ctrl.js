module.exports = {
    updateUser:((req, res, next)=>{
        const {first_name, last_name, username, email, photo, user_id} = req.body;
        console.log(req.body);
        const db = req.app.get('db')
        if(req.body.first_name) {
            db.run(
            `UPDATE users
             SET
                first_name = '${first_name}',
                last_name = '${last_name}',
                username = '${username}',
                email = '${email}',
                user_photo = '${photo}'
             WHERE user_id = ${user_id}`
            , function(err, res){const updatedTeacher = res}).then(updatedTeacher => {
                res.status(200).send(updatedTeacher)
            })
        } else {
            res.status(401).send('Update Unsuccessful.')
        }
    })
}