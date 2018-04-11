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
        console.log("getUser: Navbar",this.props.user)
    }
    render() {
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
            , textDecoration:"none"}
        return (
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