import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser, getGrades} from '../../redux/user';

class Home extends Component {
    async componentWillMount(){
        await this.props.getUser();
        await this.props.getGrades();
        console.log("getUser: Home",this.props.user)
        console.log("getGrades: Home",this.props.grades)
    }
    render() {
        
        return (
            <div>
                <h1>{`Welcome to Homeroom ${this.props.user.first_name} ${this.props.user.last_name}!`}</h1> 
            </div>
        )
    }
}

function mapStateToProps(state){
    // console.log("HOME CURRENT STATE",state)
    return{
          user: state.user
        , grades:state.grades
    }
}
export default connect(mapStateToProps, {getUser, getGrades})(Home);