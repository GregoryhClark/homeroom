module.exports= {
    getParentsKids:((req,res,next)=>{
        const db = req.app.get('db')
        if(req.user){
            const {user_id} = req.user
            db.run(`SELECT * 
                    FROM student_parent
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