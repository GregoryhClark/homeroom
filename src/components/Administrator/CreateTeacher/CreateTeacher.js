//MODULES
import React from 'react';
import {connect} from 'react-redux';
import {teachersForAdmin} from '../../../redux/user.js';

//COMPONENTS
import CreateNewUser from '../../CreateNewUser/CreateNewUser.js';

//COMPONENT
function CreateTeacher(props) {
  return (
    <CreateNewUser h1="Create Teacher" account_type="Teacher" updateRedux={props.teachersForAdmin}/>
  )
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps, {teachersForAdmin})(CreateTeacher)