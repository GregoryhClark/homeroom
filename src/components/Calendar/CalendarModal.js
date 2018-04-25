//COMPONENTS
import React, {Component} from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
//import { Link } from 'react-router-dom'
import {getUser, getStudent, selectedCourse} from './../../redux/user';
//CSS, ASSETS
import './CalendarModal.css';
//import RenderToLayer from 'material-ui/internal/RenderToLayer'
const moment = require('moment');
;

//COMPONENT
class CalendarModal extends Component {
  constructor(props){
    super(props)
    this.state={
      startDate:{},
      startHour:'',
      startMin:'',
      endDate:{},
      endHour:'',
      endMin:'',
      allDay:false,
      title:''
    }
  }
  componentDidMount(){
    let defaultEndDate = moment(new Date(this.props.slotInfo)).add(30, 'm').toDate();
    defaultEndDate = moment(defaultEndDate).add(30, 'm').toDate();
    this.setState({
    
      startDate: new Date (this.props.slotInfo),
      endDate:defaultEndDate
    })
    
  }
  refreshState(){
    let defaultEndDate = moment(new Date(this.props.slotInfo)).add(30, 'm').toDate();
    this.setState({
    
      startDate: new Date (this.props.slotInfo),
      endDate:defaultEndDate
    })
    
  }
  setStartHour(hour){
    this.setState({
      startHour:hour
    })
  }
  setStartMin(min){
    
    this.setState({
      startMin:min
    })
  }
  setEndHour(hour){
    this.setState({
      endHour:hour
    })
  }
  setEndMin(min){
    this.setState({
      endMin:min
    })
  }
  setTitle(title){
    this.setState({
      title:title
    })
  }
  changeCheck(){
    if (!this.state.allDay){
      this.setState({
        allDay: true
      })
    } else {
      this.setState({
        allDay: false
      })
    }
  }
  createEvent(){
    let startDate = `${this.state.startDate.getFullYear()}-${this.state.startDate.getMonth()}-${this.state.startDate.getDate()}`
    let startTime = `${this.state.startHour}:${this.state.startMin}:00`

    let endDate = `${this.state.endDate.getFullYear()}-${this.state.endDate.getMonth()}-${this.state.endDate.getDate()}`
    let endTime = `${this.state.endHour}:${this.state.endMin}:00`

    console.log("startDate:", startDate, "startTime:",startTime, "endDate:",endDate, "endTime:",endTime)
    console.log("All Day:",this.state.allDay)
    console.log(this.state.title)
  }
    
 render() {

  let timeSlotStartString = this.props.slotInfo;


  let hours = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
  
  let hoursOptions = hours.map((hour, index)=>{
      return <option key = {index}>{hour}</option>
  })

 
  return(
    <div>
      <div id="top_div"></div>
      <button onClick={()=>this.refreshState()}>refresh state</button>
      <br/>
      
      
      Start: {timeSlotStartString}
      <Calendar 
        onChange = {date => this.setState({startDate:date})}
      />
      All Day Event?
      <input onChange={()=>{this.changeCheck()}}id="all_day_checkBox" type="checkbox" />
      <br/>
      <br/>
      Start Hour:
      <select onChange={(e)=>{this.setStartHour(e.target.value)}}name="" id="end_hours_select" className="month_option">
        <option value="">Select</option>
       {hoursOptions}
      </select>
      <br/>
      Start Minute:
      <select onChange={(e)=>{this.setStartMin(e.target.value)}}name="" id="end_min_select" className="month_option">
        <option value="">Select</option>
        <option >00</option>
        <option >15</option>
        <option >30</option>
      </select>
      End: 
      <Calendar
        // activeStartDate = {new Date(startDateNumericString)}
        onChange = {date=> this.setState({endDate:date}) }
      
      />
      <br/>
      
      End hour:
      <select onChange={(e)=>{this.setEndHour(e.target.value)}}name="" id="end_hours_select" className="month_option">
      <option value="">Select</option>
        {hoursOptions}
      </select>
      <br/>
      End minute:
      <select onChange={(e)=>{this.setEndMin(e.target.value)}}name="" id="end_min_select" className="month_option">
        <option value="">Select</option>
        <option value="00">00</option>
        <option value="15">15</option>
        <option value="30">30</option>
      </select>
      <br/>      
      Title:
      <input onChange={(e)=>{this.setTitle(e.target.value)}} id="title_input" type="text"/>
      
      <br/>
      <button onClick={()=>{this.createEvent()}}>create event</button>

      <div id="bottom_div"></div>
    </div>
  )}


}

function mapStateToProps(state) {
  return {
      student: state.student
    , currentCourseID:state.currentCourseID
  }
}

export default connect(mapStateToProps,{getUser, getStudent, selectedCourse})(CalendarModal)