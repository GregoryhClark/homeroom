import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../../redux/user';


class TeachHome extends Component {
    render(){

        return (
            <div>Teach Home</div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(TeachHome);