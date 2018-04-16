module.exports= {
    getTeachers:((req,res,next)=>{
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
                    console.log('Admins Teachers', teachers)
                    res.status(200).send(teachers)
                })
        }else{
            res.status(401).send('Please Sign-in.')
        }
    }),
    getStudents:((req,res,next)=>{
        const db = req.app.get('db')
        if(req.user){
            const {user_id} = req.user
            db.run(`SELECT * 
                    FROM users 
                    JOIN account_types 
                    ON users.account_type = account_types.account_type_id
                    WHERE users.account_type = 3`,
                function(err,res){
                    var students = res;
                }).then(students=>{
                    console.log('Admins Students', students)
                    res.status(200).send(students)
                })
        }else{
            res.status(401).send('Please Sign-in.')
        }
    }),
    getParents:((req,res,next)=>{
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
                    console.log('Admins Parents', parents)
                    res.status(200).send(parents)
                })
        }else{
            res.status(401).send('Please Sign-in.')
        }
    }),
    getCourses:((req,res,next)=>{
        const db = req.app.get('db')
        if(req.user){
            const {user_id} = req.user
            db.run(`SELECT * 
                    FROM courses 
                    ORDER BY course`,
                function(err,res){
                    var courses = res;
                }).then(courses=>{
                    console.log('Admins Courses', courses)
                    res.status(200).send(courses)
                })
        }else{
            res.status(401).send('Please Sign-in.')
        }
    })
}