import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';
import StudentAccount from '../../components/Account Component/Students Account/StudentAccount';
import ParentAccount from '../../components/Account Component/Parent Account/ParentAccount'
import TeachersAccount from '../../components/Account Component/Teachers Account/TeachersAccount';
import AdminsAccount from '../../components/Account Component/Admins Account/AdminsAccount';
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