import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getStudent , selectedCourse} from '../../../redux/user';
import './Dashboard.css'

class Dashboard extends Component {
    render() {
        let studentData = this.props.student;
        let courseCards = studentData.getCourses ? studentData.getCourses.map((element, index) => {
            return <Link key={index} className="dasboard_style_card" onClick={()=>this.props.selectedCourse(element.course_id)} to="courses">
                        <img className = "course_image_wrapper course_card_img" alt = "course"src={element.courses_photo ? element.courses_photo : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/500px-Gnome-stock_person.svg.png"}/>
                        {element.course_name}
                    </Link>
        }) : null;

        return (
                <div className="main_card_wrapper" onClick={this.props.updateSecondNav}>{courseCards}</div>
        )
    }
}
function mapStateToProps(state) {
    return {
          student: state.student
        , currentCourseID:state.currentCourseID
    }
}
export default connect(mapStateToProps, { getStudent, selectedCourse })(Dashboard);
