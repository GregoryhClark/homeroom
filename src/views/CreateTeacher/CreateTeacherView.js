import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';
import CreateTeacher from '../../components/Administrator/CreateTeacher/CreateTeacher.js';

class CreateTeacherView extends Component {
  render(){
    let accountType = this.props.user.account_type;
      return (
          accountType === "Administrator" ? <CreateTeacher/> : null
      )
  }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(CreateTeacherView);