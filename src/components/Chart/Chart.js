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
            selectedCourseName: '*name of course*',
            windowWidth:0

        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.selectCourse = this.selectCourse.bind(this)
    }

    async componentWillMount() {
        await this.props.getUser();
        await this.props.getGrades().then((res)=>{
            this.setState({
                selectedCourse:res.value[0].course_id,
                selectedCourseName:res.value[0].course,
                windowWidth: window.innerWidth
            })
           
        });

    }
    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions(){
        this.setState({ windowWidth: window.innerWidth});
    }
    selectCourse(array) {

        this.setState({
            selectedCourseID: +(array[0]),
            selectedCourseName: array[1]
        })
        
    }

    render() {

        let chartTitleFont = (this.state.windowWidth > 1024) ? 30
        : (this.state.windowWidth > 375) ? 20
        : 10;
        
     
        let studentScores = this.props.grades.map(obj => {

            if (obj.course_id === this.state.selectedCourseID){
                return obj.points_earned
            } else return null
        }).filter(value => value)

        let averageScores = this.props.grades.map(obj => {

            if (obj.course_id === this.state.selectedCourseID){
                return obj.points_earned
            }else return null
        }).filter(value => value)



        var filteredArray = _.uniq(this.props.grades, "course_id")
        
        var courseButtons = filteredArray.map((element, index) => {

            return <button className="course_btn" key = {index} value = {element.course_id}onClick={(e) =>{this.selectCourse([element.course_id, element.course])}}>{element.course}</button>
            
        })
        




        let assignmentList = this.props.grades.map(obj => {
            if (obj.course_id === this.state.selectedCourseID){
                return obj.name
            }else return null
        }).filter(value => value)

        



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

        return (
            <div>
                {/* <h1>{`Chart ${this.props.grades}`}</h1>  */}
                {this.props.grades.length > 0 ?
                    <div className = "main_wrapper">
                        <div className="test_chart_wrapper">
                            <Bar className="test_chart"
                                data={chartData}
                                options={{
                                    title: {
                                        display: true,
                                        text: `Assignment Scores for ${this.state.selectedCourseName}`, //this will need to be the selected class name
                                        fontSize: chartTitleFont
                                    },
                                    legend: {
                                        display: true,
                                        position: 'top'
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
