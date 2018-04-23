//COMPONENTS
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {getUser, getStudent, selectedCourse} from '../../../redux/user';
//CSS, ASSETS
import './CoursesModal.css';

//COMPONENT
class CoursesModal extends React.Component {
  render() {
    let studentData = this.props.student;
    let courseCards = studentData.getCourses ? studentData.getCourses.map((element, index) => {
          return <Link key={index} className="class-link" onClick={()=>this.props.selectedCourse(element.course_id)} to="courses">
                      {element.course_name}
                 </Link>
      }) : null;
    return (
      <div id="courses-modal" className="modal">
            <div className="modal-content" onClick={this.props.updateSecondNav}> <h1>Select a Course</h1>{courseCards}</div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
      student: state.student
    , currentCourseID:state.currentCourseID
  }
}

export default connect(mapStateToProps,{getUser, getStudent, selectedCourse})(CoursesModal)