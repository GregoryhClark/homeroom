import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { getParent } from '../../../redux/user';
import { getStudent } from '../../../redux/user';
import './Students.css'
// import { Divider } from 'material-ui';
// import _ from 'underscore';

class Students extends Component {
    rerouteToChild(courseID) {
        //This is where we need logic for routing.
    }
    render() {
        let parentData = this.props.parent.getParent        
        let childrenCards = parentData ? parentData.map((element, index) => {
            return <a
                onClick={(e) => this.rerouteToChild(element.student_id)}
                key={index}
                className="dasboard_style_card">
                <div className = "course_image_wrapper">
                    <img className="student_card_img" alt = "profile" src={element.user_photo.length > 15 ? element.user_photo : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/500px-Gnome-stock_person.svg.png"} />
                </div>
                <div className="course_card_name">
                    {`${element.first_name} ${element.last_name}`}
                </div>
            </a>
        })
        :null
        console.log(parentData)
        return (
            <div>
                <div className="main_card_wrapper">
                    {childrenCards}
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        parent: state.parent,
    }
}
export default connect(mapStateToProps, { getParent })(Students);
