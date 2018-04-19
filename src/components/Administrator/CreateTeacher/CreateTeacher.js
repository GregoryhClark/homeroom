//MODULES
import React from 'react';
import {connect} from 'react-redux';

//CSS, ASSETS
import './CreateTeacher.css';

//COMPONENT
class CreateTeacher extends React.Component {
  render() {
    return (
      <div>Hello!</div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(CreateTeacher)