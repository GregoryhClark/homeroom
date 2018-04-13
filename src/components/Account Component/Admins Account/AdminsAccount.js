import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../../redux/user';
import './AdminsAccount.css'

class AdminsAccount extends Component{
    render(){
        return(
            <div className="admins-account">
                <Container type="container">
                    <Titles type="titles">{`${this.props.user.first_name} ${this.props.user.last_name}'s Settings`}</Titles>
                    Admin
                </Container>
            </div>
        )
    }
}
// =========== MAP STATE TO PROPS ======
function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(AdminsAccount);

// =========== LINK ASSIGNMENT =========
function Container(props){
    const styleToApply = props.type ? styleLookup[props.type] : {}
        , style = Object.assign({}, styleToApply);
    return <div style={style}>{props.children}</div>
}
function Titles(props){
    const styleToApply = props.type ? styleLookup[props.type] : {}
        , style = Object.assign({}, styleToApply);
    return <div style={style}>{props.children}</div>
}


// ************** STYLES ***************
// ========= CONTAINER STYLE ===========
const containerStyle={
      boxSizing: "border-box"
    , margin:"25px"
    , flex:"1"
}
// =========== TITLE STYLE =============
const titleStyle={
      fontSize:"24px"
    , color:"#7d7d7d"
    , paddingBottom:"3px"
    , borderBottom:"1px solid #7D7D7D"
    , textAlign:"center"
}

// ************ STYLE LOOKUP ***********
const styleLookup={
      container:containerStyle
    , titles:titleStyle
}