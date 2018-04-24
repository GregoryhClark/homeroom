import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';
import CreateParent from '../../components/Administrator/CreateParent/CreateParent.js';

class CreateParentView extends Component {
  render(){
    let accountType = this.props.user.account_type;
      return (
          accountType === "Administrator" ? <CreateParent/> : null
      )
  }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(CreateParentView);