module.exports = {
    getStudentCourses:((req,res,next)=>{
        const db = req.app.get('db')
        if(req.user){
            const {user_id} = req.user
            db.run(`SELECT * 
                    FROM roster 
                    JOIN courses ON roster.roster_course_id = courses.course_id
                    WHERE roster_user_id = ${user_id}`,
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
    }),
    getStudentAverage:((req,res,next)=>{
        const db = req.app.get('db')
        if(req.user){
            const {user_id} = req.user
            db.run(`SELECT student_id, student_assignments.student_assignments_course_id, assignment_name, 
                    student_assignment_topic, points_earned AS classmates_points_earned, possible_points, assignment_template_id
                    FROM student_assignments 
                    JOIN courses 
                    ON student_assignments.student_assignments_course_id = courses.course_id
                    JOIN users 
                    ON student_assignments.student_id = users.user_id
                    WHERE student_id NOT IN (SELECT student_id FROM student_assignments WHERE user_id = ${user_id})
                    ORDER BY course_id`,
                function(err,res){
                    var average = res;
                }).then(average=>{
                    // console.log('CTRL - average', average)
                    res.status(200).send(average)
                })
        }else{
            res.status(401).send('Please Sign-in.')
        }
    })
}