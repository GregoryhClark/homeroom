import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';
import Dash from './Images/lnr-laptop.svg';
import Course from './Images/lnr-book.svg';
import Calendar from './Images/lnr-calendar-full.svg';
import Inbox from './Images/lnr-envelope.svg';

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            secondaryNav: ''
        }
    }
    
    async componentWillMount(){
        await this.props.getUser();
    }

    componentDidMount() {
        this.setState({secondaryNav: 'home'})
    }

    handleMobileCollapse() {
		const checkbox = document.getElementById('menu-btn')
		checkbox.checked = false;
    }
    

    render() {
        let accountType = this.props.user.account_type_name;
        let {secondaryNav} = this.state;

        return (
            <nav>
                <div>
                    <header className="header">
                        <Link to="/home" className="h-logo" type="home">H</Link>
                        <input className="menu-btn" type="checkbox" id="menu-btn" />
                        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                        <ul className="menu">

                            {/*SHOW FOR ALL USERS*/}
                            <li onClick={this.handleMobileCollapse}>
                                <Link to='/home'
                                onClick={() => this.setState({secondaryNav: 'home'})}>Home</Link>
                            </li>

                            {/*SHOW FOR ADMINISTATORS*/}
                            {accountType === "Administrator" ? 
                            <li onClick={this.handleMobileCollapse}>
                                <Link to='/teachers'
                                onClick={() => this.setState({secondaryNav: 'teachers'})}>Teachers</Link>
                            </li>
                            : ''}

                            {/*SHOW FOR ADMINISTATORS, TEACHERS, PARENTS*/}
                            {accountType !== "Student" ? 
                            <li onClick={this.handleMobileCollapse}>
                                <Link to='/students'
                                onClick={() => this.setState({secondaryNav: 'students'})}>Students</Link>
                            </li>
                            : ''}

                            {/*SHOW FOR ADMINISTATORS*/}
                            {accountType === "Administrator" ? 
                            <li onClick={this.handleMobileCollapse}>
                                <Link to='/parents'
                                onClick={() => this.setState({secondaryNav: 'parents'})}>Parents</Link>
                            </li>
                            : ''}

                            {/*SHOW FOR STUDENTS*/}
                            {accountType === "Student" ? 
                            <li onClick={this.handleMobileCollapse}>
                                <Link to='/dashboard'
                                onClick={() => this.setState({secondaryNav: 'dashboard'})}>Dashboard</Link>
                            </li>
                            : ''}

                            {/*SHOW FOR ADMINISTATORS, TEACHERS, STUDENTS*/}
                            {accountType !== "Parent" ? 
                            <li onClick={this.handleMobileCollapse}>
                                <Link to='/courses'
                                onClick={() => this.setState({secondaryNav: 'courses'})}>Courses</Link>
                            </li>
                            : ''}

                            {/*SHOW FOR TEACHER*/}
                            {accountType === "Teacher" ? 
                            <li onClick={this.handleMobileCollapse}>
                                <Link to='/assignments'
                                onClick={() => this.setState({secondaryNav: 'assignments'})}>Assignments</Link>
                            </li>
                            : ''}

                            {/*SHOW FOR TEACHERS, STUDENTS, PARENTS*/}
                            {accountType !== "Administrator" ? 
                            <li onClick={this.handleMobileCollapse}>
                                <Link to='/calendar'
                                onClick={() => this.setState({secondaryNav: 'calendar'})}>Calendar</Link>
                            </li>
                            : ''}

                            {/*SHOW FOR ADMINISTATORS*/}
                            {accountType === "Administrator" ? 
                            <li onClick={this.handleMobileCollapse}>
                                <Link to='/metrics'
                                onClick={() => this.setState({secondaryNav: 'metrics'})}>Metrics</Link>
                            </li>
                            : ''}

                            {/*SHOW FOR ALL USERS*/}
                            <li onClick={this.handleMobileCollapse}>
                                <Link to='/account'
                                onClick={() => this.setState({secondaryNav: 'myAccount'})}>My Account</Link>
                            </li>

                            {/*SHOW FOR ALL USERS*/}
                            <li onClick={this.handleMobileCollapse}>
                                <a href={process.env.REACT_APP_LOGOUT}>Logout</a>
                            </li>
                        </ul>
                    </header>

                    <div className="secondary-menu">
{/*======== GLOBAL SECONDARY NAVIGATION OPTIONS ========*/}
                        {/*SHOW FOR ALL USERS*/}
                        { secondaryNav === 'home' && 
                        <ul><li>HOME</li></ul> }

                        {/*SHOW FOR ALL USERS*/}
                        {secondaryNav === 'myAccount'
                        && 
                        <ul>
                            <li>MY ACCOUNT</li>
                            <li><Link to='/account'>Account Settings</Link></li>
                        </ul>}


{/*======== ADMINISTRATOR SECONDARY NAVIGATION OPTIONS ========*/}
                        {/*TEACHRERS VIEW FOR ADMINISTRATORS*/}
                        {(secondaryNav === 'teachers' && accountType === "Administrator") && 
                        <ul>
                            <li>TEACHERS</li>
                            <li><Link to='/teachers'>View Teachers</Link></li>
                            <li><Link to='/teachers/create-teacher'>Create Teacher</Link></li>
                        </ul> }

                        {/*STUDENTS VIEW FOR ADMINISTRATORS*/}
                        {(secondaryNav === 'students' && accountType === "Administrator") &&
                        <ul>
                            <li>STUDENTS</li>
                            <li><Link to='/students'>View Students</Link></li>
                            <li><Link to='/students/create-student'>Create Student</Link></li>
                        </ul> }

                        {/*PARENTS VIEW FOR ADMINISTRATORS*/}
                        {(secondaryNav === 'parents' && accountType === "Administrator") && 
                        <ul>
                            <li>PARENTS</li>
                            <li><Link to='/parents'>View Parents</Link></li>
                            <li><Link to='/parents/create-parent'>Create Parent</Link></li>
                        </ul> }

                        {/*COURSES VIEW FOR ADMINISTRATORS*/}
                        {(secondaryNav === 'courses' && accountType === "Administrator") &&
                        <ul>
                            <li>COURSES</li>
                            <li><Link to='/courses'>View Courses</Link></li>
                            <li><Link to='/courses/create-course'>Create Course</Link></li>
                        </ul>}

                        {/*METRICS VIEW FOR ADMINISTRATORS*/}
                        {(secondaryNav === 'metrics' && accountType === "Administrator") &&
                        <ul>
                            <li>METRICS</li>
                            <li><Link to='/courses'>View Metrics</Link></li>
                        </ul>}


{/*======== TEACHER SECONDARY NAVIGATION OPTIONS ========*/}
                        {/*STUDENTS VIEW FOR TEACHERS*/}
                        {(secondaryNav === 'students' && accountType === "Teacher") &&
                        <ul>
                            <li>STUDENTS</li>
                            <li><Link to='/students'>View Students</Link></li>
                        </ul> }

                        {/*COURSES VIEW FOR TEACHERS*/}
                        {(secondaryNav === 'courses' && accountType === "Teacher") &&
                        <ul>
                            <li>COURSES</li>
                            <li><Link to='/courses'>View Courses</Link></li>
                            <li><Link to='/courses/grades'>Grades</Link></li>
                        </ul>}

                        {/*COURSES VIEW FOR TEACHERS*/}
                        {(secondaryNav === 'assignments' && accountType === "Teacher") &&
                        <ul>
                            <li>ASSIGNMENTS</li>
                            <li><Link to='/assignments'>View All</Link></li>
                            <li><Link to='/assignments/assign-assignment'>Assign</Link></li>
                            <li><Link to='/assignments/create-assignment'>Create</Link></li>
                        </ul>}

                        {/*CALENDAR VIEW FOR TEACHERS*/}
                        {(secondaryNav === 'calendar' && accountType === "Teacher") &&
                        <ul>
                            <li>CALENDAR</li>
                            <li><Link to='/calendar'>View Calendar</Link></li>
                        </ul>}

                        
{/*======== STUDENT SECONDARY NAVIGATION OPTIONS ========*/}
                        {/*COURSES VIEW FOR STUDENTS*/}
                        {(secondaryNav === 'dashboard' && accountType === "Student") &&
                        <ul><li>DASHBOARD</li></ul> }

                        {/*COURSES VIEW FOR STUDENTS*/}
                        {(secondaryNav === 'courses' && accountType === "Student") &&
                        <ul>
                            <li>COURSES</li>
                            <li><Link to='/courses'>View Courses</Link></li>
                        </ul>}

                        {/*CALENDAR VIEW FOR STUDENTS*/}
                        {(secondaryNav === 'calendar' && accountType === "Student") &&
                        <ul>
                            <li>CALENDAR</li>
                            <li><Link to='/calendar'>View Calendar</Link></li>
                        </ul>}
                        

{/*======== PARENT SECONDARY NAVIGATION OPTIONS ========*/}
                        {/*STUDENTS VIEW FOR PARENTS*/}
                        {(secondaryNav === 'students' && accountType === "Parent") &&
                        <ul>
                            <li>STUDENTS</li>
                            <li><Link to='/students'>View Students</Link></li>
                        </ul> }

                        {(secondaryNav === 'calendar' && accountType === "Parent") &&
                        <ul>
                            <li>CALENDAR</li>
                            <li><Link to='/calendar'>View Calendar</Link></li>
                        </ul>}

                    </div>
                </div>

{/*============STUDENT NAVIGATION============*/}
                {/* {accountType === 'Student' ? 
                <div className="navbar">
                    <Link to="/home" style={homeStyle} type="home">H</Link>
                    <Links type="account">
                        <img src={this.props.user.photo} style={{borderRadius:"50%", width:"40px"}} alt=""/>
                        Account
                    </Links>
                    <Links type="dashboard">
                        <img src={Dash} style={{width:"30px", marginBottom:"3px"}} alt=""/>
                        Dashboard
                    </Links>
                    <Links type="courses">
                        <img src={Course} style={{width:"30px", marginBottom:"3px"}} alt=""/>
                        Courses
                    </Links>
                    <Links type="calendar">
                        <img src={Calendar} style={{width:"30px", marginBottom:"3px"}} alt=""/>
                        Calendar
                    </Links>
                    <Links type="inbox">
                        <img src={Inbox} style={{width:"30px", marginBottom:"3px"}} alt=""/>
                        Inbox
                    </Links>
                </div> 
                : ''}
                        */}

            </nav>
        )
    }
}
// =========== MAP STATE TO PROPS ======
function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(Navbar);

