import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
import unregister from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(
   <Router>
        <Provider store={store}>
            <MuiThemeProvider>
                <App />
                </MuiThemeProvider>
        </Provider>
   </Router>
   , document.getElementById('root'));

unregister();
