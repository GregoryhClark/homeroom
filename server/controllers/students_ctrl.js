module.exports = {
    getStudentGrades:((req,res,next)=>{
        const db = req.app.get('db')
        if(req.user){
            // console.log("STUDENT-CTRL: req.user",req.user)
            const {user_id} = req.user
            db.run(`SELECT * 
                    FROM student_assignments
                    JOIN courses 
                    ON student_assignments.course_id = courses.course_id
                    WHERE student_id = ${user_id}`,
                function(err,res){
                    var studentGrades = res;
                }).then(studentGrades=>{
                    // console.log('STUDENT-CTRL: grades', studentGrades)
                    res.status(200).send(studentGrades)
                })
        }else{
            res.status(401).send('Please Sign-in.')
        }
    })
}