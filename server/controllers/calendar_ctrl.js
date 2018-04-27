module.exports= {
    getUsersCalendar:((req,res,next)=>{
        const db = req.app.get('db')
        if(req.user){
            const {user_id} = req.user
            db.run(`SELECT * FROM calendar_events WHERE calendar_event_created_by_id = ${user_id}`,
                function(err,res){
                    var calendar = res;
                }).then(calendar=>{
                    res.status(200).send(calendar)
                })
        }else{
            res.status(401).send('Please Sign-in.')
        }
    }),
    postCalendar:((req, res, next)=>{
        const db = req.app.get('db')
        console.log(req.body)
        if(req.user) {
            const {user_id} = req.body
            db.calendar_events.insert(req.body).then(result => res.send('Success'))
        } else {
            console.log(res)
            res.status(401).send('Update Unsuccessful.')
        }
    })
}