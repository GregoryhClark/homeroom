//============= MODULES =============
import React from 'react';
import {Switch, Route} from 'react-router-dom';

// =========== COMPONENTS ===========
import Login from '../components/Login/Login.js';
import Home from '../views/Home/Home';
// =========== ROUTES ===============
export default (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/home' component={Home}/>
        </Switch>

)