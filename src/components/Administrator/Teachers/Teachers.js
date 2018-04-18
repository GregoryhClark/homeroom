//MODULES
import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {teachersForAdmin} from '../../../redux/user.js';

//CSS, ASSETS
import './Teachers.css';

//COMPONENT
class Teachers extends React.Component {
  constructor() {
    super()
    this.state = {
      editTeacher: {
          first_name: ''
        , last_name: ''
        , username: ''
        , email: ''
        , user_photo: ''
      },
      saveStatus: ''
    }
    this.handleEditTeacher = this.handleEditTeacher.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleUpdateState = this.handleUpdateState.bind(this);
    this.handleRemovePhoto = this.handleRemovePhoto.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleEditTeacher(index) {
    // LOAD TEACHER INFO INTO STATE
    this.setState({ editTeacher: this.props.admin.teachers[index] })
    
    //SHOW MODAL
    document.getElementById('editTeacherModal').style.display = "block";
  }

  handleCloseModal() {
    //CLOSE MODAL
    document.getElementById('editTeacherModal').style.display = "none";

    //RESET editTeacher PROPERTY VALUES ON STATE
    const editTeacher = {
        first_name: ''
      , last_name: ''
      , username: ''
      , email: ''
      , user_photo: ''
      , user_id: ''
    };
    this.setState({editTeacher});

    //RESET saveStatus ON STATE
    this.setState({saveStatus: ''})
  }

  handleUpdateState(e, field) {
    const editTeacher = {...this.state.editTeacher};
    editTeacher[field] = e.target.value;
    this.setState({editTeacher});
  }

  handleRemovePhoto() {
    let editTeacher = {...this.state.editTeacher};
    editTeacher.user_photo = 'undefined';
    this.setState({editTeacher});
  }

  handleSave() {
    const {editTeacher} = this.state;
    this.setState({saveStatus: 'pending'})

    //UPDATE TEACHERS TABLE IN DB
    axios.put('/updateUser', editTeacher).then(res => {
      //REFRESH REDUX
      this.props.teachersForAdmin();
      //UPDATE saveStatus ON STATE TO TRUE - TRIGGERS SAVE CONFIRMATION IN MODAL
      this.setState({saveStatus: true})
    })
  }

  render() {
    let {first_name, last_name, username, email, user_photo} = this.state.editTeacher;
    let {saveStatus} = this.state;

    //REMOVE MODAL WHEN AREA OUTSIDE OF MODAL IS CLICKED
    window.onclick = (e) => {
      const modal = document.getElementById('editTeacherModal');
      if (e.target === modal) {
        this.handleCloseModal();
      }
    }

    //GERNERATE TEACHER TABLE ROWS
    const teachers = this.props.admin.teachers.map((e, i) => {
      return (
        <tr key={i}>
          <td>{e.first_name}</td>
          <td>{e.last_name}</td>
          <td>{e.username}</td>
          <td>{e.email}</td>
          <td>{e.user_photo === 'undefined' ? 'None' : <a href={e.user_photo} target='_blank'>View</a>}</td>
          <td><button className="edit-button" onClick={() => this.handleEditTeacher(i)}>Edit</button></td>
        </tr>
      )
    })

    return(
      <div>
        
        {/*==========TEACHERS TABLE==========*/}
        <div className="teachers-overflow">
          <table className="teachers-table">
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
                  {teachers}
              </tbody>
          </table>
        </div>
        









                {/*==========CODE FOR MODAL==========*/}
                <div id="editTeacherModal" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={this.handleCloseModal}>&#215;</span>
                        <h1 className="horizontal-line">Edit Teacher Details</h1>
                        {saveStatus === 'pending' ? <div className="save-status-pending">Pending...</div> : saveStatus === true ? <div className="save-status-successful">Save Successful</div> : null}

                        <div className="photo">
                            {/*ADD PHOTO LINK IF NO PHOTO IS AVAILABLE*/}
                            {user_photo === 'undefined' ? <div className="no-photo"><a href="" className="add-photo">Add Photo</a></div>
                             : 
                            <div className="edit-teacher-image-container">
                                <img src={user_photo} className="teacher-photo" alt="profile"/>
                                <span className="remove-photo" onClick={this.handleRemovePhoto}>&#215;</span>
                            </div> }
                        </div>

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

export default connect(mapStateToProps, {teachersForAdmin})(Teachers)