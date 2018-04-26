import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';
import Assignments from '../../components/Teacher/Assignments/TeachAssignments'
import CreateAssignments from '../../components/Teacher/Assignments/CreateAssignments'
import AssignAssignments from '../../components/Teacher/Assignments/AssignAssignments'


class AssignmentsView extends Component {
    render() {
        const currentPath = document.location.pathname;
        let accountType = this.props.user.account_type;
        let currentCourse = ((currentPath === '/assignments') ? <Assignments/> :
                            (currentPath === '/assignments/assign-assignment') ? <AssignAssignments/> :
                            (currentPath === '/assignments/create-assignment') ? <CreateAssignments/> : '')
        return (
            accountType === "Teacher" ? currentCourse:'Nope'
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(AssignmentsView);