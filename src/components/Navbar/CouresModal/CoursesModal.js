//COMPONENTS
import React from 'react';
import {connect} from 'react-redux';

//CSS, ASSETS
import './CoursesModal.css';

//COMPONENT
class CoursesModal extends React.Component {
  render() {
    console.log(this.updateSecondNav)
    return (
      <div id="courses-modal" className="modal">
          <div className="modal-content">
            <span onClick={this.props.updateSecondNav}>Hello</span>
          </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    courseID: state.currentCourseID
  }
}

export default connect(mapStateToProps)(CoursesModal)