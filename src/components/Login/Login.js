//MODULES
import React from 'react';
import axios from 'axios';

//CSS, ASSETS
import './Login.css'

//COMPONENT
export default class Login extends React.Component {
   constructor() {
      super()
      this.state = {
         username: ''
         , password: ''
         , status: false
      }
      this.handleLogin = this.handleLogin.bind(this);
   }

   handleLogin(e) {
      e.preventDefault(); //PREVENTS BROWSER REFRESH ON SUBMIT
      let {username, password} = this.state;
      let flag = true;

      //CHECK IF USERNAME FIELD IS BLANK
      if(username === '') {
         const usernameField = document.getElementById("login-username");
         usernameField.style.border = "1px solid  #ff6666";
         usernameField.setAttribute('placeholder', 'Username Required');
         flag = false;
      }

      //CHECK IF PASSWORD FIELD IS BLANK
      if(password === '') {
         const passwordField = document.getElementById("login-password");
         passwordField.style.border = "1px solid  #ff6666";
         passwordField.setAttribute('placeholder', 'Password Required');
         flag = false;
      }

      //CHANGE USERNAME TO LOWERCASE
      username = username.toLowerCase();

      //PROCESS LOGIN IF flag IS TRUE
      if(flag) {
         axios.post('/api/login', {username, password}).then(res => {

            //CHECK IF UNAUTHORIZED (BAD CREDENTIALS)
            if(res.data === "Unauthorized") {
               this.setState({status: true})
            } else {
               console.log(res.data)
               this.props.history.push(res.headers.location)
            }
         })
      }
   }

   render() {
      let {username, password, status} = this.state;

      return(
         <div className="login-page">

            <div className="login-container-left">
               <div className="logo">Homeroom</div>
               <div id="error-text-parent">{status && <div id="error-text-child">Invalid Credentials</div>}</div>
               <form className="login-form" onSubmit={this.handleLogin}>
                  <span>Username</span>
                  <input type='text' id="login-username" value={username} 
                     onChange={(e) => this.setState({username: e.target.value})}/>
                  <span>Password</span>
                  <input type='password' id="login-password" value={password} 
                     onChange={(e) => this.setState({password: e.target.value})}/>
                  <button>LOG IN</button>
               </form>
            </div>


            <div className="login-container-right">
            </div>

         </div>
      )
   }
}

