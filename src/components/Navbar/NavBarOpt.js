// import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
// import './Navbar.css'
// import {connect} from 'react-redux';
// import {getUser, getTeachers, getParents} from '../../redux/user';

// class Navbar extends Component {
//     constructor() {
//         super()
//         this.state = {
//             secondaryNav: ''
//         }
//         this.handleOnClick = this.handleOnClick.bind(this)
//     }
//     async componentWillMount(){
//         await this.props.getUser();
//         await this.props.getTeachers();
//         await this.props.getParents();
//         console.log(this.props.teacherData)
//         console.log(this.props.parentsData)
//     }
//     componentDidMount() {
//         this.setState({secondaryNav: 'home'})
//     }
//     handleMobileCollapse() {
// 		const checkbox = document.getElementById('menu-btn')
// 		checkbox.checked = false;
//     }
//     handleOnClick(value){
//         this.setState({secondaryNav:value})
//     }
//     render() {
//         let accountType = this.props.user.account_type;
//         let {secondaryNav} = this.state;
//         // console.log("RENDER", secondaryNav)
        
//         return (
//             <nav>
//                 <MainHeader type="header">
//                     <Link to="/home" className="h-logo" type="home">H</Link>
//                     <input className="menu-btn" type="checkbox" id="menu-btn" />
//                     <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
// {/*=========== ADMINISTRATOR NAVIGATION OPTIONS ===========*/}  
//                     <MainNavUL type="Administrator" accountType={accountType}>
//                         <MainNavItem type="nav-li"><Links type="home" clickIt={this.handleOnClick}>Home</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><Links type="teachers" clickIt={this.handleOnClick}>Teachers</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><Links type="parents" clickIt={this.handleOnClick}>Parents</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><Links type="students" clickIt={this.handleOnClick}>Students</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><Links type="courses" clickIt={this.handleOnClick}>Courses</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><Links type="metrics" clickIt={this.handleOnClick}>Metrics</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><Links type="account" clickIt={this.handleOnClick}>My Account</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><a href={process.env.REACT_APP_LOGOUT}>Logout</a></MainNavItem>
//                     </MainNavUL>
// {/*=========== TEACHERS NAVIGATION OPTIONS ================*/}                    
//                     <MainNavUL type="Teacher" accountType={accountType}>
//                         <MainNavItem type="nav-li"><Links type="home" clickIt={this.handleOnClick}>Home</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><Links type="students" clickIt={this.handleOnClick}>Students</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><Links type="courses" clickIt={this.handleOnClick}>Courses</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><Links type="assignments" clickIt={this.handleOnClick}>Assignments</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><Links type="calendar" clickIt={this.handleOnClick}>Calendar</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><Links type="account" clickIt={this.handleOnClick}>My Account</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><a href={process.env.REACT_APP_LOGOUT}>Logout</a></MainNavItem>
//                     </MainNavUL>
// {/*=========== PARENTS NAVIGATION OPTIONS =================*/}
//                     <MainNavUL type="Parent" accountType={accountType}>
//                         <MainNavItem type="nav-li"><Links type="home" clickIt={this.handleOnClick}>Home</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><Links type="students" clickIt={this.handleOnClick}>Students</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><Links type="calendar" clickIt={this.handleOnClick}>Calendar</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><Links type="account" clickIt={this.handleOnClick}>My Account</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><a href={process.env.REACT_APP_LOGOUT}>Logout</a></MainNavItem>
//                     </MainNavUL>
// {/*=========== STUDENTS NAVIGATION OPTIONS ================*/}
//                     <MainNavUL type="Student" accountType={accountType}>
//                         <MainNavItem type="nav-li"><Links type="home" clickIt={this.handleOnClick}>Home</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><Links type="dashboard" clickIt={this.handleOnClick}>Dashboard</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><Links type="courses" clickIt={this.handleOnClick}>Courses</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><Links type="calendar" clickIt={this.handleOnClick}>Calendar</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><Links type="account" clickIt={this.handleOnClick}>My Account</Links></MainNavItem>
//                         <MainNavItem type="nav-li"><a href={process.env.REACT_APP_LOGOUT}>Logout</a></MainNavItem>
//                     </MainNavUL>
//                 </MainHeader>
// {/*=========== ADMINISTRATOR SECONDARY NAVIGATION OPTIONS ===========*/}              
//                 <SubMenu type="Administrator" accountType={accountType}>
//                     <SubNavUL type="home" subNav={secondaryNav}><SubNavItem type="sub-nav-li">HOME</SubNavItem></SubNavUL>
//                     <SubNavUL type="teachers" subNav={secondaryNav}>
//                         <SubNavItem type="sub-nav-li">TEACHERS</SubNavItem>
//                         <SubNavItem type="sub-nav-li"><Links type="teachers">View Teachers</Links></SubNavItem>
//                         <SubNavItem type="sub-nav-li"><SubLinks type="teachers/create-teacher">Create Teacher</SubLinks></SubNavItem>
//                     </SubNavUL>
//                     <SubNavUL type="students" subNav={secondaryNav}>
//                         <SubNavItem type="sub-nav-li">STUDENTS</SubNavItem>
//                         <SubNavItem type="sub-nav-li"><Links type="students">View Teachers</Links></SubNavItem>
//                         <SubNavItem type="sub-nav-li"><SubLinks type="students/create-student">Create Student</SubLinks></SubNavItem>
//                     </SubNavUL>
//                     <SubNavUL type="parents" subNav={secondaryNav}>
//                         <SubNavItem type="sub-nav-li">PARENTS</SubNavItem>
//                         <SubNavItem type="sub-nav-li"><Links type="parents">View Parents</Links></SubNavItem>
//                         <SubNavItem type="sub-nav-li"><SubLinks type="parents/create-parent">Create Parent</SubLinks></SubNavItem>
//                     </SubNavUL>
//                     <SubNavUL type="courses" subNav={secondaryNav}>
//                         <SubNavItem type="sub-nav-li">COURSES</SubNavItem>
//                         <SubNavItem type="sub-nav-li"><Links type="courses">View Courses</Links></SubNavItem>
//                         <SubNavItem type="sub-nav-li"><SubLinks type="courses/create-course">Create Course</SubLinks></SubNavItem>
//                     </SubNavUL>
//                     <SubNavUL type="metrics" subNav={secondaryNav}>
//                         <SubNavItem type="sub-nav-li">METRICS</SubNavItem>
//                         <SubNavItem type="sub-nav-li"><Links type="courses">View Metrics</Links></SubNavItem>
//                     </SubNavUL>
//                     <SubNavUL type="myAccount" subNav={secondaryNav}>
//                         <SubNavItem type="sub-nav-li">MY ACCOUNT</SubNavItem>
//                         <SubNavItem type="sub-nav-li"><Links type="account">Account Settings</Links></SubNavItem>
//                     </SubNavUL>
//                 </SubMenu>
// {/*=========== TEACHER SECONDARY NAVIGATION OPTIONS ===========*/} 
//                 <SubMenu type="Teacher" accountType={accountType}>
//                     <SubNavUL type="home" subNav={secondaryNav}><SubNavItem type="sub-nav-li">HOME</SubNavItem></SubNavUL>
//                     <SubNavUL type="students" subNav={secondaryNav}>
//                         <SubNavItem type="sub-nav-li">STUDENTS</SubNavItem>
//                         <SubNavItem type="sub-nav-li"><Links type="students">View Students</Links></SubNavItem>
//                     </SubNavUL>
//                     <SubNavUL type="courses" subNav={secondaryNav}>
//                         <SubNavItem type="sub-nav-li">COURSES</SubNavItem>
//                         <SubNavItem type="sub-nav-li"><Links type="courses">View Courses</Links></SubNavItem>
//                         <SubNavItem type="sub-nav-li"><SubLinks type="courses/grades">Grades</SubLinks></SubNavItem>
//                     </SubNavUL>
//                     <SubNavUL type="assignments" subNav={secondaryNav}>
//                         <SubNavItem type="sub-nav-li">ASSIGNMENTS</SubNavItem>
//                         <SubNavItem type="sub-nav-li"><Links type="assignments">View All</Links></SubNavItem>
//                         <SubNavItem type="sub-nav-li"><SubLinks type="assignments/assign-assignment">Assign</SubLinks></SubNavItem>
//                         <SubNavItem type="sub-nav-li"><SubLinks type="assignments/create-assignment">Create</SubLinks></SubNavItem>
//                     </SubNavUL>
//                     <SubNavUL type="calendar" subNav={secondaryNav}>
//                         <SubNavItem type="sub-nav-li">CALENDAR</SubNavItem>
//                         <SubNavItem type="sub-nav-li"><Links type="calendar">View Calendar</Links></SubNavItem>
//                     </SubNavUL>
//                     <SubNavUL type="myAccount" subNav={secondaryNav}>
//                         <SubNavItem type="sub-nav-li">MY ACCOUNT</SubNavItem>
//                         <SubNavItem type="sub-nav-li"><Links type="account">Account Settings</Links></SubNavItem>
//                     </SubNavUL>
//                 </SubMenu>
// {/*=========== PARENT SECONDARY NAVIGATION OPTIONS ===========*/}
//                 <SubMenu type="Parent" accountType={accountType}>
//                     <SubNavUL type="home" subNav={secondaryNav}><SubNavItem type="sub-nav-li">HOME</SubNavItem></SubNavUL>
//                     <SubNavUL type="students" subNav={secondaryNav}>
//                         <SubNavItem type="sub-nav-li" >STUDENTS</SubNavItem>
//                         <SubNavItem type="sub-nav-li"><Links type="students">View Students</Links></SubNavItem>
//                     </SubNavUL>
//                     <SubNavUL type="calendar" subNav={secondaryNav}>
//                         <SubNavItem type="sub-nav-li">CALENDAR</SubNavItem>
//                         <SubNavItem type="sub-nav-li"><Links type="calendar">View Calendar</Links></SubNavItem>
//                     </SubNavUL>
//                     <SubNavUL type="myAccount" subNav={secondaryNav}>
//                         <SubNavItem type="sub-nav-li">MY ACCOUNT</SubNavItem>
//                         <SubNavItem type="sub-nav-li"><Links type="account">Account Settings</Links></SubNavItem>
//                     </SubNavUL>
//                 </SubMenu>
// {/*=========== STUDENT SECONDARY NAVIGATION OPTIONS ===========*/}
//                 <SubMenu type="Student" accountType={accountType}>
//                     <SubNavUL type="home" subNav={secondaryNav}><SubNavItem type="sub-nav-li">HOME</SubNavItem></SubNavUL>
//                     <SubNavUL type="dashboard" subNav={secondaryNav}>
//                         <SubNavItem type="sub-nav-li">DASHBOARD</SubNavItem>
//                     </SubNavUL>
//                     <SubNavUL type="courses" subNav={secondaryNav}>
//                         <SubNavItem type="sub-nav-li">COURSES</SubNavItem>
//                         <SubNavItem type="sub-nav-li"><Links type="courses">View Courses</Links></SubNavItem>
//                     </SubNavUL>
//                     <SubNavUL type="calendar" subNav={secondaryNav}>
//                         <SubNavItem type="sub-nav-li">CALENDAR</SubNavItem>
//                         <SubNavItem type="sub-nav-li"><Links type="calendar">View Calendar</Links></SubNavItem>
//                     </SubNavUL>
//                     <SubNavUL type="myAccount" subNav={secondaryNav}>
//                         <SubNavItem type="sub-nav-li">MY ACCOUNT</SubNavItem>
//                         <SubNavItem type="sub-nav-li"><Links type="account">Account Settings</Links></SubNavItem>
//                     </SubNavUL>
//                 </SubMenu>
//             </nav>
//         )
//     }
// }
// // =========== MAP STATE TO PROPS ===========
// function mapStateToProps(state){
//     return{
//           user: state.user
//         , teacherData: state.teacherData
//         , parentsData: state.parentsData
//     }
// }
// export default connect(mapStateToProps, {getUser, getTeachers, getParents})(Navbar);
// // ============== MAIN NAV ==============
// function MainHeader(props){
//     return <header className="header">{props.children}</header>
// }
// function MainNavUL(props){
//     return <ul className="menu">{props.accountType === props.type ? props.children :''}</ul>
// }
// function MainNavItem(props){
//     return <li>{props.children}</li>
// }
// // ============== SUB NAV ==============
// function SubMenu(props){
//     return props.accountType === props.type?<div className="secondary-menu"> {props.children}</div>:''
// }
// function SubNavUL(props){
//     // console.log(props.subNav)
//     return <ul className="menu">{props.subNav === props.type ? props.children:''}</ul>
// }
// function SubNavItem(props){
//     return <li>{props.children}</li>
// }
// // ============== LINKS ==============
// function Links(props){
//     return <Link className="nav-link" to={`/${props.type}`} onClick={()=>props.clickIt(props.type)}>{props.children}</Link>
// }
// function SubLinks(props){
//     return <Link className="nav-link" to={`/${props.type}`}>{props.children}</Link>
// }