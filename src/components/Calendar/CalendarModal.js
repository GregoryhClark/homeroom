//COMPONENTS
import React, {Component} from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
import Moment from 'react-moment';

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
    <div className="add-event">

      <div className="event-details">
        <span className>Event Name:</span>
        <input type="text" onChange={(e)=>{this.setTitle(e.target.value)}}/>
      </div>

      <div className="event-details">
        <span className>All Day Event:</span>
        <input onChange={()=>{this.changeCheck()}}id="all_day_checkBox" type="checkbox" />
      </div>

      <div className="calendars">

        <div className="start-date">
          <h2>State Date</h2>
          <span className="start-date-time"><Moment format="MM-DD-YYYY h:mma">{timeSlotStartString}</Moment></span>
          <Calendar onChange = {date => this.setState({startDate:date})}/>

          <div className="time">

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
          <Calendar onChange={date=> this.setState({endDate:date}) }/>

          <div className="time">

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
        {/*<button onClick={()=>this.refreshState()}>refresh state</button> */}
        <button onClick={()=>{this.createEvent()}}>Create Event</button>
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