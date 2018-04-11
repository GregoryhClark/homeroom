//MODULES
import React from 'react';

//COMPONENTS
import Login from '../../components/Login/Login.js';

export default class LoginView extends React.Component {
   render() {
      return (
         <Login history={this.props.history}/>
      )
   }
}