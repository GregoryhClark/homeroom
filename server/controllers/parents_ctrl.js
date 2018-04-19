module.exports= {
    getParentsKids:((req,res,next)=>{
        const db = req.app.get('db')
        if(req.user){
            const {user_id} = req.user
            db.run(`SELECT relationship_id, student_id, parent_id, account_type, first_name, last_name, email, user_photo
                    FROM student_parent
                    JOIN users 
                    ON user_id = student_id  
                    WHERE parent_id = ${user_id}`,
                function(err,res){
                    var children = res;
                }).then(children=>{
                    // console.log('Children', children)
                    res.status(200).send(children)
                })
        }else{
            res.status(401).send('Please Sign-in.')
        }
    })
}