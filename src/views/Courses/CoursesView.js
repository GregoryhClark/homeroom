import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';
import Courses from '../../components/Student/Courses/Courses'
import CourseAssignment from '../../components/Student/Courses/CourseAssignment'

class CoursesView extends Component {
    render() {
        const currentPath = document.location.pathname;
        let accountType = this.props.user.account_type;
        let currentCourse = ((currentPath === '/courses') ? <Courses/> :
                            (currentPath === '/courses/assignments') ? <CourseAssignment/> : '')
        return (
            accountType === "Administrator" ? 'Hey':
            accountType === "Teacher" ? 'Heyo':
            accountType === "Parent"? 'Hola': 
            accountType === "Student" ? currentCourse:''
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(CoursesView);