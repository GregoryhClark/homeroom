import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser, getStudent, selectedCourse} from '../../../redux/user';
import Moment from 'react-moment';


class Courses extends Component {
  render() {
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
// ===== GET UPCOMING ASSIGNMENTS ======
    let currentAssignments = this.props.student.getAssignments;
    let calendar = currentAssignments ? currentAssignments.filter((e,i)=> e.student_assignments_course_id === currentCourse):null;
    let sorted  = calendar.sort((a,b)=>{return a.student_assignment_id - b.student_assignment_id})
    let filterCalendar = sorted.filter(e=> Date.parse(e.due_date) >= new Date().getTime()).map((e,i)=>{
      return (
      <div className="assignment-list" key={i}>{`Next Assignments ${e.assignment_name} is due on `}<Moment format='MM-DD-YYYY'>{e.due_date}</Moment></div>
      )
    })
// =============== RETURN ==========
    return (
      <div className="course-container">
        <div className="left-column">
          {teacher.user_photo === 'undefined'|| null ? <div style={noPhoto}><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/500px-Gnome-stock_person.svg.png"} style={profilePicture} alt="User Profile"/></div> : <img src={teacher.user_photo} style={profilePicture} alt="User Profile"/>} 
          <h1 className="course-title">{`Welcome to Professor ${teacher.last_name}'s class!`}</h1>
          <h2>{`${course.course_description}`}</h2>
          <h1 className="course-title">Upcoming Assignments</h1>
          {filterCalendar.length ? filterCalendar:<div>No assignments due for the next week</div>}
          <h1 className="course-title">Recent Feedback</h1>
          {filterCalendar.length ? "Nothing for now" : "Nothing for now"}
        </div>
        <div className="right-column">
          <h1 className="course-title">{`${course.course_name}`}</h1>
          <h1>Instructor Contact Information</h1>
          <p>{`Name: ${teacher.first_name}`}</p>
          <p>{`Office:`}</p>
          <p>{`Office Hours:`}</p>
          <p>{`Email: ${teacher.email}`}</p>

          <h1 className="course-title">{`Course Syllabus`}</h1>
        </div>
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

const noPhoto ={
  height:"250px"
, width:"250px"
, position:"relative"
, borderRadius:"50%"
, display:"block"
, margin: "auto"
, backgroundColor:"#EEE"
}
const profilePicture ={
  width:"100%"
, maxWidth:"250px"
, borderRadius:"50%"
, display:"block"
, margin: "auto"
, backgroundColor:"#EEE"
, boxShadow:"1px 1px 15px #CCC"
}