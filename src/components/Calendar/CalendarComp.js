import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import CalendarModal from './CalendarModal'
import { connect } from 'react-redux';
import { getUser, getStudent } from '../../redux/user';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import * as functions from '../../utils/functions'


class CalendarComp extends Component {
  constructor(){
    super()
    this.state={
      slotStart:''
    }
  }
 
  handleSelectEvent(event) {
    //let eventTitle = event.title
    for (let value in event) {//This is where routing will take place
      console.log(`${event[value]}`)
    }
  }
  handleSelectSlot(slotInfo){
    
    let startTime = functions.changeToString(slotInfo)
    this.setState({
      slotStart:startTime
    })
}

  render() {
    
    let studentData = this.props.student
    // console.log((studentData.calendar[0].calendar_event_start_time))
    let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

    BigCalendar.momentLocalizer(moment);
    let events = studentData.calendar.map((event, index) => {

      let startHour = functions.getHours(studentData.calendar[index].calendar_event_start_time);
      let startMinutes = functions.getMinutes(studentData.calendar[index].calendar_event_start_time);

      let endHour = functions.getHours(studentData.calendar[index].calendar_event_end_time);
      let endMinutes = functions.getMinutes(studentData.calendar[index].calendar_event_end_time);

      //convert string from db to date object
      let startDate = new Date(studentData.calendar[index].calendar_event_start_date)
      //set the hours/minutes to the date value. This converts it to Unix though.
      let afterSetHours = startDate.setHours(startHour, startMinutes);
      //convert back to date object
      let startConverted = new Date(afterSetHours)

      let endDate = new Date(studentData.calendar[index].calendar_event_end_date)
      let afterSetHoursEnd = endDate.setHours(endHour, endMinutes);
      let endConverted = new Date(afterSetHoursEnd)
      // console.log((this.state.slotStart))

      return {
        id: event.calendar_event_id,
        title: event.calendar_event_title,
        allDay: event.calendar_event_all_day,
        start:(startConverted),
        end:(endConverted),
        desc: 'Power lunch',
      }
    })


    return (
      <div>
      <BigCalendar
        selectable
        events={events}
        views={allViews}
        step={15}
        showMultiDayTimes
        onSelectEvent={(event) => {
          this.handleSelectEvent(event)
          
          }}

        defaultDate={new Date()}
        timeslots={1}
        onSelectSlot={slotInfo => {this.handleSelectSlot(slotInfo.start)}}
      />
      <CalendarModal slotInfo={this.state.slotStart}
        />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    user: state.user,
    student: state.student
  }
}
export default connect(mapStateToProps, { getUser, getStudent })(CalendarComp);
