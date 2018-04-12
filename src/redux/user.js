// ========== IMPORTS =============
import axios from 'axios';
// ======= INITIAL STATE ==========
const initialState = {
        user:{}
      , grades:{}
}
// ======= ACTION TYPES ===========
const GET_USER = "GET_USER";
const _FULFILLED = "_FULFILLED";
const GET_GRADES = "GET_GRADES";

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
// =========== REDUCER ===========
export default function reducer(state = initialState, action){
    switch (action.type) {
        case GET_USER + _FULFILLED:
            return Object.assign({}, state, {user:action.payload})
        case GET_GRADES + _FULFILLED:
            return Object.assign({}, state, {grades:action.payload})
        default: 
            return state;
    }
}