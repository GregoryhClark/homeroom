import React, {Component} from 'react';
import Chart from '../../components/Chart/Chart';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';


class Home extends Component {
    render(){
    let accountType = this.props.user.account_type;
        return (
            accountType === "Administrator" ? 'Hi!':
            accountType === "Teacher" ? 'Heyo':
            accountType === "Parent"? 'Hola': 
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