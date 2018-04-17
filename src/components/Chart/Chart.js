import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { getUser, getStudent } from '../../redux/user';
import LoadData from '../../components/LoadData/LoadData'
import _ from 'underscore';

//CSS, ASSETS
import './Chart.css'

class Chart extends Component {

    constructor() {
        super()
        this.state = {
            selectedCourseID: -1,
            selectedCourseName: '*name of course*',
            windowWidth: 0
        }
        this.selectCourse = this.selectCourse.bind(this)
    }

    selectCourse(courseValues) {
        this.setState({
            selectedCourseID: courseValues[0],
            selectedCourseName: courseValues[1]
        })
    }
    render() {
        let studentData = this.props.student;
        (console.log('this has info', studentData))
        let getAssignment = (arg, arr) => {
            for (const props in arg) {
                if (typeof arg[props] === 'object') {
                    getAssignment(arg[props], arr)
                }
                if (props === 'assignment_name') {
                    arr.push(arg[props])
                }
            } return arr
        }
        let getGrade = (arg, arr) => {
            for (const props in arg) {
                if (typeof arg[props] === 'object') {
                    getGrade(arg[props], arr)
                }
                if (props === 'points_earned') {
                    arr.push(arg[props])
                }
            } return arr
        }
        let getCourseName = (arg, arr) => {
            for (const props in arg) {
                if (typeof arg[props] === 'object') {
                    getCourseName(arg[props], arr)
                }
                if (props === 'course_name') {
                    arr.push(arg[props])
                }

            } return arr;
        }
            var studentCourses = studentData.getCourses ?             
            studentData.getCourses.map(value => {
                    return { courseID: value.course_id, courseName: value.course_name }
            }) 
            :[]

            let courseButtons = _.uniq(studentCourses).map((element, index) => {
                return <button className="course_btn" key={index} value={element.courseID} onClick={(e) => { this.selectCourse([element.courseID, element.courseName]) }} >{element.courseName}</button>
            })

            let courseAssignments = () => {
                for(let val1 in studentData){
                    
                }

            }
        
        let chartData = {
            labels: getAssignment(studentData, [])
            , datasets: [{
                label: 'Student Score'
                , data: getGrade(studentData, [])
                // , backgroundColor: 'lightBlue'
            }, {
                label: 'Average Score'
                , data: [75, 66, 100, 76, 45]
                , backgroundColor: 'orange'
            }]

        }
        //console.log(getAssignment(studentData,[]))
        // console.log(studentData)

        return (
            <div className="test_chart_wrapper">
                {this.props.student ? <Bar className="test_chart"
                    data={chartData}
                    options={{
                        title: {
                            display: true
                            , text: `Assignment Scores for ${this.state.selectedCourseName}`
                            , fontSize: 30
                        },
                        legend: {
                            display: true
                            , position: 'top'
                        }
                    }} /> : <LoadData />}
                {this.props.student ? <div className="coursesButtonsWrapper">{courseButtons}</div> : null}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
        , student: state.student
    }
}
export default connect(mapStateToProps, { getUser, getStudent })(Chart);