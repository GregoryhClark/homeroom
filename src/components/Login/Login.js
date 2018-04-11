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
      }
      this.handleLogin = this.handleLogin.bind(this);
   }

   handleLogin(e) {
      e.preventDefault(); //PREVENTS BROWSER REFRESH ON SUBMIT
      const {username, password} = this.state;

      axios.post('/api/login', {username, password}).then(res => {
         this.props.history.push(res.headers.location)
      })
   }

   render() {
      let {username, password} = this.state;

      return(
         <div className="login-page">

            <div className="login-container-left">
               <div className="logo">Homeroom</div>
               <form className="login-form" onSubmit={this.handleLogin}>
                  <span>Username</span>
                  <input type='text' value={username} 
                     onChange={(e) => this.setState({username: e.target.value})}/>
                  <span>Password</span>
                  <input type='password' value={password} 
                     onChange={(e) => this.setState({password: e.target.value})}/>
                  <button>LOG IN</button>
               </form>
               <footer>Homeroom &copy; 2018 </footer>
            </div>

         </div>
      )
   }
}

