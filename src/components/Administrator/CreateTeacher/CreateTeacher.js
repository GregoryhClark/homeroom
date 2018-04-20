//MODULES
import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

//CSS, ASSETS
import './CreateTeacher.css';

//COMPONENT
class CreateTeacher extends React.Component {
  constructor() {
    super()
    this.state = {
      newTeacher: {
          user_photo: ''
        , first_name: ''
        , last_name: ''
        , username: ''
        , password: ''
        , email: ''
      }
    }
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleFieldChange(e, field) {
    const newTeacher = {...this.state.newTeacher};
    newTeacher[field] = e.target.value;
    this.setState({newTeacher});
  }

  handleClear() {
    const newTeacher = {
        user_photo: 'undefined'
      , first_name: ''
      , last_name: ''
      , username: ''
      , password: ''
      , email: ''
    };
    this.setState({newTeacher});
  }

  handleCreate() {
    const newTeacher = this.state.newTeacher;
    axios.post('/createUser', newTeacher).then()
  }

  render() {

    let {first_name, last_name, username, password, email} = this.state.newTeacher;

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
            <input type="text" value={first_name} 
            onChange={(e) => this.handleFieldChange(e, 'first_name')}/>
          </div>

          <div className="field">
            <span>Last Name:</span>
            <input type="text" value={last_name} 
            onChange={(e) => this.handleFieldChange(e, 'last_name')}/>
          </div>

          <div className="field">
            <span>Username:</span>
            <input type="text" value={username} 
            onChange={(e) => this.handleFieldChange(e, 'username')}/>
          </div>

          <div className="field">
            <span>Password:</span>
            <input type="text" value={password} 
            onChange={(e) => this.handleFieldChange(e, 'password')}/>
          </div>

          <div className="field">
            <span>Email:</span>
            <input type="text" value={email} 
            onChange={(e) => this.handleFieldChange(e, 'email')}/>
          </div>

          <div className="buttons">
            <button className="clear" onClick={this.handleClear}>Clear</button>
            <button className="create" onClick={this.handleCreate}>Create</button>
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