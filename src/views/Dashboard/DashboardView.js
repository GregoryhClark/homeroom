import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';
import Dashboard from '../../components/Student/Dashboard/Dashboard'

class DashboardView extends Component {
    render(){
    let accountType = this.props.user.account_type;
        return (
            accountType === "Administrator" ? null:
            accountType === "Teacher" ? null:
            accountType === "Parent"? null: 
            accountType === "Student" ? <Dashboard/> : null
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(DashboardView);