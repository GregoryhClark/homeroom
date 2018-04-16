// import React, { Component } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { connect } from 'react-redux';
// import { getUser, getGrades } from '../../redux/user';
// import _ from 'underscore'

// //CSS, ASSETS
// import './Chart.css'

// class Chart extends Component {
//     constructor() {
//         super()
//         this.state = {
//               selectedCourseID: ''
//             , selectedCourseName: ''
//         }
//         this.selectCourse = this.selectCourse.bind(this)
//     }

//     componentDidMount() {
//          this.props.getGrades().then((res)=>{
//             this.setState({
//                 selectedCourse:res.value[0].course_id,
//                 selectedCourseName:res.value[0].course
//             })
//         });
//     }
//     selectCourse(array) {
//         this.setState({
//             selectedCourseID: +(array[0]),
//             selectedCourseName: array[1]
//         })  
//     }
//     render() {
        
//         var filteredArray = _.uniq(this.props.grades, "course_id")   
//         var courseButtons = filteredArray.map((element, index) => {
//             return <button className="course_btn" key = {index} value = {element.course_id}onClick={(e) =>{this.selectCourse([element.course_id, element.course])}}>{element.course}</button>           
//         })
        
//         let studentScores = this.props.grades.map(obj => {
//             if (obj.course_id === this.state.selectedCourseID){
//                 return obj.points_earned
//             }
//             return obj.points_earned
//         }).filter(value => value)
//         let assignmentList = this.props.grades.map(obj => {
//             if (obj.course_id === this.state.selectedCourseID){
//                 return obj.name
//             }
//             return obj.name
//         }).filter(value => value)

//         let chartData = {
//             labels: assignmentList,
//             datasets: [
//                 {
//                     label: 'Student Score',
//                     data: studentScores
//                 },
//                 {
//                     label: 'Average Score',
//                     data: [75, 66, 80],
//                     backgroundColor: '#ff6384'
//                 }
//             ]
//         }
//         return (
//             <div>
//                 {/* <h1>{`Chart ${this.props.grades}`}</h1>  */}
//                 {this.props.grades.length > 0 ?
//                     <div>
//                         <div className="test_chart_wrapper">
//                             <Bar className="test_chart"
//                                 data={chartData}
//                                 options={{
//                                     title: {
//                                         display: true,
//                                         text: `Assignment Scores for ${this.state.selectedCourseName}`, //this will need to be the selected class name
//                                         fontSize: 30
//                                     },
//                                     legend: {
//                                         display: true,
//                                         position: 'right'
//                                     }
//                                 }}/>
//                         </div>
//                         <div className="coursesButtonsWrapper">
//                             {this.props.grades.length > 0? courseButtons :null}
//                         </div>
//                     </div>

//                     : null}
//             </div>
//         )
//     }
// }

// function mapStateToProps(state) {
   
//     return {
//           user: state.user
//         , grades: state.grades
//     }
// }
// export default connect(mapStateToProps, { getUser, getGrades })(Chart);
