import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import {getUser, getStudent} from '../../redux/user';
import LoadData from '../../components/LoadData/LoadData'
// import _ from 'underscore'

//CSS, ASSETS
import './Chart.css'

class Chart extends Component {
    render() {
        let studentData = this.props.student;
        let getAssignment = (arg, arr)=>{for(const props in arg){typeof arg[props] === 'object' ? getAssignment(arg[props],arr) : props === 'name' ? arr.push(arg[props]) : arr;} return arr;}
        let getGrade = (arg, arr)=>{for(const props in arg){typeof arg[props] === 'object' ? getGrade(arg[props],arr) : props === 'points_earned' ? arr.push(arg[props]) : arr;} return arr;}
        let getCourse = (arg, arr)=>{for(const props in arg){typeof arg[props] === 'object' ? getCourse(arg[props],arr) : props === 'course' ? arr.push(arg[props]) : arr;} return arr;}
        let chartData = {
            labels: getAssignment(studentData,[]),
            datasets: [
                {
                      label: 'Student Score'
                    , data: getGrade(studentData,[])
                    // , backgroundColor: 'lightBlue'
                },
                {
                      label: 'Average Score'
                    , data: [75, 66, 80, 76, 45]
                    , backgroundColor: 'orange'
                }
            ]
        }
    return (
        <div className="test_chart_wrapper">   
            {this.props.student.length ? <Bar className="test_chart"
                data={chartData}
                options={{
                    title: {
                          display: true
                        , text: `Assignment Scores for ${this.props.user.first_name} ${this.props.user.last_name}`
                        , fontSize: 30
                    },
                    legend: {
                          display: true
                        , position: 'right'
                    }
                }}/>: <LoadData/>}
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