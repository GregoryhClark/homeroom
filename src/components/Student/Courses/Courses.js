import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser, getStudent, selectedCourse} from '../../../redux/user';
import './Courses.css'

class Courses extends Component {
  render() {
// ============== TITLES ==============
    let titleNames = ["Course", "Teacher","Term","Enrolled as"];
    let titleMap = titleNames.map((e,i)=>{return <div key={i}>{`${e}`}</div>});
// ========== CURRENT COURSE ==========
    let currentCourse = this.props.currentCourseID;
// ====== FIND CLASS ASSIGNMENTS ======
    let findSelectedCourse = this.props.student.getCourses;
    let assignments = findSelectedCourse ? findSelectedCourse.filter((e,i)=> e.course_id === currentCourse):null
    let course = findSelectedCourse ? assignments[0] : null;
// ========== FIND TEACHER ============
    let teachers = this.props.student.myTeacher
    let findTeacher = teachers ? teachers.filter((e,i)=> e.user_id === course.teacher_id):null
    let teacher = teachers ? findTeacher[0] : null;
    
    console.log(teacher)
    // console.log(course)
    return (
        <div>
            {titleMap}
        </div>
    );
  }
}
function mapStateToProps(state){
  return{
        user: state.user
      , student: state.student
      , currentCourseID: state.currentCourseID
  }
}
export default connect(mapStateToProps, {getUser, getStudent, selectedCourse})(Courses);
