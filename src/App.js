import React, { Component } from 'react';
import './App.css'; 
import routes from './routes/routes.js';
import Navbar from './components/Navbar/Navbar'

export default class App extends Component {
  render() {
    const currentPath = document.location.hash;
    return (
      <div className="app">
        {currentPath === "#/" ? '' : <Navbar/>}
        {routes}
      </div>
    );
  }
}