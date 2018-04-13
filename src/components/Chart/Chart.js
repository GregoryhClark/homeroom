import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import { connect } from 'react-redux';
import { getUser, getGrades } from '../../redux/user';

//CSS, ASSETS
import './Chart.css'


class Chart extends Component {
    constructor() {
        super()
        this.state = {
            selectedCourseID:3,
            selectedCourseName:'*name of course*'

        }
        this.selectCourse = this.selectCourse.bind(this)
    }

    async componentWillMount() {
        await this.props.getUser();
        await this.props.getGrades();
        console.log("getUser: Chartjs", this.props.user)
        console.log("getGrades: Chartjs", this.props.grades)

    }

    //select * from student_assignments where student_id = 2 and class_id = 3 order by due_date

    selectCourse(courseNumber){
        console.log(typeof courseNumber)
        this.setState({
            selectedCourseID:+courseNumber
        })
        console.log(this.state.selectedCourseID)
    }

    render() {

        // console.log("getGrades: Chartjs",this.props.grades[0])

        let assignmentList = (this.props.grades.length > 0) ? this.props.grades.map(obj => {
            if (obj.class_id === this.state.selectedCourseID){
                return obj.name}
            }).filter(value => value): null;

        let studentScores = (this.props.grades.length > 0) ? this.props.grades.map(obj => {
            if (obj.class_id === this.state.selectedCourseID){
                return obj.points_earned}
            }).filter(value => value): null;

        let chartData = {
            labels: assignmentList,
            datasets: [
                {
                    label: 'Student Score',
                    data: studentScores
                },
                {
                    label: 'Average Score',

                    data: [75, 66, 80],
                    backgroundColor: '#ff6384'
                }

            ]
        }
        let courseButtons = <button className="course_btn"></button>
        return (
            <div>
                {/* <h1>{`Chart ${this.props.grades}`}</h1>  */}
                <div className="test_chart_wrapper">
                    <Bar className="test_chart"
                        data={chartData}
                        options={{
                            title: {
                                display: true,
                                text: `Assignment Scores for ${this.state.selectedCourseName}`, //this will need to be the selected class name
                                fontSize: 30
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                </div>
                <div className="coursesButtonsWrapper">
                        {/* {courseButtons} */}
                        <button className="course_btn" value = {1} onClick={(e)=> this.selectCourse(e.target.value)}>English 1</button>
                        <button className="course_btn" value = {3} onClick={(e)=> this.selectCourse(e.target.value)}>Math 1</button>
                        <button className="course_btn">Math 2</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log("Chart CURRENT STATE",state)
    return {
          user: state.user
        , grades: state.grades
    }
}
export default connect(mapStateToProps, { getUser, getGrades })(Chart);