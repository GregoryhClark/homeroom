import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../../redux/user';
import './MyAccount.css'

class StudentAccount extends Component{
    render(){
        return(
            <div className="student-account">
                <Container type="container">
                    <Titles type="titles">{`${this.props.user.first_name} ${this.props.user.last_name}'s Settings`}</Titles>
                    <InnerContainer type="innerContainer">
                        <InnerTitle type="innerTitle">Full Name:</InnerTitle>
                            <InputText type="inputText"></InputText>
                        <InnerTitle type="innerTitle">Display Name:</InnerTitle>
                            <InputText type="inputText"></InputText>
                        <InnerTitle type="innerTitle">Email:</InnerTitle>
                            <InputText type="inputText"></InputText>
                        <InnerTitle type="innerTitle">Time Zone:</InnerTitle>
                        <select style={inputTextStyle}>
                            <option>Eastern</option>
                            <option>Central</option>
                            <option>Mountain</option>
                            <option>Pacific</option>
                        </select>
                    </InnerContainer>
                </Container>
                <Container type="container">
                    <Titles type="titles">Notification Preferences</Titles>
                    <InnerContainer type="innerContainer">
                        <InnerTitle type="innerTitle">Classes:</InnerTitle>
                        <InnerTitle type="innerTitle">Discussions:</InnerTitle>
                        <InnerTitle type="innerTitle">Scheduling:</InnerTitle>
                    </InnerContainer>
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
export default connect(mapStateToProps, {getUser})(StudentAccount);

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
function InnerContainer(props){
    const styleToApply = props.type ? styleLookup[props.type] : {}
        , style = Object.assign({}, styleToApply);
    return <div style={style}>{props.children}</div>
}
function InnerTitle(props){
    const styleToApply = props.type ? styleLookup[props.type] : {}
        , style = Object.assign({}, styleToApply);
    return <div style={style}>{props.children}</div>
}
function InputText(props){
    const styleToApply = props.type ? styleLookup[props.type] : {}
        , style = Object.assign({}, styleToApply);
    return <input style={style}>{props.children}</input>
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
// =======INNER CONTAINER STYLE ========
const innerContainerStyle={
      backgroundColor:"#FFF"
    , marginTop:"10px"
    , marginBottom:"10px"
    , boxSizing: "border-box"
}
// ======= INNER TITLE STYLE ===========
const innerTitleStyle={
      fontSize:"1em"
    , color:"#7d7d7d"
    , padding:"5px"
}
// ========= INPUT TEXT STYLE ==========
const inputTextStyle={
      fontSize:"1em"
    , padding:"5px"
    , border:"1px solid #eee"
    , borderRadius:"3px"
    , width:"100%"
    , boxSizing:"border-box"
}
// ************ STYLE LOOKUP ***********
const styleLookup={
      container:containerStyle
    , titles:titleStyle
    , innerContainer:innerContainerStyle
    , innerTitle:innerTitleStyle
    , inputText: inputTextStyle
}