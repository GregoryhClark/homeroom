import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'
import { getStudent } from '../../../redux/user';
import './Dashboard.css'
// import { Divider } from 'material-ui';
import _ from 'underscore';

class Dashboard extends Component {
    rerouteToCourse(courseID) {
        //This is where we need logic for routing.
    }
    render() {
        let studentData = this.props.student;
        var studentCourses = studentData.getCourses ?
            studentData.getCourses.map(value => {
                return { courseID: value.course_id, courseName: value.course_name, courseImage: value.courses_photo }
            })
            : []
        let courseCards = _.uniq(studentCourses).map((element, index) => {
            return <a
                onClick={(e) => this.rerouteToCourse(element.course_id)}
                key={index}
                className="dasboard_style_card">
                <div className = "course_image_wrapper">
                    <img className="course_card_img" alt = "course"src={element.courseImage.length > 15 ? element.courseImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/500px-Gnome-stock_person.svg.png"} />
                </div>
                <div className="course_card_name">
                    {element.courseName}
                </div>
            </a>
        })
        console.log(studentData)
        return (
            <div>
                <div className="main_card_wrapper">
                    {courseCards}
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        student: state.student
    }
}
export default connect(mapStateToProps, { getStudent })(Dashboard);
