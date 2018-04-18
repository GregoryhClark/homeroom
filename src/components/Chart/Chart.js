import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import {getUser, getStudent} from '../../redux/user';
import LoadData from '../../components/LoadData/LoadData'

//CSS, ASSETS
import './Chart.css'

class Chart extends Component {
    constructor(){
        super()
        this.state = {
            selectedCourse:''
        }
        this.selectCourse = this.selectCourse.bind(this)
    }
    selectCourse(course){
        this.setState({
            selectedCourse:course
        })
    }
    render() {   
        let studentData = this.props.student;
        let getAssignment = (arg, arr)=>{
            for(const props in arg){
                if(typeof arg[props] === 'object'){
                    getAssignment(arg[props],arr)}
                if(props === 'assignment_name'){
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
                if(props === 'course_name'){
                    arr.push(arg[props])}
            } return arr;
        }
        let courseButtons = getCourse(studentData,[]).map((course, i)=>{
            return <button className="course_btn" key = {i} value={course} onClick={()=>this.selectCourse(course)}>{course}</button>
        }) 
        let chartData = {
              labels: getAssignment(studentData,[])
            , datasets: [{
                              label: 'Student Score'
                            , data: getGrade(studentData,[])
                            , backgroundColor: 'orange'
                        },{
                              label: 'Average Score'
                            , data: [75, 66, 100, 76, 45]
                        }]
        }
        // console.log(studentData)
    return (     
        <div className="test_chart_wrapper">   
            {getGrade(studentData,[]).length ? <Bar className="test_chart"
                data={chartData}
                options={{
                    title: {
                          display: true
                        , text: `Assignment Scores for ${this.state.selectedCourse === '' ? this.props.user.first_name : this.state.selectedCourse}`
                        , fontSize: 30
                    },
                    legend: {
                          display: true
                        , position: 'top'
                    }
                }}/>: <LoadData/>}
            {getGrade(studentData,[]).length ? <div className="coursesButtonsWrapper">{courseButtons}</div>: null}   
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