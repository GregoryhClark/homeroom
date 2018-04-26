//COMPONENTS
import React, {Component} from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
import Moment from 'react-moment';
import * as functions from '../../utils/functions'
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
      startDate:'',
      startHour:'',
      startMin:'',
      endDate:'',
      endHour:'',
      endMin:'',
      allDay:false,
      title:''
    }
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
      this.setState({allDay: true})
      document.getElementById('start-time').style.visibility = 'hidden';
      document.getElementById('end-time').style.visibility = 'hidden';
    } else {
      this.setState({allDay: false})

      document.getElementById('start-time').style.visibility = 'visible';
      document.getElementById('end-time').style.visibility = 'visible';
    }
  }

  createEvent(){
    let startDate = functions.concatenateDate(this.state.startDate.getFullYear(),this.state.startDate.getMonth(),this.state.startDate.getDate())
    // let startDate = `${this.state.startDate.getFullYear()}-${this.state.startDate.getMonth()}-${this.state.startDate.getDate()}`
    let startTime = `${this.state.startHour}:${this.state.startMin}:00`

    let endDate = `${this.state.endDate.getFullYear()}-${this.state.endDate.getMonth()}-${this.state.endDate.getDate()}`
    let endTime = `${this.state.endHour}:${this.state.endMin}:00`

    let newEventObj = {
      startDate:startDate,
      startTime:startTime,
      endDate:endDate,
      endTime:endTime,
      title:this.state.title,
      currentUser:this.props.currentUser
    }
    console.log(newEventObj);
    return newEventObj;
  }
  handleButtonClick(){
    if(this.state.startDate === '' ||  this.state.endDate === '' || this.state.title === ''){
      alert('Please Fill Out All Fields')
    }else if (!this.state.allDay){
        if(this.state.startHour === '' || this.state.endHour === ''){
          alert('Please Fill Out All Fields')
        }
      }else {
      this.createEvent()
    }
  }
    
 render() {
  let timeSlotStartString = this.state.startDate === '' ? this.props.slotInfo : this.state.startDate;
  // console.log(timeSlotStartString)
  // let timeSlotStartString = this.props.slotInfo;

  let hours = functions.getHoursList

  let defaultEndDate = moment(new Date(timeSlotStartString)).add(30, 'm').toDate();
 
  
  let hoursOptions = hours().map((hour, index)=>{
      return <option key = {index}>{hour}</option>
  })
 
  return(
    <div className="add-event">

      <div className="event-details">
        <span>Event Name:</span>
        <input type="text" value={this.state.title} onChange={(e)=>{this.setTitle(e.target.value)}}/>
      </div>

      <div className="event-details">
        <span>All Day Event:</span>
        <input type="checkbox" onChange={()=>{this.changeCheck()}}id="all_day_checkBox"/>
      </div>

      <div className="calendars">

        <div className="start-date">
          <h2>State Date</h2>
          <span className="start-date-time"><Moment>{timeSlotStartString}</Moment></span>
          <Calendar onChange = {date => this.setState({startDate:date})}/>

          <div className="time" id="start-time">

            <div className="hour">
              <span>Start Hour:</span>
              <select onChange={(e)=>{this.setStartHour(e.target.value)}}name="" id="end_hours_select" className="month_option">
              <option value="">Select</option>{hoursOptions}</select>
            </div>

            <div className="minute">
              <span>Start Minute:</span>
              <select onChange={(e)=>{this.setStartMin(e.target.value)}}name="" id="end_min_select" className="month_option">
              <option value="">Select</option>
              <option >00</option>
              <option >15</option>
              <option >30</option>
              <option >45</option>
              </select>
            </div>

          </div>

        </div>


        <div className="end-date">
          <h2>End Date</h2>
          {/* activeStartDate = {new Date(startDateNumericString)} */}
          {/* <span className="end-date-time"><Moment format="MM-DD-YYYY h:mma">{this.state.endDate === ''? defaultEndDate:this.state.endDate}</Moment></span> */}
          <Calendar onChange={date=> this.setState({endDate:date}) }/>

          <div className="time" id="end-time">

            <div className="hour">
              <span>End Hour:</span>
              <select onChange={(e)=>{this.setEndHour(e.target.value)}}name="" id="end_hours_select" className="month_option">
                <option value="">Select</option>
                {hoursOptions}
              </select>
            </div>

            <div className="minute">
              <span>End Minute:</span>
              <select onChange={(e)=>{this.setEndMin(e.target.value)}}name="" id="end_min_select" className="month_option">
                <option value="">Select</option>
                <option value="00">00</option>
                <option value="15">15</option>
                <option value="30">30</option>
              </select>
            </div>

          </div>

        </div>
      
      </div>

      <div className="buttons">
        <button onClick={()=>{this.handleButtonClick()}}>Create Event</button>
      </div>

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