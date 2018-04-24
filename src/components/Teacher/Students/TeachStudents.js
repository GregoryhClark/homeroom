import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser, getTeacher} from '../../../redux/user';


class TeachStudents extends Component {
    render(){
        console.log(this.props.teacher)
        return (
            <div>Students</div>
        )
    }
}

function mapStateToProps(state){
    return{
          user: state.user
        , teacher: state.teacher
    }
}
export default connect(mapStateToProps, {getUser, getTeacher})(TeachStudents);