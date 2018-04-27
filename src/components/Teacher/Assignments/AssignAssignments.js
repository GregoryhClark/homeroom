import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser, getTeacher} from '../../../redux/user';


class AssignAssignments extends Component {
    render(){
              
        return (
          <div id="admin-home" className="course-container">     
            <div className="left-column">
              
            </div>

            <div className="right-column">
            <h1 className="horizontal-line">Assign</h1>
  
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
export default connect(mapStateToProps, {getUser, getTeacher})(AssignAssignments);