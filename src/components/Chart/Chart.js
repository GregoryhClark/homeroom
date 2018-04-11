import React, { Component } from 'react';
import chart from 'chart.js'
import {Line} from 'react-chartjs-2';

//CSS, ASSETS
import './Chart.css'


class Chart extends Component {
    constructor(){
        super()
        this.state = {
            testData:{
                labels: ['Assignment 1', 'Assignment 2', 'Assignment 3'],//This will need to be an array of a students assignment names from a specific class
                datasets:[
                    {
                        label:'Score',
                        data:[89,64,89]//this will need to be an array of assignment scores of a student's specific class
                    }
                ]
            },
            selectedClass:'Algebra 2'
        }
    }

    render() {
        return(
        <div>
            <div className = "test_chart_wrapper">
                <Line className = "test_chart"
                    data={this.state.testData}
                    options= {{
                        title:{
                            display:true,
                            text:`Assignment Scores for ${this.state.selectedClass}`, //this will need to be the selected class name
                            fontSize:30
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />

            </div>

            


        </div>
        )
    }
}
export default Chart;