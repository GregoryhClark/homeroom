import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser, getStudent} from '../../../redux/user';

class Courses extends Component {
  render() {
    let titleNames = ["Course", "Teacher","Term","Enrolled as"];
    let titleMap = titleNames.map((e,i)=>{return <th key={i}>{`${e}`}</th>})
    // let studentCourses = this.props.student.getCourses
    // let gradeTotal = studentCourses.map((e,i)=>{
    //   return console.log(e)
    // })
    return (
      <div className="teachers-overflow">
      <table className="teachers-table">
          <thead>
              <tr>
                  {titleMap}
              </tr>
          </thead>
          <tbody>

          </tbody>
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
export default connect(mapStateToProps, {getUser, getStudent})(Courses);
