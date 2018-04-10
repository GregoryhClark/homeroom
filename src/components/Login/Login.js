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
         console.log(res)
         this.props.history.push(res.headers.location)
      })
   }

   render() {
      let {username, password} = this.state;

      return(
         <div>
            <form onSubmit={this.handleLogin}>
               <input type='text' value={username} 
                  onChange={(e) => this.setState({username: e.target.value})}/>
               <input type='password' value={password} 
                  onChange={(e) => this.setState({password: e.target.value})}/>
               <button>Login</button>
            </form>
         </div>
      )
   }
}

