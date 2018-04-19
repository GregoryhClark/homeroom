module.exports = {
    updateUser:((req, res, next)=>{
        const {user_id} = req.user
        const db = req.app.get('db')
        if(req.body.first_name) {
            db.users.update({user_id}, req.body).then(update => {
                res.status(200).send(update[0])
            })
        } else {
            res.status(401).send('Update Unsuccessful.')
        }
    })
}