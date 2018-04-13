import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { getUser, getGrades } from '../../redux/user';
import _ from 'underscore'

//CSS, ASSETS
import './Chart.css'

class Chart extends Component {
    constructor() {
        super()
        this.state = {
            selectedCourseID: 3,
            selectedCourseName: '*name of course*'

        }
        this.selectCourse = this.selectCourse.bind(this)
    }

    async componentWillMount() {
        await this.props.getUser();
        await this.props.getGrades().then((res)=>{
            this.setState({
                selectedCourse:res.value[0].course_id,
                selectedCourseName:res.value[0].course
            })
        });

    }
    selectCourse(array) {

        this.setState({
            selectedCourseID: +(array[0]),
            selectedCourseName: array[1]
        })
        
    }

    render() {

        
     
        let studentScores = this.props.grades.map(obj => {

            if (obj.course_id === this.state.selectedCourseID){
                return obj.points_earned
            }
        }).filter(value => value)

        let averageScores = this.props.grades.map(obj => {

            if (obj.course_id === this.state.selectedCourseID){
                return obj.points_earned
            }
        }).filter(value => value)



        var filteredArray = _.uniq(this.props.grades, "course_id")
        
        var courseButtons = filteredArray.map((element, index) => {

            return <button className="course_btn" key = {index} value = {element.course_id}onClick={(e) =>{this.selectCourse([element.course_id, element.course])}}>{element.course}</button>
            
        })
        




        let assignmentList = this.props.grades.map(obj => {
            if (obj.course_id === this.state.selectedCourseID){
                return obj.name
            }
        }).filter(value => value)




        let chartData = {
            //ex labels: this.props.selectedClass.completedAssignments,
            labels: assignmentList,//This will need to be an array of a students assignment names from a specific class
            datasets: [
                {
                    label: 'Student Score',
                    //ex. data:this.props.selectedClass.studentScores
                    data: studentScores//this will need to be an array of assignment scores of a student's specific class
                },
                {
                    label: 'Average Score',
                    //ex. data:this.props.selectedClass.avgStudentScores
                    data: averageScores,// array average score of each student assignment from that same assignment
                    backgroundColor: '#ff6384'
                }
            ]
        }
        return (
            <div>
                {/* <h1>{`Chart ${this.props.grades}`}</h1>  */}
                {this.props.grades.length > 0 ?
                    <div>
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
                            {this.props.grades.length > 0? courseButtons :null}
                        </div>
                    </div>

                    : null}
            </div>
        )
    }
}

function mapStateToProps(state) {
   
    return {
        user: state.user
        , grades: state.grades
    }
}
export default connect(mapStateToProps, { getUser, getGrades })(Chart);
