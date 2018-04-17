// ========== IMPORTS =============
import axios from 'axios';
// ======= INITIAL STATE ==========
const initialState = {
        user:{}            // CONTAINS CURRENT USERS INFORMATION
      , navigation: false  // CONTROLS IF NAVIGATION IS DISPLAYED
      , admin:{
          teachers: []
        , students: []
        , parents: []
        , courses: []
      }           // CONTAINS ALL CURRENT ADMIN INFO
      , student:{
          getCourses: []
        , getAssignments: []
        , getAttachments: []}         // CONTAINS ALL CURRENT STUDENT INFO
      , parent:[]         // CONTAINS ALL CURRENT PARENTS CHILDREN

}
// ======= ACTION TYPES ===========
const GET_USER = "GET_USER";
const _FULFILLED = "_FULFILLED";
const NAVIGATION = "NAVIGATION";
const GET_PARENT = "GET_PARENT";
const GET_STUDENT = "GET_STUDENT";
// ===== FOR ADMIN =====
const GET_ADMIN = "GET_ADMIN";
const GET_TEACHRERS_FOR_ADMIN = "GET_TEACHRERS_FOR_ADMIN";
const GET_STUDENTS_FOR_ADMIN = "GET_STUDENTS_FOR_ADMIN";
const GET_PARENTS_FOR_ADMIN = "GET_PARENTS_FOR_ADMIN";
const GET_COURSES_FOR_ADMIN = "GET_COURSES_FOR_ADMIN";

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
        return {
              teachers: res[0].data
            , students: res[1].data
            , parents: res[2].data
            , courses: res[3].data
        }
    }).catch(err=>console.log(err))
    return{
          type: GET_ADMIN
        , payload: admin
    }
}
// ========== UPDATE ADMIN ===========
export function teachersForAdmin() {
    const teachers = axios.get('/getAdminTeacher').then(res => {
        return res.data
    })
    return {
          type: GET_TEACHRERS_FOR_ADMIN
        , payload: teachers
    }
}

export function studentsForAdmin() {
    const students = axios.get('/getAdminStudent').then(res => {
        return res.data
    })
    return {
          type: GET_STUDENTS_FOR_ADMIN
        , payload: students
    }
}

export function parentsForAdmin() {
    const parents = axios.get('/getAdminParent').then(res => {
        return res.data
    })
    return {
          type: GET_PARENTS_FOR_ADMIN
        , payload: parents
    }
}

export function coursesForAdmin() {
    const courses = axios.get('/getAdminCourse').then(res => {
        return res.data
    })
    return {
          type: GET_COURSES_FOR_ADMIN
        , payload: courses
    }
}
// ========== GET STUDENT ========
export function getStudent(){
    let getStudentCourses = axios.get('/getStudentCourses');
    let getAssignments = axios.get('/getStudentAssignments');
    let getAttachments = axios.get('/getStudentAttachments');
    let student = Promise.all([getStudentCourses, getAssignments, getAttachments]).then(res=>{
        return {
              getCourses: res[0].data
            , getAssignments: res[1].data
            , getAttachments: res[2].data
        }
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
        case GET_TEACHRERS_FOR_ADMIN + _FULFILLED:
            return {...state, admin: {...state.admin, teachers: action.payload}}  
        case GET_STUDENTS_FOR_ADMIN + _FULFILLED:
            return {...state, admin: {...state.admin, students: action.payload}}
        case GET_PARENTS_FOR_ADMIN + _FULFILLED:
            return {...state, admin: {...state.admin, parents: action.payload}}
        case GET_COURSES_FOR_ADMIN + _FULFILLED:
            return {...state, admin: {...state.admin, courses: action.payload}}
        default: 
            return state;
    }
}