import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

let events = [
  {
    id: 0,
    title: 'Calculus 2 Test',
    allDay: true,
    start: new Date(2018, 3, 18),
    end: new Date(2018, 3, 18),
  }
]
BigCalendar.momentLocalizer(moment);
let Basic = () => (
  <BigCalendar
    events={events}
    views={allViews}
    step={60}
    showMultiDayTimes
    defaultDate={new Date()}
  />
)

export default Basic