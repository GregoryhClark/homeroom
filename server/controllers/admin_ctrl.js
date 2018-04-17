module.exports= {
    getTeachers:((req,res,next)=>{
        const db = req.app.get('db')
        if(req.user){
            const {user_id} = req.user
            db.run(`SELECT * 
                    FROM users
                    WHERE account_type = 'Teacher'`,
                function(err,res){
                    var teachers = res;
                }).then(teachers=>{
                    // console.log('Admins Teachers', teachers)
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
                    WHERE account_type = 'Student'`,
                function(err,res){
                    var students = res;
                }).then(students=>{
                    // console.log('Admins Students', students)
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
                    WHERE account_type = 'Parent'`,
                function(err,res){
                    var parents = res;
                }).then(parents=>{
                    // console.log('Admins Parents', parents)
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
                    ORDER BY course_id`,
                function(err,res){
                    var courses = res;
                }).then(courses=>{
                    // console.log('Admins Courses', courses)
                    res.status(200).send(courses)
                })
        }else{
            res.status(401).send('Please Sign-in.')
        }
    })
}