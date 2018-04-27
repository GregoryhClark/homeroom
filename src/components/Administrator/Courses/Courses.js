//MODULES
import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {coursesForAdmin} from '../../../redux/user.js';

//CSS, ASSETS
import './Courses.css';
import '../../TableStyling/Table.css';

//COMPONENT
class Courses extends React.Component {
  constructor() {
    super()
    this.state = {
      editCourse: {
          course_name: ''
        , course_description: ''
        , department: ''
        , teacher: ''
        , students: []
        , start_date: ''
        , end_date: ''
        , courses_photo: ''
      },
      saveStatus: ''
    }
    this.handleEditCourse = this.handleEditCourse.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleUpdateState = this.handleUpdateState.bind(this);
    this.handleRemovePhoto = this.handleRemovePhoto.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleEditCourse(index) {
    // LOAD COURSE INFO INTO STATE
    // this.setState({ editCourse: this.props.admin.courses[index]})
    const editCourse = this.props.admin.courses[index];
    editCourse.teacher = `${this.props.admin.courses[index].first_name} ${this.props.admin.courses[index].last_name}`;
    editCourse.students = this.props.admin.getStudentsPerCourse.filter(e => e.course_id === this.props.admin.courses[index].course_id)


    this.setState({editCourse});

    
    //SHOW MODAL
    document.getElementById('modal').style.display = "block";
  }

  handleCloseModal() {
    //CLOSE MODAL
    document.getElementById('modal').style.display = "none";

    //RESET editCourse PROPERTY VALUES ON STATE
    const editCourse = {
        course_name: ''
      , course_description: ''
      , department: ''
      , teacher: ''
      , students: []
      , start_date: ''
      , end_date: ''
      , courses_photo: ''
    };

    this.setState({editCourse});

    //RESET saveStatus ON STATE
    this.setState({saveStatus: ''})
  }

  handleUpdateState(e, field) {
    const editCourse = {...this.state.editCourse};
    editCourse[field] = e.target.value;
    this.setState({editCourse});
  }

  handleRemovePhoto() {
    let editCourse = {...this.state.editCourse};
    editCourse.user_photo = 'undefined';
    this.setState({editCourse});
  }

  handleSave() {
    const {editCourse} = this.state;
    this.setState({saveStatus: 'pending'})

    //UPDATE Courses TABLE IN DB
    axios.put('/updateUser', editCourse).then(update => {
      this.props.coursesForAdmin();
      //UPDATE saveStatus ON STATE TO TRUE - TRIGGERS SAVE CONFIRMATION IN MODAL
      this.setState({saveStatus: true})
    })
  }

  render() {
    let {course_name, course_description, department, teacher, students, start_date, end_date, courses_photo} = this.state.editCourse;

    //REMOVE MODAL WHEN AREA OUTSIDE OF MODAL IS CLICKED
    window.onclick = (e) => {
      const modal = document.getElementById('modal');
      if (e.target === modal) {
        this.handleCloseModal();
      }
    }

    //GERNERATE COURSE TABLE ROWS
    const Courses = this.props.admin.courses.map((e, i) => {
      return (
        <tr key={i}>
          <td>{e.course_name}</td>
          <td>{e.course_description}</td>
          <td>{e.department}</td>
          <td>{`${e.first_name} ${e.last_name}`}</td>
          <td>
          {this.props.admin.getStudentsPerCourse.filter(s => s.course_id === e.course_id).length}
          </td>
          <td><Moment format="MM-DD-YYYY">{e.start_date}</Moment></td>
          <td><Moment format="MM-DD-YYYY">{e.end_date}</Moment></td>
          {/* <td>{e.courses_photo === 'undefined' ? 'None' : <a href={e.courses_photo} target='_blank'>View</a>}</td> */}
          <td><button className="edit-button" onClick={() => this.handleEditCourse(i)}>Edit</button></td>
        </tr>
      )
    })


    //GENERATE STUDENTS LIST
    const Students = this.state.editCourse.students.map((e, i) => {
      return (
        <div>{e.first_name} {e.last_name} - <span className="drop">DROP</span></div>
      )
    })

    return(
      <div>
        
        {/*==========Courses TABLE==========*/}
        <div id="courses-table" className="table-overflow">
          <table className="table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Course Description</th>
                <th>Dept</th>
                <th>Teacher</th>
                <th>Students</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Courses}
            </tbody>
          </table>
        </div>
        
        {/*==========CODE FOR MODAL==========*/}
        <div id="modal" className="modal course-modal">
          <div className="modal-content">
            <span className="close" onClick={this.handleCloseModal}>&#215;</span>
            <h1 className="horizontal-line">Edit Course Details</h1>

            <div className="field">
              <span>Course Name:</span>
              <input type='text' value={course_name} onChange={(e) => this.handleUpdateState(e, 'course_name')}/>
            </div>

            <div className="field">
              <span>Course Desc:</span>
              <textarea type='text' value={course_description} onChange={(e) => this.handleUpdateState(e, 'course_description')}/>
            </div>

            <div className="field">
              <span>Department:</span>
              <input type='text' value={department} onChange={(e) => this.handleUpdateState(e, 'department')}/>
            </div>

            <div className="field">
              <span>Teacher:</span>
              <input type='text' value={teacher} onChange={(e) => this.handleUpdateState(e, 'teacher')}/>
            </div>

            <div className="field">
              <span>Students:</span>
              <div className="students-list">
                {Students}
                <div className="add-student">Add New Student +</div>
              </div>
            </div>

            <div className="field">
              <span>Start Date:</span>
              <div className="date"><Moment format="MM-DD-YYYY">{start_date}</Moment></div>
            </div>

            <div className="field">
              <span>End Date:</span>
              <div className="date"><Moment format="MM-DD-YYYY">{end_date}</Moment></div>
            </div>

            <div className="field">
              <span>Course Photo:</span>
              <div className="photo">{courses_photo !== "undefined" ? <a href={courses_photo} target="_blank">View Photo</a>
              : <a href="#/">Add Photo</a>}</div>
            </div>


            <div className="buttons">
              <button className="cancel" onClick={this.handleCloseModal}>Cancel</button>
              <button className="save" onClick={this.handleSave}>Save</button>
            </div>

          </div>
        </div>
      </div>       
    )
  }
}

function mapStateToProps(state) {
    return {
        admin: state.admin
    }
}
export default connect(mapStateToProps, {coursesForAdmin})(Courses)