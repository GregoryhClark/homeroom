//MODULES
import React from 'react';
import {connect} from 'react-redux';
import {parentsForAdmin} from '../../../redux/user.js';

//COMPONENTS
import CreateNewUser from '../../CreateNewUser/CreateNewUser.js';

//COMPONENT
function CreateParent(props) {
  return (
    <CreateNewUser h1="Create Parent" account_type="Parent" updateRedux={props.parentsForAdmin}/>
  )
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps, {parentsForAdmin})(CreateParent)