// =========== LINK ASSIGNMENT =========
function Links(props){
    const styleToApply = props.type ? styleLookup[props.type] : {}
        , style = Object.assign({}, baseStyle, styleToApply);
    return <Link className="nav-link" to={`/${props.type}`} style={style}>{props.children}</Link>
}
// =========== BUTTON STYLES ===========
const homeStyle = {
      backgroundColor:"#383838"
    , borderRadius:"0px 5px 5px 0px"
    , color:"white"
    , fontSize:"60px"
    , textShadow: "0px 4px 4px black"
    , boxShadow: "4px 0px 4px #7d7d7d"
    , zIndex:"1"
    , justifyContent:"center"
    , alignItems:"center"
    , display:"flex"
    , textDecoration:"none"
}

const baseStyle={
      justifyContent:"center"
    , alignItems:"center"
    , display:"flex"
    , textDecoration:"none"
}

const accountStyle={
      backgroundColor:"#EDEDED"
    , color:"#7d7d7d"
}
const dashboardStyle={
      backgroundColor:"#EDEDED"
    , color:"#7d7d7d"
}
const coursesStyle={
      backgroundColor:"#EDEDED"
    , color:"#7d7d7d"
}
const calendarStyle={
      backgroundColor:"#EDEDED"
    , color:"#7d7d7d"
}
const inboxStyle={
      backgroundColor:"#EDEDED"
    , color:"#7d7d7d"
}
// =========== LOOKUP BUTTON ===========
const styleLookup ={
      account:accountStyle
    , dashboard:dashboardStyle
    , courses: coursesStyle
    , calendar: calendarStyle
    , inbox: inboxStyle
}