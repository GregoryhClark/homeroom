import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';

class Home extends Component {
    async componentWillMount(){
        await this.props.getUser();
        console.log("getUser: Home",this.props.user)
    }
    render() {
        
        return (
            <h1>{`Welcome to Homeroom ${this.props.user.first_name} ${this.props.user.last_name}!`}</h1> 
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(Home);