import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser, getTeacher} from '../../../redux/user';
import './TeachHome.css'


class TeachHome extends Component {
    render(){
        console.log(this.props.teacher)
        return (
        <div className="course-container">            
            <div className="left-column">
            <div className="title-bar">Welcome to Homeroom</div>
                <section className="home-section">
                {"All schools in the Salt Lake City District use Homeroom as the Learning Management System (LMS), which means all of your online courses will be in Homeroom. The course content will be available by the first day of classes."}
                </section>
                <div className="title-bar">{`Recent Comments`}</div>
                <section className="home-section">
                {"Nothing to display"}
                </section>
                <div className="title-bar">{`Recent Submitted Assignments`}</div>
                <section className="home-section">
                {"Nothing to display"}
                </section>
            </div>
            <div className="right-column">
                <section className="home-section">
                    <div className="title-bar ">Coming up</div>
                    <div style={{textAlign:"center", padding:"3px"}}>Nothing for the next week</div>
                </section>
                <section className="home-section">
                    <div className="title-bar">Announcements</div>
                    <div style={{textAlign:"center", padding:"3px"}}>No current announcements</div>
                </section>
                <section className="home-section">
                    <div className="title-bar">Technical Support Resources</div>
                    <div style={{textAlign:"center", padding:"3px"}}>Technical support provides answers to your technical questions here at Homeroom</div>
                    <ul className="sub-title">Phone based Support</ul>
                    <li>{"555-123-4567"}</li>
                    <div className="sub-title">E-mail based Support</div>
                    <li><a href={`mailto:helpdesk@homeroom.com`}>helpdesk@homeroom.com</a></li>
                    <div className="sub-title">Homeroom Support Hours:</div>
                    <li>Mon-Fri: 8:00am -12:00am	Sat- Sun: 12:00pm - 9:00pm</li>
                    <li>Campus helpdesk hours: 8:00am - 5:00pm</li>
                </section>
            </div>
        </div> 
        )
    }
}

function mapStateToProps(state){
    return{
          user: state.user
        , teacher: state.teacher
    }
}
export default connect(mapStateToProps, {getUser, getTeacher})(TeachHome);