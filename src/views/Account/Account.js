import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';
import StudentAccount from '../../components/Student/MyAccount/MyAccount.js';
import ParentAccount from '../../components/Parent/MyAccount/MyAccount.js';
import TeachersAccount from '../../components/Teacher/MyAccount/MyAccount.js';
import AdminsAccount from '../../components/Administrator/MyAccount/MyAccount.js';
import './Account.css';


class Account extends Component {
    render() {
        let accountType = this.props.user.account_type_name;
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