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
            selectedCourse: '',
            windowWidth: 0
        }
        this.selectCourse = this.selectCourse.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        
    }
    updateWindowDimensions(){
        window.addEventListener('resize', this.updateWindowDimensions);
        this.setState({ windowWidth: window.innerWidth});
    }

    selectCourse(courseValues) {
        this.setState({
            selectedCourseID: courseValues[0],
            selectedCourse: courseValues[1]
        })
    }
    render() {
        let chartTitleFont = (this.state.windowWidth > 1024) ? 30
        : (this.state.windowWidth > 375) ? 20
        : 10;
        let studentData = this.props.student;

            let studentAssignmentScores = studentData.getAssignments ? studentData.getAssignments.map(obj => {

                if (obj.student_assignments_course_id === this.state.selectedCourseID){
                    return (obj.points_earned / obj.possible_points)*100
                } else return null
            }).filter(value => value)
            :[]

            let assignmentIDs = studentData.getAssignments ? studentData.getAssignments.map(obj => {

                if (obj.student_assignments_course_id === this.state.selectedCourseID){
                    return obj.student_assignment_id
                } else return null
            }).filter(value => value)
            :[]

            let assignmentNames = studentData.getAssignments ? (assignmentArray)=> studentData.getAssignments.map(obj => {

                if (assignmentArray.indexOf(obj.student_assignment_id) > -1 ){
                    return obj.assignment_name
                } else return null
            }).filter(value => value)
            :(placeholder)=>{
                return []
            }

            var studentCourses = studentData.getCourses ?             
            studentData.getCourses.map(value => {
                    return { courseID: value.course_id, courseName: value.course_name }
            }) 
            :[]
            let courseButtons = _.uniq(studentCourses).map((element, index) => {
                return <button className="course_btn" key={index} value={element.courseID} onClick={(e) => { this.selectCourse([element.courseID, element.courseName]) }} >{element.courseName}</button>
            })

            let averageScores =  (assignmentArray)=> studentData.classAverage.map(obj => {

                if (assignmentArray.indexOf(obj.student_assignment_id) > -1){//This might need to change to classmate_assignment_id or something depending on how the data is updated.
                    return (obj.classmates_points_earned / obj.possible_points)*100
                } else return null
            }).filter(value => value)
        
        let chartData = {
            labels: assignmentNames(assignmentIDs)
            , datasets: [{
                label: 'Student Score'
                , data: studentAssignmentScores
                , backgroundColor: 'orange'
            }, {
                label: 'Average Score'
                , data: averageScores(assignmentIDs)
            }]
        }
        return (     
            <div className="test_chart_wrapper">   
                {studentData.getCourses ? <Bar className="test_chart"
                    data={chartData}
                    options={{
                        //onElementsClick: (elems) => {console.log(elems)},
                        title: {
                              display: true
                            , text: `${this.state.selectedCourse === '' ? "Please select a course" : `Assignment Scores for ${this.state.selectedCourse}`}`
                            , fontSize: chartTitleFont
                        },
                        legend: {
                              display: true
                            , position: 'top'
                        }
                    }}/>: <LoadData/>}
                {studentData.getCourses ? <div className="coursesButtonsWrapper">{courseButtons}</div>: null}      
            </div>
            )
        }
    }
    function mapStateToProps(state) {
        return {
            user:state.user
          , student:state.student 
        }
    }
    export default connect(mapStateToProps, {getUser,getStudent})(Chart);
