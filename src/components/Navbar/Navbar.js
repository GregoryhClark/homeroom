import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';
import './Navbar.css'

class Home extends Component {
    async componentWillMount(){
        await this.props.getUser();
        console.log("getUser: Home",this.props.user)
    }
    render() {
        
        return (
            <div>
                <h1>This is the navbar</h1>
                <h2>
                    {`The user is: ${this.props.user.username}`}
                </h2>
            </div> 
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(Home);