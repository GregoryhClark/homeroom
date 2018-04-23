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
          account_type: 'Teacher'
        , user_photo: 'undefined'
        , first_name: ''
        , last_name: ''
        , username: ''
        , password: ''
        , email: ''
        }
      , usernameStatus: ''
      , first_nameStatus: ''
      , last_nameStatus: ''
      , passwordStatus: ''
      , emailStatus: ''
      , creationStatus: ''
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
    }

    this.setState({
        newTeacher 
      , usernameStatus: ''
      , first_nameStatus: ''
      , last_nameStatus: ''
      , passwordStatus: ''
      , emailStatus: ''
      , creationStatus: ''
    });
  }

  handleCreate() {
    const newTeacher = this.state.newTeacher;
    const {first_name, last_name, username, password, email} = this.state.newTeacher;
    let flag = true;

    //RESET FLAGS
    this.setState({first_nameStatus: '', last_nameStatus: '', usernameStatus: '', passwordStatus: '', emailStatus: '', creationStatus: ''});

    //SET FLAGS
    if(first_name === '') {this.setState({first_nameStatus: null}); flag = false;}
    if(last_name === '') {this.setState({last_nameStatus: null}); flag = false;}
    if(username === '') {this.setState({usernameStatus: null}); flag = false;}
    if(password === '') {this.setState({passwordStatus: null}); flag = false;}
    if(email === '') {this.setState({emailStatus: null}); flag = false;}

    if(flag) {
      this.setState({creationStatus: 'Pending'})
      axios.post('/createUser', newTeacher).then(res => {
        if(res.data === "Username Unavailable") this.setState({usernameStatus: `Username Unavailable`});
        if(res.data === "Email Unavailable") this.setState({emailStatus: `Email Unavailable`});
        if(res.data === "Success") this.setState({creationStatus: res.data});
      })
    }
  } 

  render() {

    let {first_name, last_name, username, password, email} = this.state.newTeacher;
    const {usernameStatus, first_nameStatus, last_nameStatus, passwordStatus, emailStatus, creationStatus} = this.state;

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
            <input type="text" value={first_name} className={first_nameStatus === null ? 'flag' : null}
            onChange={(e) => this.handleFieldChange(e, 'first_name')}/>
          </div>
          {first_nameStatus === null ? <span className="status">Please provide a first name</span> : ''}

          <div className="field">
            <span>Last Name:</span>
            <input type="text" value={last_name} className={last_nameStatus === null ? 'flag' : null}
            onChange={(e) => this.handleFieldChange(e, 'last_name')}/>
          </div>
          {last_nameStatus === null ? <span className="status">Please provide a last name</span> : ''}

          <div className="field">
            <span>Username:</span>
            <input type="text" value={username} className={usernameStatus === 'Username Unavailable' || usernameStatus === null ? 'flag' : null}
            onChange={(e) => this.handleFieldChange(e, 'username')}/>
          </div>
          {usernameStatus === null ? <span className="status">Please provide a username</span> : ''}
          {usernameStatus === 'Username Unavailable' ? <span className="status">Username unavailable</span> : ''}


          <div className="field">
            <span>Password:</span>
            <input type="text" value={password} className={passwordStatus === null ? 'flag' : null}
            onChange={(e) => this.handleFieldChange(e, 'password')}/>
          </div>
          {passwordStatus === null ? <span className="status">Please provide a password</span> : ''}
          

          <div className="field">
            <span>Email:</span>
            <input type="text" value={email} className={emailStatus === 'Email Unavailable' || emailStatus === null ? 'flag' : null}
            onChange={(e) => this.handleFieldChange(e, 'email')}/>
          </div>
          {emailStatus === null ? <span className="status">Please provide an email</span> : ''}
          {emailStatus === 'Email Unavailable' ? <span className="status">Email unavailable</span> : ''}

          <div className="buttons">
            <button className="clear" onClick={this.handleClear}>Clear</button>
            <button className="create" onClick={this.handleCreate}>Create</button>
          </div>

          {creationStatus === 'Success' ? <span className="creation-status success">Success</span> : ''}
          {creationStatus === 'Success' ? <span className="creation-status success">Success</span> : ''}

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(CreateTeacher)