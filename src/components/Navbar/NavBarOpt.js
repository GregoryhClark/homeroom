// import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
// import {getUser, getAdmin, getStudent, getParent, getTeacher} from '../../redux/user';
// import './Navbar.css';

// class Navbar extends Component {
//     constructor() {
//         super()
//         this.state          = {secondaryNav: ''}
//         this.handleOnClick  = this.handleOnClick.bind(this)
//     }
//     componentWillMount(){
//         this.props.getUser().then(()=>{
//             let adminData   = this.props.user.account_type === "Administrator" ? this.props.getAdmin()   : "Wrong User"
//             let studentData = this.props.user.account_type === "Student"       ? this.props.getStudent() : "Wrong User"
//             let parentData  = this.props.user.account_type === "Parent"        ? this.props.getParent()  : "Wrong User"
//             let teacherData = this.props.user.account_type === "Teacher"       ? this.props.getTeacher() : "Wrong User"
//             Promise.all([adminData, studentData, parentData, teacherData]).then(res=>{return res}).catch(err=>console.log(err))})
//         this.setState({secondaryNav: 'home'})
//     }
//     handleMobileCollapse() { const checkbox = document.getElementById('menu-btn'); checkbox.checked = false;}
//     handleOnClick(value){this.setState({secondaryNav:value})}

