//============= MODULES =============
import React from 'react';
import {Switch, Route} from 'react-router-dom';

// =========== COMPONENTS ===========
import Login from '../views/Login/Login.js';
import LoadData from '../views/LoadData/LoadData.js';
import Home from '../views/Home/Home';
import Account from '../views/Account/Account';
import DashboardView from '../views/Dashboard/DashboardView';
import CoursesView from '../views/Courses/CoursesView';
import CalendarView from '../views/Calendar/CalendarView';
import Inbox from '../views/Inbox/Inbox';
import Teachers from '../views/Teachers/Teachers.js';
import StudentsView from '../views/Students/StudentsView'


// =========== ROUTES ===============
export default (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route extract path='/authorized' component={LoadData} />
            <Route path='/home' component={Home}/>
            <Route path='/account' component={Account}/>
            <Route path='/dashboard' component={DashboardView}/>
            <Route path='/students' component={StudentsView}/>
            <Route path='/courses' component={Courses}/>
            <Route path='/calendar' component={CalendarView}/>
            <Route path='/inbox' component={Inbox}/>
            <Route path='/teachers' component={Teachers}/>
        </Switch>

)
