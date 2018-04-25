import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser, getTeacher} from '../../../redux/user';


class TeachStudents extends Component {
    render(){
        let teacher     = this.props.teacher
        let courses     = teacher.getCourses.map((e,i)=>{return <button key={i}>{e.course_name}</button>})
        let allStudents = teacher.getStudent.map((e,i)=>{return <div key={i}>{`STUDENT: ${e.first_name} ${e.last_name} in class ${e.course_name} `}</div>})

        return (
            <div className="course-container">
                <div className="left-column">
                    <h1 className="course-title">Courses</h1>
                    {courses}
                    <button>All Students</button>
                    </div>
                <div className="right-column">
                    {allStudents}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
          user: state.user
        , teacher: state.teacher
    }
}
export default connect(mapStateToProps, {getUser, getTeacher})(TeachStudents);