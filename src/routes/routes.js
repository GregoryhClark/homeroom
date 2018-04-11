//============= MODULES =============
import React from 'react';
import {Switch, Route} from 'react-router-dom';

// =========== COMPONENTS ===========
import Login from '../views/Login/Login.js';
import Home from '../views/Home/Home';
import Account from '../views/Account/Account';
import Dashboard from '../views/Dashboard/Dashboard';
import Courses from '../views/Courses/Courses';
import Calendar from '../views/Calendar/Calendar';
import Inbox from '../views/Inbox/Inbox';
import Chart from '../components/Chart/Chart';

// =========== ROUTES ===============
export default (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/home' component={Home}/>
            <Route path='/account' component={Account}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/courses' component={Courses}/>
            <Route path='/calendar' component={Calendar}/>
            <Route path='/inbox' component={Inbox}/>
            <Route path='/chart' component={Chart}/>
        </Switch>

)