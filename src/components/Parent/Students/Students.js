import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getParent } from '../../../redux/user';
import { getStudent } from '../../../redux/user';
import './Students.css'
import { Divider } from 'material-ui';
import _ from 'underscore';

class Students extends Component {
    rerouteToCourse(courseID) {
        //This is where we need logic for routing.
    }
    render() {
        let parentData = this.props.parent;
        let studentData = this.props.student;
        // var studentCourses = studentData.getCourses ?
        //     studentData.getCourses.map(value => {
        //         return { courseID: value.course_id, courseName: value.course_name, courseImage: value.courses_photo }
        //     })
        //     : []
        // let courseCards = _.uniq(studentCourses).map((element, index) => {
        //     return <a
        //         onClick={(e) => this.rerouteToCourse(element.course_id)}
        //         key={index}
        //         className="dasboard_style_card">
        //         <div className = "course_image_wrapper">
        //             <img className="course_card_img" alt = "course image"src={element.courseImage.length > 15 ? element.courseImage : "https://avatars3.githubusercontent.com/u/26701845?s=460&v=4"} />
        //         </div>
        //         <div className="course_card_name">
        //             {element.courseName}
        //         </div>
        //     </a>
        // })
        parentData ? console.log(parentData) : null
        console.log(studentData)
        return (
            <div> hi
                {/* <div className="main_card_wrapper">
                    {courseCards}
                </div> */}

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        parent: state.parent,
        student: state.student
    }
}
export default connect(mapStateToProps, { getParent , getStudent})(Students);