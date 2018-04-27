import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import CalendarModal from './CalendarModal'
import { connect } from 'react-redux';
import { getUser, getStudent } from '../../redux/user';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import * as functions from '../../utils/functions'
import './CalendarComp.css';


class CalendarComp extends Component {
  constructor(){
    super()
    this.state={
      slotStart:''
    }
  }
 
  handleSelectEvent(event) {
    //let eventTitle = event.title
    document.getElementById('calendar-modal').style.display = "block";
  }
  handleSelectSlot(slotInfo){
    
    let startTime = functions.changeToString(slotInfo)
    
    //UPDATE slotStart ON STATE
    this.setState({slotStart:startTime})

    //DISPLAY MODAL
    this.handleShowModal()
}

  handleShowModal() {
    document.getElementById('calendar-modal').style.display = "block";
  }

  handleCloseModal() {
    //CLOSE MODAL
    document.getElementById('calendar-modal').style.display = "none";
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
      // console.log()

      return {
        id: event.calendar_event_id,
        title: event.calendar_event_title,
        allDay: event.calendar_event_all_day,
        start:(startConverted),
        end:(endConverted),
        desc: 'Power lunch',
      }
    })

    //REMOVE MODAL WHEN AREA OUTSIDE OF MODAL IS CLICKED
    window.onclick = (e) => {
      const modal = document.getElementById('calendar-modal');
      if (e.target === modal) {
        this.handleCloseModal();
      }
    }

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
      
        {/*==========CODE FOR MODAL==========*/}
        <div id="calendar-modal" className="calendar-modal">
          <div className="calendar-modal-content">
            <span className="close" onClick={this.handleCloseModal}>&#215;</span>
            <h1 className="horizontal-line">Add Event</h1>

            {/*ADD PHOTO PLACEHOLDER IF NO PHOTO IS AVAILABLE*/}
            <CalendarModal slotInfo={this.state.slotStart} currentUser={this.props.user.user_id}/>

          </div>
        </div>

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
