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
    })
}