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
import StudentsView from '../views/Students/StudentsView.js';
import ParentsView from '../views/Parents/ParentsView.js';
import CreateTeacherView from '../views/CreateTeacher/CreateTeacherView.js';
import CreateStudentView from '../views/CreateStudent/CreateStudentView.js';
import CreateParentView from '../views/CreateParent/CreateParentView.js';
import AssignmentsView from '../views/Assignments/AssignmentsView';

// =========== ROUTES ===============
export default (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route extract path='/authorized' component={LoadData} />
            <Route path='/home' component={Home}/>
            <Route path='/account' component={Account}/>
            <Route path='/dashboard' component={DashboardView}/>
            <Route exact path='/students' component={StudentsView}/>
            <Route path='/students/create-student' component={CreateStudentView} />
            <Route path='/courses' component={CoursesView}/>
            <Route path='/assignments' component={AssignmentsView}/>
            <Route path='/calendar' component={CalendarView}/>
            <Route path='/inbox' component={Inbox}/>
            <Route exact path='/teachers' component={Teachers}/>
            <Route path='/teachers/create-teacher' component={CreateTeacherView}/>
            <Route exact path='/parents' component={ParentsView}/>
            <Route path='/parents/create-parent' component={CreateParentView}/>
        </Switch>

)
