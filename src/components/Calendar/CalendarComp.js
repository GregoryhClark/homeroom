import React, { Component } from 'react';
import Calendar from 'react-calendar';

export default class CalendarComp extends Component {
  state = {
    date: new Date(),
  }
  onChange = date => this.setState({ date })
  render() {
    return (
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
    );
  }
}


