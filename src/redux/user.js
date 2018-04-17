// ========== IMPORTS =============
import axios from 'axios';
// ======= INITIAL STATE ==========
const initialState = {
        user:{}            // CONTAINS CURRENT USERS INFORMATION
      , navigation: false  // CONTROLS IF NAVIGATION IS DISPLAYED
      , admin:[]           // CONTAINS ALL CURRENT ADMIN INFO
      , student:[]         // CONTAINS ALL CURRENT STUDENT INFO
      , parent:[]         // CONTAINS ALL CURRENT PARENTS CHILDREN

}
// ======= ACTION TYPES ===========
const GET_USER = "GET_USER";
const _FULFILLED = "_FULFILLED";
const NAVIGATION = "NAVIGATION";
const GET_ADMIN = "GET_ADMIN";
const GET_PARENT = "GET_PARENT";
const GET_STUDENT = "GET_STUDENT";

// ======= ACTION CREATORS ========
// ========== GET USER ===========
export function getUser(){
    let user = axios.get('/auth/me').then(res => {
        // console.log("GET USER", res.data)
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
// ========== GET STUDENT ========
export function getStudent(){
    let getStudentCourses = axios.get('/getStudentCourses');
    let getAssignments = axios.get('/getStudentAssignments');
    let getAttachments = axios.get('/getStudentAttachments');
    let student = Promise.all([getStudentCourses, getAssignments, getAttachments]).then(res=>{
        return res
    }).catch(err=>console.log(err))
    return{
          type: GET_STUDENT
        , payload: student
    }
}
export function getParent(){
    let getParentsKids = axios.get('/getParentsKids');
    let parent = Promise.all([getParentsKids]).then(res=>{
        return res
    }).catch(err=>console.log(err))
    return{
          type: GET_STUDENT
        , payload: parent
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
        case GET_STUDENT + _FULFILLED:
            return Object.assign({}, state, {student:action.payload})
        case GET_PARENT + _FULFILLED:
            return Object.assign({}, state, {parent:action.payload})
        default: 
            return state;
    }
}