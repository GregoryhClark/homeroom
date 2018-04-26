import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser, getTeacher} from '../../../redux/user';


class TeachAssignments extends Component {
    render(){
        console.log(this.props.teacher)
        return (
        <div className="course-container">            
            <div className="left-column">
              
            </div>
            <div className="right-column">
                <h1>View All Assignments</h1>
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
export default connect(mapStateToProps, {getUser, getTeacher})(TeachAssignments);