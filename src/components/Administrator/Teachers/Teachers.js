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
                ,photo: ''
            }
        }

        this.handleEditTeacher = this.handleEditTeacher.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleEditTeacher(index) {
        //LOAD TEACHER INFO INTO STATE
        this.setState({
            editTeacher: this.props.admin[0].data[index]
        })
        
        //SHOW MODAL
        const modal = document.getElementById('editTeacherModal');
        modal.style.display = "block";
    }

    handleCloseModal() {
        const modal = document.getElementById('editTeacherModal');
        modal.style.display = "none";
    }


    render() {
            let {first_name} = this.state.editTeacher;
            console.log(first_name);

            //REMOVE MODAL WHEN AREA OUTSIDE OF MODAL IS CLICKED
            window.onclick = function(event) {
                const modal = document.getElementById('editTeacherModal');
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            }

            const teachers = this.props.admin[0].data.map((e, i) => {
                return (
                    <tr key={i}>
                        <td>{e.first_name}</td>
                        <td>{e.last_name}</td>
                        <td>{e.username}</td>
                        <td>{e.email}</td>
                        <td>{e.photo === 'null' ? 'None' : <a href={e.photo} target='_blank'>View</a>}</td>
                        <td><button onClick={() => this.handleEditTeacher(i)}>Edit</button></td>
                    </tr>
                )
            })

        return(
            <div>
                
            <button onClick={this.handleEditTeacher}>Open Modal</button>
            <div id="editTeacherModal" className="modal">
                <div className="modal-content">
                <span className="close" onClick={this.handleCloseModal}>&#215;</span>
                <h1 className="horizontal-line">Edit Teacher Details</h1>
                <span>First Name:<span>{first_name}</span></span>< br/>
                <span>Last Name:</span>< br/>
                <span>Username:</span>< br/>
                <span>Email:</span>< br/>
                <span>Photo:</span>< br/>
                <div className="buttons">
                    <button className="cancel">Cancel</button>
                    <button className="save">Save</button>
                </div>
                </div>
            </div>

            < br/>
            < br/>


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