//     render() {
//         let accountType     = this.props.user.account_type;
//         let secondaryNav    = this.state.secondaryNav;
//         // ========= NAV HEADER =========
//         let navInput        = <input className ="menu-btn"  type="checkbox" id="menu-btn" />
//         let navLogo         = <Link  className ="h-logo"    type="home"     to="/home">H</Link>
//         let navLabel        = <label className ="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
//         // ========= NAV TYPE CHECK =====
//         let navTypeCheck    = accountType  === "Administrator" ? "Administrator" : accountType  === "Teacher"  ? "Teacher"  : accountType  === "Parent"      ? "Parent"      : "Student";
//         let subNavTypeCheck = secondaryNav === "dashboard"     ? "dashboard"     : secondaryNav === "teachers" ? "teachers" : secondaryNav === "students"    ? "students"    :
//                               secondaryNav === "parents"       ? "parents"       : secondaryNav === "courses"  ? "courses"  : secondaryNav === "assignments" ? "assignments" :
//                               secondaryNav === "calendar"      ? "calendar"      : secondaryNav === "metrics"  ? "metrics"  : secondaryNav === "account"     ? "account"     : null;
//         // ========= MAIN NAV ===========
//         let navHome         = <MainNavItem type="nav-li"><Links type="home"        value={'home'}        clickIt={this.handleOnClick}>Home       </Links></MainNavItem>;
//         let navTeacher      = <MainNavItem type="nav-li"><Links type="teachers"    value={'teachers'}    clickIt={this.handleOnClick}>Teachers   </Links></MainNavItem>;
//         let navParents      = <MainNavItem type="nav-li"><Links type="parents"     value={'parents'}     clickIt={this.handleOnClick}>Parents    </Links></MainNavItem>;
//         let navStudents     = <MainNavItem type="nav-li"><Links type="students"    value={'students'}    clickIt={this.handleOnClick}>Students   </Links></MainNavItem>;
//         let navCourses      = <MainNavItem type="nav-li"><Links type="courses"     value={'courses'}     clickIt={this.handleOnClick}>Courses    </Links></MainNavItem>;
//         let navMetrics      = <MainNavItem type="nav-li"><Links type="metrics"     value={'metrics'}     clickIt={this.handleOnClick}>Metrics    </Links></MainNavItem>;
//         let navCalendar     = <MainNavItem type="nav-li"><Links type="calendar"    value={'calendar'}    clickIt={this.handleOnClick}>Calendar   </Links></MainNavItem>;
//         let navDashboard    = <MainNavItem type="nav-li"><Links type="dashboard"   value={'dashboard'}   clickIt={this.handleOnClick}>Dashboard  </Links></MainNavItem>;
//         let navMyAccount    = <MainNavItem type="nav-li"><Links type="account"     value={'account'}     clickIt={this.handleOnClick}>My Account </Links></MainNavItem>;
//         let navLogout       = <MainNavItem type="nav-li"><a href={process.env.REACT_APP_LOGOUT}>Logout</a></MainNavItem>;
//         // ========= SECONDARY NAV ======
//         let subNavHome      = <SubNavUL    type="home" subNav={secondaryNav}><SubNavItem type="sub-nav-li">{`Welcome back, ${this.props.user.first_name}!`}</SubNavItem> </SubNavUL>
//         let subNavTeachers  = <SubNavItem  type="sub-nav-li"><Links    type="teachers">                       View Teachers    </Links>     </SubNavItem>
//         let subTeachCreate  = <SubNavItem  type="sub-nav-li"><SubLinks type="teachers/create-teacher">        Create Teacher   </SubLinks>  </SubNavItem>
//         let subNavStudents  = <SubNavItem  type="sub-nav-li"><Links    type="students">                       View Students    </Links>     </SubNavItem>
//         let subStudCreate   = <SubNavItem  type="sub-nav-li"><SubLinks type="students/create-student">        Create Student   </SubLinks>  </SubNavItem> 
//         let subNavParents   = <SubNavItem  type="sub-nav-li"><Links    type="parents">                        View Parents     </Links>     </SubNavItem>
//         let subParCreate    = <SubNavItem  type="sub-nav-li"><SubLinks type="parents/create-parent">          Create Parent    </SubLinks>  </SubNavItem>
//         let subNavCourses   = <SubNavItem  type="sub-nav-li"><Links    type="courses">                        View Courses     </Links>     </SubNavItem> 
//         let subCourseCreate = <SubNavItem  type="sub-nav-li"><SubLinks type="courses/create-course">          Create Course    </SubLinks>  </SubNavItem>
//         let subNavCalendar  = <SubNavItem  type="sub-nav-li"><Links    type="calendar">                       View Calendar    </Links>     </SubNavItem>
//         let subNavAccount   = <SubNavItem  type="sub-nav-li"><Links    type="account">                        Account Settings </Links>     </SubNavItem>                  
//         return (
//             <nav>
//                 <MainHeader type="header">
//                         {navLogo}
//                         {navInput}
//                         {navLabel}
//                     <MainNavUL type={navTypeCheck} accountType={accountType}>
//                         {navHome}
//                         {navTypeCheck === "Student"       ?  navDashboard   : null}
//                         {navTypeCheck === "Administrator" ?  navTeacher     : null}
//                         {navTypeCheck === "Administrator" ?  navParents     : null}
//                         {navTypeCheck === "Administrator" || navTypeCheck  === "Teacher" ? navStudents : null}
//                         {navTypeCheck !== "Administrator" ?  navCourses     : null}
//                         {navTypeCheck === "Administrator" ?  navMetrics     : null}
//                         {navTypeCheck                     ?  navCalendar    : null}
//                         {navMyAccount}
//                         {navLogout}
//                     </MainNavUL>
//                 </MainHeader>            
//                 <SubMenu type={navTypeCheck} accountType={accountType}>
//                         {subNavHome}
//                     <SubNavUL type={subNavTypeCheck} subNav={secondaryNav}>
//                         {(navTypeCheck === "Administrator" && subNavTypeCheck === 'teachers') && subNavTeachers}
//                         {(navTypeCheck === "Administrator" && subNavTypeCheck === 'teachers') && subTeachCreate}
//                         {(navTypeCheck === "Administrator" && subNavTypeCheck === 'students') && subNavStudents}
//                         {(navTypeCheck === "Administrator" && subNavTypeCheck === 'students') && subStudCreate}
//                         {(navTypeCheck === "Administrator" && subNavTypeCheck === 'parents')  && subNavParents}
//                         {(navTypeCheck === "Administrator" && subNavTypeCheck === 'parents')  && subParCreate}
//                         {(navTypeCheck && subNavTypeCheck === 'courses')   && subNavCourses}
//                         {(navTypeCheck === "Teacher"       && subNavTypeCheck === 'courses')  && subCourseCreate}
//                         {(navTypeCheck && subNavTypeCheck === 'calendar')  && subNavCalendar}
//                         {(navTypeCheck && subNavTypeCheck === 'account')   && subNavAccount}
//                     </SubNavUL>
//                 </SubMenu>
//             </nav>
//         )
//     }
// }
// // =========== MAP STATE TO PROPS ===========
// function mapStateToProps(state) {return{user: state.user, admin: state.admin, student: state.student, parent: state.parent, teacher: state.teacher}}
// // =========== EXPORT DEFAULT ===========
// export default connect  (mapStateToProps, {getUser, getAdmin, getStudent, getParent, getTeacher})(Navbar);
// // ============== MAIN NAV ==============
// function MainHeader     (props) {return <header className = "header">{props.children}</header>}
// function MainNavUL      (props) {return <ul     className = "menu">{props.accountType === props.type ? props.children :''}</ul>}
// function MainNavItem    (props) {return <li>{props.children}</li>}
// // ============== SUB NAV ==============
// function SubMenu        (props) {return props.accountType === props.type ? <div className="secondary-menu"> {props.children}</div>:''}
// function SubNavUL       (props) {return <ul>{props.subNav === props.type ? props.children :''}</ul>}
// function SubNavItem     (props) {return <li>{props.children}</li>}
// // ============== LINKS ==============
// function Links          (props) {return <Link   className = "nav-link" to={`/${props.type}`} onClick={()=>props.clickIt(props.type)}>{props.children}</Link>}
// function SubLinks       (props) {return <Link   className = "nav-link" to={`/${props.type}`}>{props.children}</Link>}