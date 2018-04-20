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
    })
}