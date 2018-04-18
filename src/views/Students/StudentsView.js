import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';
import Students from '../../components/Parent/Students/Students'

class StudentsView extends Component {
    render(){
    let accountType = this.props.user.account_type;
        return (
            accountType === "Administrator" ? null:
            accountType === "Teacher" ? null:
            accountType === "Parent"? <Students/>: 
            accountType === "Student" ? null : null
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(StudentsView);