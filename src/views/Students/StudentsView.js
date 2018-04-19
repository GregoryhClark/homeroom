import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';
import ParentView from '../../components/Parent/Students/Students';
import AdministratorView from '../../components/Administrator/Students/Students';

class StudentsView extends Component {
    render(){
    let accountType = this.props.user.account_type;
        return (
            accountType === "Administrator" ? <AdministratorView/>:
            accountType === "Teacher" ? null:
            accountType === "Parent"? <ParentView/>: 
            accountType === "Student" ? null : null
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(StudentsView);