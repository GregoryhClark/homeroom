module.exports= {
    getTeachersProfiles:((req,res,next)=>{
        const db = req.app.get('db')
        if(req.user){
            const {user_id} = req.user
            db.run(`SELECT * 
                    FROM users 
                    JOIN account_types 
                    ON users.account_type = account_types.account_type_id
                    WHERE users.account_type = 2`,
                function(err,res){
                    var teachers = res;
                }).then(teachers=>{
                    // console.log('TEACHERS', teachers)
                    res.status(200).send(teachers)
                })
        }else{
            res.status(401).send('Please Sign-in.')
        }
    })
}