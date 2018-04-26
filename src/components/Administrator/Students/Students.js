//MODULES
import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {studentsForAdmin} from '../../../redux/user.js';

//CSS, ASSETS
import './Students.css';
import '../../TableStyling/Table.css';

//COMPONENT
class Students extends React.Component {
  constructor() {
    super()
    this.state = {
      editStudent: {
          first_name: ''
        , last_name: ''
        , username: ''
        , email: ''
        , user_photo: ''
      },
      saveStatus: ''
    }
    this.handleEditStudent = this.handleEditStudent.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleUpdateState = this.handleUpdateState.bind(this);
    this.handleRemovePhoto = this.handleRemovePhoto.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleEditStudent(index) {
    // LOAD STUDENT INFO INTO STATE
    this.setState({ editStudent: this.props.admin.students[index] })
    
    //SHOW MODAL
    document.getElementById('modal').style.display = "block";
  }

  handleCloseModal() {
    //CLOSE MODAL
    document.getElementById('modal').style.display = "none";

    //RESET editStudent PROPERTY VALUES ON STATE
    const editStudent = {
        first_name: ''
      , last_name: ''
      , username: ''
      , email: ''
      , user_photo: ''
      , user_id: ''
    };
    this.setState({editStudent});

    //RESET saveStatus ON STATE
    this.setState({saveStatus: ''})
  }

  handleUpdateState(e, field) {
    const editStudent = {...this.state.editStudent};
    editStudent[field] = e.target.value;
    this.setState({editStudent});
  }

  handleRemovePhoto() {
    let editStudent = {...this.state.editStudent};
    editStudent.user_photo = 'undefined';
    this.setState({editStudent});
  }

  handleSave() {
    const {editStudent} = this.state;
    this.setState({saveStatus: 'pending'})

    //UPDATE students TABLE IN DB
    axios.put('/updateUser', editStudent).then(res => {
      //REFRESH REDUX
      this.props.studentsForAdmin();
      //UPDATE saveStatus ON STATE TO TRUE - TRIGGERS SAVE CONFIRMATION IN MODAL
      this.setState({saveStatus: true})
    })
  }

  render() {
    let {first_name, last_name, username, email, user_photo} = this.state.editStudent;
    let {saveStatus} = this.state;

    //REMOVE MODAL WHEN AREA OUTSIDE OF MODAL IS CLICKED
    window.onclick = (e) => {
      const modal = document.getElementById('modal');
      if (e.target === modal) {
        this.handleCloseModal();
      }
    }

    //GERNERATE STUDENTS TABLE ROWS
    const students = this.props.admin.students.map((e, i) => {
      return (
        <tr key={i}>
          <td>{e.first_name}</td>
          <td>{e.last_name}</td>
          <td>{e.username}</td>
          <td>{e.email}</td>
          <td>{e.user_photo === 'undefined' ? 'None' : <a href={e.user_photo} target='_blank'>View</a>}</td>
          <td><button className="edit-button" onClick={() => this.handleEditStudent(i)}>Edit</button></td>
        </tr>
      )
    })

    console.log(this.props.admin.students);

    return(
      <div>
        
        {/*==========students TABLE==========*/}
        <div className="table-overflow">
          <table className="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Photo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students}
            </tbody>
          </table>
        </div>
        
        {/*==========CODE FOR MODAL==========*/}
        <div id="modal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={this.handleCloseModal}>&#215;</span>
            <h1 className="horizontal-line">Edit Student Details</h1>
            {saveStatus === 'pending' ? <div className="save-status pending">Pending...</div> : saveStatus === true ? <div className="save-status successful">Save Successful</div> : null}

            {/*ADD PHOTO PLACEHOLDER IF NO PHOTO IS AVAILABLE*/}
            {user_photo === 'undefined' ? 
              <div className="photo-container">
                <div className="photo">
                  <a href="" className="add-photo">Add Photo</a>
                </div>
              </div>
              : 
              <div className="photo-container">
                <img src={user_photo} className="photo" alt="profile"/>
                <span className="remove-photo" onClick={this.handleRemovePhoto}>&#215;</span>
              </div>
            }

            <div className="field">
              <span>First Name:</span>
              <input type='text' value={first_name} onChange={(e) => this.handleUpdateState(e, 'first_name')}/>
            </div>

            <div className="field">
              <span>Last Name:</span>
              <input type='text' value={last_name} onChange={(e) => this.handleUpdateState(e, 'last_name')}/>
            </div>

            <div className="field">
              <span>Username:</span>
              <input type='text' value={username} onChange={(e) => this.handleUpdateState(e, 'username')}/>
            </div>

            <div className="field">
              <span>Email:</span>
              <input type='text' value={email} onChange={(e) => this.handleUpdateState(e, 'email')}/>
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

export default connect(mapStateToProps, {studentsForAdmin})(Students)