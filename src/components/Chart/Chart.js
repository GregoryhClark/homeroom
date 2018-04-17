import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import {getUser, getStudent} from '../../redux/user';
import LoadData from '../../components/LoadData/LoadData'

//CSS, ASSETS
import './Chart.css'

class Chart extends Component {

    constructor() {
        super()
        this.state = {
            selectedCourseID: 3,
            selectedCourseName: '*name of course*',
            windowWidth:0
        }
        this.selectCourse = this.selectCourse.bind(this)
    }

    selectCourse(courseName){
        this.setState({
            selectedCourseName: courseName
        })
    }

    render() {   
        let studentData = this.props.student;
        let getAssignment = (arg, arr)=>{
            for(const props in arg){
                if(typeof arg[props] === 'object'){
                    getAssignment(arg[props],arr)}
                if(props === 'name'){
                    arr.push(arg[props])}
            } return arr
        }
        let getGrade = (arg, arr)=>{
            for(const props in arg){
                if(typeof arg[props] === 'object'){
                    getGrade(arg[props],arr)}
                if(props === 'points_earned'){
                    arr.push(arg[props])}
            } return arr
        }
        let getCourse = (arg, arr)=>{
            for(const props in arg){
                if(typeof arg[props] === 'object'){
                    getCourse(arg[props],arr)}
                if(props === 'course'){
                    arr.push(arg[props])}
            } return arr;
        }
        let courseButtons = getCourse(studentData,[]).map((course, i)=>{
            return <button className="course_btn" onClick={(e) =>{this.selectCourse(course)}} key = {i} value={course}>{course}</button>
        }) 
        let chartData = {
              labels: getAssignment(studentData,[])
            , datasets: [{
                              label: 'Student Score'
                            , data: getGrade(studentData,[])
                            // , backgroundColor: 'lightBlue'
                        },{
                              label: 'Average Score'
                            , data: [75, 66, 100, 76, 45]
                            , backgroundColor: 'orange'
                        }]
        }
        //console.log(getAssignment(studentData,[]))
        console.log(getStudent())
    return (
        <div className="test_chart_wrapper">   
            {this.props.student ? <Bar className="test_chart"
                data={chartData}
                options={{
                    title: {
                          display: true
                        , text: `Assignment Scores for ${this.props.user.first_name} ${this.props.user.last_name}`
                        , fontSize: 30
                    },
                    legend: {
                          display: true
                        , position: 'top'
                    }
                }}/>: <LoadData/>}
            {this.props.student ? <div className="coursesButtonsWrapper">{courseButtons}</div>: null}   
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