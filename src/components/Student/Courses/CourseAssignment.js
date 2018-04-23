import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser, getStudent, selectedCourse} from '../../../redux/user';
import Moment from 'react-moment';
import './Courses.css'

class CourseAssignment extends Component {
  render() {
    let currentCourse        = this.props.currentCourseID;
    let currentAssignments   = this.props.student.getAssignments;
    let findSelectedCourse   = this.props.student.getCourses;
    let findSelectedCalendar = this.props.student.calendar;
    let courseName           = findSelectedCourse ? findSelectedCourse.filter((e,i)=> e.course_id === currentCourse):null;
    let course               = findSelectedCourse ? courseName[0] : null;
    let assignments          = currentAssignments ? currentAssignments.filter((e,i)=> e.student_assignments_course_id === currentCourse):null
    let gradeTotal           = assignments.map((e,i)=>e.points_earned).reduce((a,c)=>(a+c));
    let gradePossibleTotal   = assignments.map((e,i)=>e.possible_points).reduce((a,c)=>(a+c));
    let gradeAvg             = gradeTotal / assignments.length;
    let studentGrades        = assignments.map((e,i)=>{
      return (
        <tr key={i}>
          <td>{e.assignment_name}</td>
          <td>{<Moment format='MM-DD-YYYY'>{e.due_date}</Moment>}</td>
          <td>{e.points_earned}</td>
          <td>{e.possible_points}</td>
        </tr>) 
    });
    console.log(assignments)
    console.log(findSelectedCalendar)
    return (
      <div className="table-container">
        <div className="align-assign">
          <h1>{`Grades for ${course.course_name}`}</h1>
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
              <thead>
                <tr>
                    <th>Total</th>
                    <th></th>
                    <th>{gradeAvg ? gradeAvg.toFixed(2):null}%</th>
                    <th>{gradeTotal} / {gradePossibleTotal}</th>
                </tr>
              </thead>
          </table>
          </div>
        <div className="align-assign">
          <h1>Upcoming Assignments</h1>
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