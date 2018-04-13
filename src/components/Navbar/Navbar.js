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
    
    async componentWillMount(){
        await this.props.getUser();
    }

    handleMobileCollapse() {
		const checkbox = document.getElementById('menu-btn')
		checkbox.checked = false;
	}

    render() {
        let accountType = this.props.user.account_type_name;
        return (
            <nav>

{/*============MOBILE NAVIGATION============*/}
                    <div className="nav">
                        <Link to="/home" className="logo-styling" type="home">H</Link>
                        <input className="menu-btn" type="checkbox" id="menu-btn" />
						<label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                        <ul className="menu">

                            {/*SHOW FOR ALL USERS*/}
                            <li onClick={this.handleMobileCollapse}>
                                <Link to='/home'>Home</Link>
                            </li>

                            {/*SHOW FOR ADMINISTATORS*/}
                            {accountType === "Administrator" ? 
                            <li onClick={this.handleMobileCollapse}>
                                <Link to='/teachers'>Teachers</Link>
                            </li>
                            : ''}

                            {/*SHOW FOR ADMINISTATORS, TEACHERS, PARENTS*/}
                            {accountType !== "Student" ? 
                            <li onClick={this.handleMobileCollapse}>
                                <Link to='/students'>Students</Link>
                            </li>
                            : ''}

                            {/*SHOW FOR ADMINISTATORS*/}
                            {accountType === "Administrator" ? 
                            <li onClick={this.handleMobileCollapse}>
                                <Link to='/parents'>Parents</Link>
                            </li>
                            : ''}

                            {/*SHOW FOR ADMINISTATORS, TEACHERS, STUDENTS*/}
                            {accountType !== "Parent" ? 
                            <li onClick={this.handleMobileCollapse}>
                                <Link to='/courses'>Courses</Link>
                            </li>
                            : ''}

                            {/*SHOW FOR ADMINISTATORS*/}
                            {accountType === "Administrator" ? 
                            <li onClick={this.handleMobileCollapse}>
                                <Link to='/metrics'>Metrics</Link>
                            </li>
                            : ''}


                            {/*SHOW FOR ALL USERS*/}
                            <li onClick={this.handleMobileCollapse}>
                                <a href={process.env.REACT_APP_LOGOUT}>Logout</a>
                            </li>

                        </ul>




                    </div>

{/*============TEACHER NAVIGATION============*/}
                {accountType === 'Teacher' ? <div>Teacher</div> : ''}

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

{/*============PARENT NAVIGATION============*/}


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