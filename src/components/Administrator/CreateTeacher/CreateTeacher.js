//MODULES
import React from 'react';
import {connect} from 'react-redux';

//CSS, ASSETS
import './CreateTeacher.css';

//COMPONENT
class CreateTeacher extends React.Component {
  render() {
    return (
      <div className="creation-form">
        <h1 className="horizontal-line">Create Teacher</h1>

          <div className="field">
            <span>First Name:</span>
            <input type="text"/>
          </div>

          <div className="field">
            <span>Last Name:</span>
            <input type="text"/>
          </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(CreateTeacher)