//============= MODULES =============
import React from 'react';
import {Switch, Route} from 'react-router-dom';

// =========== COMPONENTS ===========
import Login from '../views/Login/Login.js';
import LoadData from '../views/LoadData/LoadData.js';
import Home from '../views/Home/Home';
import Account from '../views/Account/Account';
import DashboardView from '../views/Dashboard/DashboardView';
import Courses from '../views/Courses/Courses';
import CalendarView from '../views/Calendar/CalendarView';
import Inbox from '../views/Inbox/Inbox';
import Teachers from '../views/Teachers/Teachers.js';


// =========== ROUTES ===============
export default (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route extract path='/authorized' component={LoadData} />
            <Route path='/home' component={Home}/>
            <Route path='/account' component={Account}/>
            <Route path='/dashboard' component={DashboardView}/>
            <Route path='/courses' component={Courses}/>
            <Route path='/calendar' component={CalendarView}/>
            <Route path='/inbox' component={Inbox}/>
            <Route path='/teachers' component={Teachers}/>
        </Switch>

)
