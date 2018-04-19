import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser, getStudent} from '../../../redux/user';
import Moment from 'react-moment';

class CourseAssignment extends Component {
  render() {
    let assignments = this.props.student.getAssignments;
    let gradeAvg = assignments.map((e,i)=>e.points_earned).reduce((a,c)=>(a+c)) / assignments.length;
    let gradeTotal = assignments.map((e,i)=>e.points_earned).reduce((a,c)=>(a+c));
    let gradePossibleTotal = assignments.map((e,i)=>e.possible_points).reduce((a,c)=>(a+c));
    let studentGrades = assignments.map((e,i)=>{
      return (
        <tr key={i}>
          <td>{e.assignment_name}</td>
          <td>{<Moment format='MM-DD-YYYY'>{e.due_date}</Moment>}</td>
          <td>{e.points_earned}</td>
          <td>{e.possible_points}</td>
        </tr>) 
    });
    
    return (
      <div className="teachers-overflow">
      <table className="teachers-table">
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
                <th>{gradeAvg.toFixed(2)}%</th>
                <th>{gradeTotal} / {gradePossibleTotal}</th>
            </tr>
          </thead>
      </table>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
        user: state.user
      , student: state.student
  }
}
export default connect(mapStateToProps, {getUser, getStudent})(CourseAssignment);