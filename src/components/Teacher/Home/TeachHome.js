import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser, getTeacher} from '../../../redux/user';


class TeachHome extends Component {
    render(){
        console.log(this.props.teacher)
        return (
            <div>Teach Home</div>
        )
    }
}

function mapStateToProps(state){
    return{
          user: state.user
        , teacher: state.teacher
    }
}
export default connect(mapStateToProps, {getUser, getTeacher})(TeachHome);