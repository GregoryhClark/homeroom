import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import {connect} from 'react-redux';
import {getUser, getStudent} from '../../redux/user';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

class CalendarComp extends Component{
  
  render(){
    console.log(this.props.student)
    let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
    BigCalendar.momentLocalizer(moment);
      let events = [
        {
          id: 0,
          title: 'Calculus 2 Test',
          allDay: true,
          start: new Date(2018, 3, 18),
          end: new Date(2018, 3, 18),
        }
      ]
  return(
    <BigCalendar
        events={events}
        views={allViews}
        step={60}
        showMultiDayTimes
        defaultDate={new Date()}
      />
  )
}
}
function mapStateToProps(state){
  return{
          user: state.user
        , student:state.student
  }
}
export default connect(mapStateToProps, {getUser, getStudent})(CalendarComp);