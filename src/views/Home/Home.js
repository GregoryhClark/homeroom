import React, {Component} from 'react';
import Chart from '../../components/Chart/Chart';
import TeachHome from '../../components/Teacher/Home/TeachHome';
import ParHome from '../../components/Parent/Home/ParHome';
import AdminHome from '../../components/Administrator/Home/AdminHome';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';


class Home extends Component {
    render(){
    let accountType = this.props.user.account_type;
        return (
            accountType === "Administrator" ? <AdminHome/>:
            accountType === "Teacher" ? <TeachHome/>:
            accountType === "Parent"? <ParHome/>: 
            accountType === "Student" ? <Chart/>: ''
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(Home);