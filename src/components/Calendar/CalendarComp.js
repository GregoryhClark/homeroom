import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

class CalendarComp extends Component{
  
  render(){
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
  }
}
export default connect(mapStateToProps, {getUser})(CalendarComp);