import React, { Component } from 'react';
import './App.css'; 
import routes from './routes/routes.js';
import Navbar from './components/Navbar/Navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {routes}
      </div>
    );
  }
}