module.exports= {
    getStudentsForTeacher:((req,res,next)=>{
        const db = req.app.get('db')
        if(req.user){
            const {user_id} = req.user
            db.run(`SELECT courses.course_id, course_name, course_description, courses_photo, 
                    start_date, end_date, users.user_id, teacher_id, period, time, department, 
                    first_name, last_name, email, user_photo, phone_number 
                    FROM courses
                    JOIN roster ON courses.course_id = roster.course_id
                    JOIN users ON roster.user_id = users.user_id
                    WHERE teacher_id = ${user_id}`,
                function(err,res){
                    var teachers = res;
                }).then(teachers=>{
                    res.status(200).send(teachers)
                })
        }else{
            res.status(401).send('Please Sign-in.')
        }
    }),
    getCoursesForTeacher:((req,res,next)=>{
        const db = req.app.get('db')
        if(req.user){
            const {user_id} = req.user
            db.run(`SELECT * FROM courses WHERE teacher_id = ${user_id}`,
                function(err,res){
                    var courses = res;
                }).then(courses=>{
                    res.status(200).send(courses)
                })
        }else{
            res.status(401).send('Please Sign-in.')
        }
    })
}