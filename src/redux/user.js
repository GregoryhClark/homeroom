// ========== IMPORTS =============
import axios from 'axios';
// ======= INITIAL STATE ==========
const initialState = {
        user:{}            // CONTAINS CURRENT USERS INFORMATION
      , navigation: false  // CONTROLS IF NAVIGATION IS DISPLAYED
      , admin:[]           // CONTAINS ALL CURRENT ADMIN INFO

}
// ======= ACTION TYPES ===========
const GET_USER = "GET_USER";
const _FULFILLED = "_FULFILLED";
const NAVIGATION = "NAVIGATION";
const GET_ADMIN = "GET_ADMIN";

// ======= ACTION CREATORS ========
// ========== GET USER ===========
export function getUser(){
    let user = axios.get('/auth/me').then(res => {
        return res.data
    })
    return{
          type: GET_USER
        , payload: user
    }
}
// ========== GET ADMIN ===========
export function getAdmin(){
    let getTeachers = axios.get('/getAdminTeacher');
    let getStudents = axios.get('/getAdminStudent');
    let getParents = axios.get('/getAdminParent');
    let getCourses = axios.get('/getAdminCourse');
    let admin = Promise.all([getTeachers, getStudents, getParents, getCourses]).then(res=>{
        return res
    }).catch(err=>console.log(err))
    return{
          type: GET_ADMIN
        , payload: admin
    }
}
// ========== SHOW NAV ===========
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
        case NAVIGATION:
            return Object.assign({}, state, {navigation:action.payload})
        case GET_ADMIN + _FULFILLED:
            return Object.assign({}, state, {admin:action.payload})
        default: 
            return state;
    }
}