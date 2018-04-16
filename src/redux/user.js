// ========== IMPORTS =============
import axios from 'axios';
// ======= INITIAL STATE ==========
const initialState = {
        user:{}            // CONTAINS CURRENT USERS INFORMATION
      , grades:[]          // CONTAINS ALL ASSIGNMENTS AND GRADES FOR SPECIFIED STUDENT/USER
      , navigation: false  // CONTROLS IF NAVIGATION IS DISPLAYED
      , userData:[]
      , teacherData:[]
      , parentsData:[]
}
// ======= ACTION TYPES ===========
const GET_USER = "GET_USER";
const _FULFILLED = "_FULFILLED";
const GET_GRADES = "GET_GRADES";
const NAVIGATION = "NAVIGATION";
const GET_TEACHERS = "GET_TEACHERS";
const GET_PARENTS = "GET_PARENTS";
// ======= ACTION CREATORS ========
export function getUser(){
    let userData = axios.get('/auth/me').then(res => {
        // console.log("GET USER-REDUX", res.data)
        return res.data
    })
    return{
          type: GET_USER
        , payload: userData
    }
}
export function getTeachers(){
    let teacherData = axios.get('/getTeachersProfiles').then(res=>{
        return res.data
        // console.log("GET TEACHER-REDUX", res.data)
    })
    return {
          type:GET_TEACHERS
        , payload: teacherData
    }
}
export function getParents(){
    let parentsData = axios.get('/getParentsProfiles').then(res=>{
        return res.data
        // console.log("GET PARENTS-REDUX", res.data)
    })
    return {
          type:GET_PARENTS
        , payload: parentsData
    }
}


export function getGrades(){
    let gradesData = axios.get('/getStudentGrades').then(res=>{
        // console.log("GET STUDENT GRADES- REDUX", res.data)
        return res.data
    })
    return{
          type:GET_GRADES
        , payload: gradesData
    }
}

export function showNavigation(){
    return {
          type: NAVIGATION
        , payload: true
    }
}

// =========== REDUCER ===========
export default function reducer(state = initialState, action){
    switch (action.type) {
        case GET_USER + _FULFILLED:
            return Object.assign({}, state, {user:action.payload})
        case GET_GRADES + _FULFILLED:
            return Object.assign({}, state, {grades:action.payload})
        case NAVIGATION:
            return Object.assign({}, state, {navigation:action.payload})
        case GET_TEACHERS + _FULFILLED:
            return Object.assign({}, state,{teacherData:action.payload})
        case GET_PARENTS + _FULFILLED:
            return Object.assign({}, state,{parentsData:action.payload})
        default: 
            return state;
    }
}