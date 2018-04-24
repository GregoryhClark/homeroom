//MODULES
import React from 'react';
import axios from 'axios';

//CSS, ASSETS
import './CreateNewUser.css';

//COMPONENT
export default class CreateNewUser extends React.Component {
  constructor() {
    super()
    this.state = {
      newUser: {
          account_type: ''
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

  componentDidMount() {
    let newUser = {...this.state.newUser};
    newUser.account_type = this.props.account_type;
    this.setState({newUser});
  }

  handleFieldChange(e, field) {
    const newUser = {...this.state.newUser};
    newUser[field] = e.target.value;
    this.setState({newUser});
  }

  handleClear() {
    const newUser = {
        user_photo: 'undefined'
      , first_name: ''
      , last_name: ''
      , username: ''
      , password: ''
      , email: ''
    }

    this.setState({
        newUser 
      , usernameStatus: ''
      , first_nameStatus: ''
      , last_nameStatus: ''
      , passwordStatus: ''
      , emailStatus: ''
      , creationStatus: ''
    });
  }

  handleCreate() {
    const newUser = this.state.newUser;
    const {first_name, last_name, username, password, email} = this.state.newUser;
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
      axios.post('/createUser', newUser).then(res => {
        if(res.data === "Username Unavailable") {
          this.setState({usernameStatus: `Username Unavailable`});
          this.setState({creationStatus: ''})
        }
        if(res.data === "Email Unavailable") {
          this.setState({emailStatus: `Email Unavailable`})
          this.setState({creationStatus: ''})
        }
        if(res.data === "Success") {
          this.setState({creationStatus: res.data});
          this.props.updateRedux();
        }
      })
    }
  } 

  render() {

    let {first_name, last_name, username, password, email} = this.state.newUser;
    const {usernameStatus, first_nameStatus, last_nameStatus, passwordStatus, emailStatus, creationStatus} = this.state;

    return (
      <div className="creation-form">
        <h1>{this.props.h1}</h1>

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
          {creationStatus === 'Pending' ? <span className="creation-status pending">Pending...</span> : ''}
          {creationStatus === 'Success' ? <span className="creation-status success">Success</span> : ''}

      </div>
    )
  }
}