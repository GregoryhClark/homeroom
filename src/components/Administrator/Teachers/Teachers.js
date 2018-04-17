//MODULES
import React from 'react';
import {connect} from 'react-redux';

//CSS, ASSETS
import './Teachers.css';

//COMPONENT
class Teachers extends React.Component {
    constructor() {
        super()
        this.state = {
            editTeacher: {
                first_name: ''
                ,last_name: ''
                ,username: ''
                ,email: ''
                ,user_photo: ''
            }
        }

        this.handleEditTeacher = this.handleEditTeacher.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleUpdateState = this.handleUpdateState.bind(this);
    }

    handleEditTeacher(index) {
        // LOAD TEACHER INFO INTO STATE
        this.setState({
            editTeacher: this.props.admin.teachers[index]
        })
        
        //SHOW MODAL
        const modal = document.getElementById('editTeacherModal');
        modal.style.display = "block";
    }

    handleCloseModal() {
        const modal = document.getElementById('editTeacherModal');
        modal.style.display = "none";
    }

    handleUpdateState(e, field) {
        const editTeacher = Object.assign({}, this.state.editTeacher)
        editTeacher[field] = e.target.value;
        this.setState({editTeacher})
    }

    render() {
            let {first_name, last_name, username, email, user_photo} = this.state.editTeacher;

            //REMOVE MODAL WHEN AREA OUTSIDE OF MODAL IS CLICKED
            window.onclick = function(event) {
                const modal = document.getElementById('editTeacherModal');
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            }

            const teachers = this.props.admin.teachers.map((e, i) => {
                return (
                    <tr key={i}>
                        <td>{e.first_name}</td>
                        <td>{e.last_name}</td>
                        <td>{e.username}</td>
                        <td>{e.email}</td>
                        <td>{e.user_photo === 'null' ? 'None' : <a href={e.user_photo} target='_blank'>View</a>}</td>
                        <td><button onClick={() => this.handleEditTeacher(i)}>Edit</button></td>
                    </tr>
                )
            })

            console.log(this.state.editTeacher);

        return(
            <div>
                
            <div id="editTeacherModal" className="modal">
                <div className="modal-content">
                <span className="close" onClick={this.handleCloseModal}>&#215;</span>
                <h1 className="horizontal-line">Edit Teacher Details</h1>

                <span>First Name:<input type='text' value={first_name} 
                onChange={(e) => this.handleUpdateState(e, 'first_name')}/></span>< br/>

                <span>Last Name:<input type='text' value={last_name} 
                onChange={(e) => this.handleUpdateState(e, 'last_name')}/></span>< br/>

                <span>Username:<input type='text' value={username} 
                onChange={(e) => this.handleUpdateState(e, 'username')}/></span>< br/>

                <span>Email:<input type='text' value={email} 
                onChange={(e) => this.handleUpdateState(e, 'email')}/></span>< br/>

                <span>Photo:{user_photo !== 'null' ? 
                    <div className="edit-teacher-image-container">
                        <img src={user_photo} className="teacher-photo"/>
                        <span>X Remove</span>
                    </div>
                    
                    : 'missing'}</span>



                
                
                <div className="buttons">
                    <button className="cancel">Cancel</button>
                    <button className="save">Save</button>
                </div>
                </div>
            </div>

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


            </div>
        )
}
}

function mapStateToProps(state) {
    return {
        admin: state.admin
    }
}

export default connect(mapStateToProps)(Teachers)