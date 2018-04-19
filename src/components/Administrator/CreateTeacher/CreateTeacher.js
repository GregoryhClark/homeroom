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
        <h1>Create Teacher</h1>

          <div className="photo-container">
            <div className="photo">
              <a href="" className="add-photo">Add Photo</a>
            </div>
          </div>

          <div className="field">
            <span>First Name:</span>
            <input type="text"/>
          </div>

          <div className="field">
            <span>Last Name:</span>
            <input type="text"/>
          </div>

          <div className="field">
            <span>Username:</span>
            <input type="text"/>
          </div>

          <div className="field">
            <span>Email:</span>
            <input type="text"/>
          </div>

          <div className="buttons">
            <button className="clear">Clear</button>
            <button className="create">Create</button>
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