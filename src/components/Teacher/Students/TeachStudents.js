import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser, getTeacher} from '../../../redux/user';


class TeachStudents extends Component {
    render(){
        let teacher     = this.props.teacher
        let courses     = teacher.getCourses.map((e,i)=>{return <button key={i}>{e.course_name}</button>})
        let allStudents = teacher.getStudent.map((e,i)=>{
                return (<tr key={i}>
                            <td>{e.first_name}</td>
                            <td>{e.last_name}</td>
                            <td>{e.course_name}</td>
                            <td>{e.email}</td>
                            <td>{e.user_photo === 'undefined' ? 'None' : <a href={e.user_photo} target='_blank'>View</a>}</td>     
                        </tr>)})

        return (
            <div className="course-container">
                <div className="left-column">
                    <h1 className="course-title">Courses</h1>
                    {courses}
                    <button>All Students</button>
                    </div>
                <div className="right-column">
                <h1 className="course-title">All students</h1>
                <div className="table-overflow">
                <table className="table">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Course Name</th>
                      <th>Email</th>
                      <th>Photo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allStudents}
                  </tbody>
                </table>
              </div>
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