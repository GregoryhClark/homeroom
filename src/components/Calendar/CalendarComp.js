import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import { connect } from 'react-redux';
import { getUser, getStudent } from '../../redux/user';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

class CalendarComp extends Component {



  getHours(time) {
    let splitTime = time.split('')

    let splitHours = []
    if (splitTime[0] > 0) {
      splitHours.push(splitTime[0])
      splitHours.push(splitTime[1])
    } else splitHours.push(splitTime[1])

    let hours = parseInt((splitHours.join('')), 10)
    return hours

  }
  getMinutes(time) {
    let splitTime = time.split('')

    let splitMinutes = []
    if (splitTime[3] > 0) {
      splitMinutes.push(splitTime[3])
      splitMinutes.push(splitTime[4])
    } else splitMinutes.push(splitTime[4])
    let minutes = parseInt(splitMinutes.join(''),10)
    return minutes

  }
  
  handleSelectEvent(event){
    //let eventTitle = event.title
    for (let value in event){//This is where routing will take place
    console.log(`${event[value]}`)
    }
  }

  render() {
    let studentData = this.props.student
    let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
    
    BigCalendar.momentLocalizer(moment);

    let events = studentData.calendar.map((event, index) => {

      let startHour = this.getHours(studentData.calendar[index].calendar_event_start_time);
      let startMinutes = this.getMinutes(studentData.calendar[index].calendar_event_start_time);
      
      let endHour = this.getHours(studentData.calendar[index].calendar_event_end_time);
      let endMinutes = this.getMinutes(studentData.calendar[index].calendar_event_end_time);

      let startDateSet = studentData.calendar[index].calendar_event_start_date;
      let startDateWithH = new Date(startDateSet).setHours(startHour, startMinutes);
      

      let endDateSet = studentData.calendar[index].calendar_event_end_date;
      let endDateWithH = new Date(endDateSet).setHours(endHour, endMinutes);
     
     
      return {
        id: event.calendar_event_id,
        title: event.calendar_event_title,
        allDay: event.calendar_event_all_day,
        start: startDateWithH,
        end: endDateWithH,
      }
    })    

    console.log(studentData)

    

    return (
      <BigCalendar
        selectable
        events={events}
        // startAccessor={'startDate'}
        // endAccessor={'endDate'}
        views={allViews}
        step={60}
        showMultiDayTimes
        onSelectEvent={(event) =>this.handleSelectEvent(event)}

        defaultDate={new Date()}
        timeslots={10}
        onSelectSlot={slotInfo =>
          alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
              `\nend: ${slotInfo.end.toLocaleString()}` +
              `\naction: ${slotInfo.action}`
          )
        }
      />
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
