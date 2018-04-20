import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';
import StudentAccount from '../../components/Student/MyAccount/StudentAccount';
import ParentAccount from '../../components/Parent/MyAccount/ParentAccount';
import TeachersAccount from '../../components/Teacher/MyAccount/TeachersAccount';
import AdminsAccount from '../../components/Administrator/MyAccount/AdminsAccount';
import './Account.css';


class Account extends Component {
    render() {
        let accountType = this.props.user.account_type;
        return (
            accountType === "Administrator" ? <AdminsAccount/>:
            accountType === "Teacher" ? <TeachersAccount/>:
            accountType === "Parent"? <ParentAccount/>: <StudentAccount/>       
        )
    }
}
function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(Account);