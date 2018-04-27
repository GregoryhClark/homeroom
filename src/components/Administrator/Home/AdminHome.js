import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../../redux/user';
import './AdminHome.css';

class AdminHome extends Component {
    render(){

        return (
            <div id="admin-home" className="course-container">     

              <div className="left-column">
                <h1 className="horizontal-line">Welcome to Homeroom</h1>
                  <p>All schools in the Salt Lake City District use Homeroom as the Learning Management System (LMS), which means all of your online courses will be in Homeroom. The course content will be available by the first day of classes.</p>
                  <h1 className="horizontal-line">Recent Comments</h1>
                  <p className="gray">No Comments.</p>
                  <h1 className="horizontal-line">Recently Submitted</h1>
                  <p className="gray">No Recent Submissions.</p>
              </div>

            <div className="right-column">
                <h1 className="horizontal-line">Coming Up</h1>
                <p>Nothing for the next week</p>
                
                <h1 className="horizontal-line">Announcements</h1>
                <p>No current announcements</p>

                <h1 className="horizontal-line">Technical Support</h1>
                <span>Phone: 555-123-4567</span>
                <span>Email Support: <a href="helpdesk@homeroom.com">helpdesk@homeroom.com</a></span>
                <span>Support Hours: Mon-Fri: 8:00am - 12:00am   Sat-Sun: 12:00pm - 9:00pm</span>

            </div>
        </div>  
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(AdminHome);