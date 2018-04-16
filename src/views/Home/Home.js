import React, {Component} from 'react';
// import Chart from '../../components/Chart/Chart';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';
import LoadData from '../../components/LoadData/LoadData';


class Home extends Component {
    render(){
    let accountType = this.props.user.account_type;
        return (
            accountType === "Administrator" ? '':
            accountType === "Teacher" ? '<Chart/>':
            accountType === "Parent"? '<Chart/>': 
            accountType === "Student" ? '<Chart/>': <LoadData/>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(Home);