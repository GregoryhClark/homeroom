import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';
import './Account.css';


class Account extends Component {
    async componentWillMount(){
        await this.props.getUser();
        console.log("getUser: Account",this.props.user)
    }
    render() {
        return (
            <div className="account">
                <div className="account-settings">
                    {this.props.user.first_name} {this.props.user.last_name}
                </div>
                <div className="account-notifications">
                    <h1>Notification Preferences</h1>
                </div>
            </div> 
        )
    }
}
function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(Account);