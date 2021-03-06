import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser, getStudent, selectedCourse} from '../../../redux/user';
import Moment from 'react-moment';
import './Courses.css'
import * as functions from '../../../utils/functions'

class CourseAssignment extends Component {
  constructor(){
    super()
      this.state={
        checked:false
      }
      this.handleClick = this.handleClick.bind(this)
  }
  handleClick(value){
    this.setState({checked:value})
  }
  render() {
    let isChecked            = this.state.checked
// ========== CURRENT COURSE ==========   
    let currentCourse        = this.props.currentCourseID;
// ====== FIND CLASS ASSIGNMENTS ======
    let currentAssignments   = this.props.student.getAssignments;
    let findSelectedCourse   = this.props.student.getCourses;
    let courseName           = findSelectedCourse ? findSelectedCourse.filter((e,i)=> e.course_id === currentCourse):null;
    let course               = findSelectedCourse ? courseName[0] : null;
// ===== GET ASSIGNMENTS AND AVG ======
    let assignments          = currentAssignments ? currentAssignments.filter((e,i)=> e.student_assignments_course_id === currentCourse):null
    let gradeTotal           = isChecked ? assignments.map((e,i)=>e.points_earned !== null ? e.points_earned:null).filter((e)=> e !== null):assignments.map((e,i)=>e.points_earned);
    let gradeSubmitAverage   = gradeTotal.reduce((a,c)=>(a+c))
    let gradePossibleTotal   = isChecked ? assignments.map((e,i)=>e.points_earned !== null ? e.possible_points:null ).reduce((a,c)=>(a+c)): assignments.map((e,i)=>e.possible_points).reduce((a,c)=>(a+c));
    let gradeAvg             = isChecked ? gradeSubmitAverage / gradeTotal.length : gradeSubmitAverage / assignments.length;
// ========== FIND TEACHER ============
    let teachers             = this.props.student.myTeacher
    let findTeacher          = teachers ? teachers.filter((e,i)=> e.user_id === course.teacher_id):null
    let teacher              = teachers ? findTeacher[0] : null;
    let sorted               = assignments.sort((a,b)=>{return a.student_assignment_id - b.student_assignment_id})
// ===== GET UPCOMING ASSIGNMENTS ======
    let filterCalendar = functions.filterSorted(sorted).map((e,i)=>{
      return (
      <div className="assignment-list" key={i}>{`Next Assignments ${e.assignment_name} is due on `}<Moment format='MM-DD-YYYY'>{e.due_date}</Moment></div>
      )
    })
    let studentGrades = sorted.map((e,i)=>{
      return (
        <tr key={i}>
          <td>{e.assignment_name}</td>
          <td>{<Moment format='MM-DD-YYYY'>{e.due_date}</Moment>}</td>
          <td>{e.points_earned !== null ? e.points_earned:"-"}</td>
          <td>{e.possible_points}</td>
        </tr>) 
    });
// =============== RETURN ==============   
    return (
      <div id="admin-home" className="course-container course">     

        <div className="left-column">
        {teacher.user_photo === 'undefined'|| null ? <div style={noPhoto}><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/500px-Gnome-stock_person.svg.png"} style={profilePicture} alt="User Profile"/></div> : <img src={teacher.user_photo} style={profilePicture} alt="User Profile"/>}
          <h1 className="horizontal-line">{`Welcome to Professor ${teacher.last_name}'s class!`}</h1>
            <p>{`${course.course_description}`}</p>
            <h1 className="horizontal-line">Upcoming Assignments</h1>
            <p>{filterCalendar.length ? filterCalendar: "No assignments due for the next week"}</p>
            <h1 className="horizontal-line">Recent Feedback</h1>
            <p className="gray">{filterCalendar.length ? "Nothing for now" : "Nothing for now"}</p>
        </div>


        <div className="right-column"> 
                
        <div className="align-assign">
          <h1 className="horizontal-line">{`Grades for ${course.course_name}`}</h1>

        </div>
        <div className="table-overflow table-width">
          <table className="table align-table">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Due</th>
                      <th>Score</th>
                      <th>Out of</th>
                  </tr>
              </thead>
              <tbody>
                {studentGrades}
              </tbody>
              <tfoot>
                <tr>
                    <td>Total</td>
                    <td></td>
                    <td>{gradeAvg ? gradeAvg.toFixed(2):null}%</td>
                    <td>{gradeSubmitAverage} / {gradePossibleTotal}</td>
                </tr>
              </tfoot>  
          </table>
          <div className="check-total">
            <input type="checkbox" onClick={(e)=>this.handleClick(e.target.checked)}/>
            <span>Calculate based only on graded assignments</span>
          </div>
        </div> 
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
export default connect(mapStateToProps, {getUser, getStudent, selectedCourse})(CourseAssignment);

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
, marginBottom: '20px'
}