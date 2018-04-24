import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';
import CreateStudent from '../../components/Administrator/CreateStudent/CreateStudent.js';

class CreateTeacherView extends Component {
  render(){
    let accountType = this.props.user.account_type;
      return (
          accountType === "Administrator" ? <CreateStudent/> : null
      )
  }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(CreateTeacherView);