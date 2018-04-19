//MODULES
import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {parentsForAdmin} from '../../../redux/user.js';

//CSS, ASSETS
import './Parents.css';
import '../../TableStyling/Table.css';

//COMPONENT
class Parents extends React.Component {
  constructor() {
    super()
    this.state = {
      editParent: {
          first_name: ''
        , last_name: ''
        , username: ''
        , email: ''
        , user_photo: ''
      },
      saveStatus: ''
    }
    this.handleEditParent = this.handleEditParent.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleUpdateState = this.handleUpdateState.bind(this);
    this.handleRemovePhoto = this.handleRemovePhoto.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleEditParent(index) {
    // LOAD PARENT INFO INTO STATE
    this.setState({ editParent: this.props.admin.parents[index] })
    
    //SHOW MODAL
    document.getElementById('modal').style.display = "block";
  }

  handleCloseModal() {
    //CLOSE MODAL
    document.getElementById('modal').style.display = "none";

    //RESET editParent PROPERTY VALUES ON STATE
    const editParent = {
        first_name: ''
      , last_name: ''
      , username: ''
      , email: ''
      , user_photo: ''
      , user_id: ''
    };
    this.setState({editParent});

    //RESET saveStatus ON STATE
    this.setState({saveStatus: ''})
  }

  handleUpdateState(e, field) {
    const editParent = {...this.state.editParent};
    editParent[field] = e.target.value;
    this.setState({editParent});
  }

  handleRemovePhoto() {
    let editParent = {...this.state.editParent};
    editParent.user_photo = 'undefined';
    this.setState({editParent});
  }

  handleSave() {
    const {editParent} = this.state;
    this.setState({saveStatus: 'pending'})

    //UPDATE parents TABLE IN DB
    axios.put('/updateUser', editParent).then(res => {
      //REFRESH REDUX
      this.props.parentsForAdmin();
      //UPDATE saveStatus ON STATE TO TRUE - TRIGGERS SAVE CONFIRMATION IN MODAL
      this.setState({saveStatus: true})
    })
  }

  render() {
    let {first_name, last_name, username, email, user_photo} = this.state.editParent;
    let {saveStatus} = this.state;

    //REMOVE MODAL WHEN AREA OUTSIDE OF MODAL IS CLICKED
    window.onclick = (e) => {
      const modal = document.getElementById('modal');
      if (e.target === modal) {
        this.handleCloseModal();
      }
    }

    //GERNERATE parents TABLE ROWS
    const parents = this.props.admin.parents.map((e, i) => {
      return (
        <tr key={i}>
          <td>{e.first_name}</td>
          <td>{e.last_name}</td>
          <td>{e.username}</td>
          <td>{e.email}</td>
          <td>{e.user_photo === 'undefined' ? 'None' : <a href={e.user_photo} target='_blank'>View</a>}</td>
          <td><button className="edit-button" onClick={() => this.handleEditParent(i)}>Edit</button></td>
        </tr>
      )
    })

    return(
      <div>
        
        {/*==========parents TABLE==========*/}
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
              {parents}
            </tbody>
          </table>
        </div>
        
        {/*==========CODE FOR MODAL==========*/}
        <div id="modal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={this.handleCloseModal}>&#215;</span>
            <h1 className="horizontal-line">Edit Parent Details</h1>
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

export default connect(mapStateToProps, {parentsForAdmin})(Parents)