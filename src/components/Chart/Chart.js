import React, { Component } from 'react';
import chart from 'chart.js'
import {Line} from 'react-chartjs-2';


class Chart extends Component {
    constructor(){
        super()
        this.state = {
            testData:{
                labels: ['testlbl1', 'testlbl2', 'testlbl3'],
                datasets:[
                    {
                        label:'score',
                        data:[89,64,89]
                    }
                ]
            }
        }
    }

    render() {
        return(
        <div>
            <div>
                <Line 
                    data={this.state.testData}
                />
            </div>
        </div>
        )
    }
}
export default Chart;