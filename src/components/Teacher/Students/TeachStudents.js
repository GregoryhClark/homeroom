import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser, getTeacher} from '../../../redux/user';


class TeachStudents extends Component {
    constructor(){
        super()
        this.state={
              selectedCourse:''
            , courseName:''
        }
    }
    render(){
        let teacher       = this.props.teacher;
        let courses       = teacher.getCourses.map((e,i)=>{return <button onClick={()=>this.setState({selectedCourse:e.course_id,courseName:e.course_name})} key={i}>{e.course_name}</button>});
        let currentCourse = teacher.getStudent.filter((e,i)=>{return e.course_id === this.state.selectedCourse}).map((e,i)=>{
            return (<tr key={i}>
                        <td>{e.first_name}</td>
                        <td>{e.last_name}</td>
                        <td>{e.course_name}</td>
                        <td>{e.email}</td>
                        <td>{e.user_photo === 'undefined' ? 'None' : <a href={e.user_photo} target='_blank'>View</a>}</td>     
                    </tr>)
        });
        let allStudents   = teacher.getStudent.map((e,i)=>{
            return (<tr key={i}>
                        <td>{e.first_name}</td>
                        <td>{e.last_name}</td>
                        <td>{e.course_name}</td>
                        <td>{e.email}</td>
                        <td>{e.user_photo === 'undefined' ? 'None' : <a href={e.user_photo} target='_blank'>View</a>}</td>     
                    </tr>)
        });
        return (
            <div className="course-container">
                <div className="left-column">
                    <h1 className="course-title">Courses</h1>
                    {courses}
                    <button onClick={()=>this.setState({selectedCourse:'',courseName:''})}>All Students</button>
                    </div>
                <div className="right-column">
                <h1 className="course-title">{this.state.courseName === '' ? "All Students": `Students for ${this.state.courseName}`}</h1>
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
                    {this.state.selectedCourse === '' ? allStudents : currentCourse}
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