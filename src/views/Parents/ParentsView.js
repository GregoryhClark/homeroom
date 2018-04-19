import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';
import AdministratorView from '../../components/Administrator/Parents/Parents.js';

class ParentsView extends Component {
    render(){
    let accountType = this.props.user.account_type;
        return (
            accountType === "Administrator" ? <AdministratorView/>:
            accountType === "Teacher" ? null: null
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(ParentsView);