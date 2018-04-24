//MODULES
import React from 'react';
import {connect} from 'react-redux';
import {studentsForAdmin} from '../../../redux/user.js';

//COMPONENTS
import CreateNewUser from '../../CreateNewUser/CreateNewUser.js';

//COMPONENT
function CreateStudent(props) {
  return (
    <CreateNewUser h1="Create Student" account_type="Student" updateRedux={props.studentsForAdmin}/>
  )
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps, {studentsForAdmin})(CreateStudent)