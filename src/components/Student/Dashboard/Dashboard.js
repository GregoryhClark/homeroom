import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getStudent} from '../../../redux/user';

class Dashboard extends Component {
    render(){
        let studentData = this.props.student;
        let getCourse = (arg, arr)=>{
            for(const props in arg){
                if(typeof arg[props] === 'object'){
                    getCourse(arg[props],arr)
                } 
                if(props === 'course'){
                    arr.push(arg[props]) 
                } 
            }return arr;
        }
        let studentCourses = getCourse(studentData,[])
        return (
            studentCourses.map((course,i)=>{
                return <div key={i} style={styleCard}>
                            {course}
                       </div>
            })
        )
    }
}

function mapStateToProps(state){
    return{
        student:state.student
    }
}
export default connect(mapStateToProps, {getStudent})(Dashboard);

const styleCard = {
      margin:'25px'
    , width:'250px'
    , height:'300px'
    , backgroundColor:'#EEE'
    , borderRadius:'15px'
    , boxShadow:'2px 2px 10px 0 #CCC'
}