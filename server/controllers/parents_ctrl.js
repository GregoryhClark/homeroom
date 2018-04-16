module.exports= {
    getParentsProfiles:((req,res,next)=>{
        const db = req.app.get('db')
        if(req.user){
            const {user_id} = req.user
            db.run(`SELECT * 
                    FROM users 
                    JOIN account_types 
                    ON users.account_type = account_types.account_type_id
                    WHERE users.account_type = 4`,
                function(err,res){
                    var parents = res;
                }).then(parents=>{
                    // console.log('parents', parents)
                    res.status(200).send(parents)
                })
        }else{
            res.status(401).send('Please Sign-in.')
        }
    })
}