module.exports = {
    getStudentCourses:((req,res,next)=>{
        const db = req.app.get('db')
        if(req.user){
            const {user_id} = req.user
            db.run(`SELECT * 
                    FROM roster 
                    JOIN courses ON roster.course_id = courses.course_id
                    WHERE user_id = ${user_id}`,
                function(err,res){
                    var courses = res;
                }).then(courses=>{
                    // console.log('CTRL - COURSE', courses)
                    res.status(200).send(courses)
                })
        }else{
            res.status(401).send('Please Sign-in.')
        }
    }),
    getStudentAssignments:((req,res,next)=>{
        const db = req.app.get('db')
        if(req.user){
            const {user_id} = req.user
            db.run(`SELECT *
                    FROM student_assignments
                    WHERE student_id = ${user_id}`,
                function(err,res){
                    var assignments = res;
                }).then(assignments=>{
                    // console.log('CTRL - ASSIGNMENTS', assignments)
                    res.status(200).send(assignments)
                })
        }else{
            res.status(401).send('Please Sign-in.')
        }
    }),
    getStudentAttachments:((req,res,next)=>{
        const db = req.app.get('db')
        if(req.user){
            const {user_id} = req.user
            db.run(`SELECT *
                    FROM student_attachments
                    WHERE student_assignment_id = ${user_id}`,
                function(err,res){
                    var attachments = res;
                }).then(attachments=>{
                    // console.log('CTRL - Attachments', attachments)
                    res.status(200).send(attachments)
                })
        }else{
            res.status(401).send('Please Sign-in.')
        }
    })
}