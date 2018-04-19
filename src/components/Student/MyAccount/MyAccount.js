import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser, updateUser} from '../../../redux/user';
import './MyAccount.css'

class StudentAccount extends Component{
    constructor() {
        super()
        this.state = {
          editStudent: {
              first_name: ''
            , email: ''
            , phone_number: ''
            , user_photo: ''
          } ,
          saveStatus: ''
        }
        this.handleUpdateState = this.handleUpdateState.bind(this)
        this.handleAccountSave = this.handleAccountSave.bind(this)
    }
    componentWillMount(){
        this.setState({editStudent:this.props.user})
    }
    handleUpdateState(e, field){
        const editStudent = {...this.state.editStudent}
        editStudent[field] = e.target.value;
        this.setState({editStudent})
    }
    handleAccountSave(){
        let  {editStudent} = this.state;
        this.setState({saveStatus: 'pending'})
        this.props.updateUser(editStudent).then(update => {
            this.setState({saveStatus: true})
        })
    }
    render(){
        let {first_name, email, phone_number} = this.state.editStudent;
        let {saveStatus} = this.state;
        let currentStudent = this.props.user;
        return(
            <div className="student-account">
                <Container type="container">
                    <Titles type="titles">{`${currentStudent.first_name}'s Settings`}</Titles>
                    <InnerContainer type="innerContainer">
                        {this.props.user.user_photo === 'undefined' ? <div style={noPhoto}><span style={addPhoto}>Add Photo</span></div> : <img src={this.props.user.user_photo} style={profilePicture} alt="User Profile"/>}
                        {saveStatus === 'pending' ? <div className="save-status-pending">Pending...</div> : saveStatus === true ? <div className="save-status-successful">Save Successful</div> : null}
                        <InnerTitle type="innerTitle">Display Name:</InnerTitle>
                            <InputText type="inputText" stateValue={first_name} field={'first_name'} update={this.handleUpdateState}/>
                        <InnerTitle type="innerTitle">Email:</InnerTitle>
                            <InputText type="inputText" stateValue={email} field={'email'} update={this.handleUpdateState}/>
                        <InnerTitle type="innerTitle">Phone:</InnerTitle>
                            <InputText type="inputText" stateValue={phone_number} field={'phone_number'} update={this.handleUpdateState}/>
                        <InnerTitle type="innerTitle">Time Zone:</InnerTitle>
                        <select style={inputTextStyle}>
                            <option>Eastern</option>
                            <option>Central</option>
                            <option>Mountain</option>
                            <option>Pacific</option>
                        </select>
                        <ButtonContainer type="buttonContainer">
                        
                            <Button type="cancel">Cancel</Button>
                            <Button type="save" save={this.handleAccountSave}>Save</Button>
                        </ButtonContainer>
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
export default connect(mapStateToProps, {getUser, updateUser})(StudentAccount);

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
    return <input style={style} value={props.stateValue} onChange={(value)=>props.update(value, props.field)}>{props.children}</input>
}
function ButtonContainer(props){
    const styleToApply = props.type ? styleLookup[props.type] : {}
        , style = Object.assign({}, styleToApply);
    return <div style={style}>{props.children}</div>
}
function Button(props){
    const styleToApply = props.type ? styleLookup[props.type] : {}
        , style = Object.assign({},buttonStyle, styleToApply);
    return <button style={style} onClick={()=>props.save()}>{props.children}</button>
}

// ************** STYLES ***************
// ========= CONTAINER STYLE ===========
const containerStyle={
      boxSizing: "border-box"
    , margin:"0 20px"
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
    , padding:"10px"
    , marginBottom:"15px"
    , boxSizing: "border-box"
}
// ======= INNER TITLE STYLE ===========
const innerTitleStyle={
      fontSize:"1em"
    , color:"#7d7d7d"
    , padding:"8px"
}
// ============ BUTTON STYLES ==========
const buttonContainer={
      width:"180px"
    , display:"block"
    , margin:" 15px 10px 5px auto"
}
const buttonStyle={
      width:"80px"
    , margin:" 0px 5px 0px"
    , padding:"5px"
    , fontSize:"0.85em"
    , border:"none"
    , borderRadius:"3px"
    , outline:"none"
}
const buttonSave={
      color:"#FFF"
    , backgroundColor:"rgb(0, 166, 237)"
}
const buttonCancel={
      color:"#000"
    , backgroundColor:"rgb(200, 200, 200)"
}
// ========= INPUT TEXT STYLE ==========
const inputTextStyle={
      fontSize:"1em"
    , padding:"5px"
    , marginRight:'10px'
    , marginLeft:'10px'
    , border:"1px solid #eee"
    , borderRadius:"3px"
    , width:"calc(100% - (20px))"
    , boxSizing:"border-box"
}
// ======== PROFILE PICTURE ============
const profilePicture ={
      width:"100%"
    , maxWidth:"250px"
    , borderRadius:"50%"
    , display:"block"
    , margin: "auto"
    , backgroundColor:"#EEE"
    , boxShadow:"1px 1px 15px #CCC"
}
const noPhoto ={
      height:"250px"
    , width:"250px"
    , position:"relative"
    , borderRadius:"50%"
    , display:"block"
    , margin: "auto"
    , backgroundColor:"#EEE"
}
const addPhoto ={
      color:"#7d7d7d"
    , position:"absolute"
    , top:"104px"
    , fontSize:"2em"
    , left:"52px"
}
// ************ STYLE LOOKUP ***********
const styleLookup={
      container:containerStyle
    , titles:titleStyle
    , innerContainer:innerContainerStyle
    , innerTitle:innerTitleStyle
    , inputText: inputTextStyle
    , buttonContainer: buttonContainer
    , save: buttonSave
    , cancel: buttonCancel
}