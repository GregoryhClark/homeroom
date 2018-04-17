// ========== IMPORTS =============
import axios from 'axios';
// ======= INITIAL STATE ==========
const initialState = {
    // CONTAINS CURRENT USERS INFORMATION
        user:{}            
    // CONTROLS IF NAVIGATION IS DISPLAYED    
      , navigation: false  
    // CONTAINS ALL CURRENT ADMIN INFO
      , admin:{
          teachers: []
        , students: []
        , parents: []
        , courses: []} 
    // CONTAINS ALL CURRENT STUDENT INFO          
      , student:{
          courses: []
        , assignments: []
        , attachments: []} 
      // CONTAINS ALL CURRENT PARENTS CHILDREN        
      , parent:{
          parent:[]}
      , teacher:{
          students:[]
        , courses:[]
      }       

}
// ======= ACTION TYPES ===========
const _FULFILLED = "_FULFILLED";
const NAVIGATION = "NAVIGATION";
// ****** FOR USERS ******
const GET_USER = "GET_USER";
// ****** FOR ADMIN ******
const GET_ADMIN = "GET_ADMIN";
// ===== UPDATE FOR ADMIN =====
const GET_TEACHRERS_FOR_ADMIN = "GET_TEACHRERS_FOR_ADMIN";
const GET_STUDENTS_FOR_ADMIN = "GET_STUDENTS_FOR_ADMIN";
const GET_PARENTS_FOR_ADMIN = "GET_PARENTS_FOR_ADMIN";
const GET_COURSES_FOR_ADMIN = "GET_COURSES_FOR_ADMIN";
// ****** FOR STUDENT ******
const GET_STUDENT = "GET_STUDENT";
// ****** FOR PARENT ******
const GET_PARENT = "GET_PARENT";
// ****** FOR TEACHER ******
const GET_TEACHER = "GET_TEACHER";
// ======= ACTION CREATORS ========

// ************************** GET USER **************************
export function getUser(){
    let user = axios.get('/auth/me').then(res => {
        return res.data
    })
    return{
          type: GET_USER
        , payload: user
    }
}
// ************************** GET ADMIN **************************
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
// ========== UPDATE STUDENT ADMIN ===========
export function studentsForAdmin() {
    const students = axios.get('/getAdminStudent').then(res => {
        return res.data
    })
    return {
          type: GET_STUDENTS_FOR_ADMIN
        , payload: students
    }
}
// ========== UPDATE PARENTS ADMIN ===========
export function parentsForAdmin() {
    const parents = axios.get('/getAdminParent').then(res => {
        return res.data
    })
    return {
          type: GET_PARENTS_FOR_ADMIN
        , payload: parents
    }
}
// ========== UPDATE COURSE ADMIN ===========
export function coursesForAdmin() {
    const courses = axios.get('/getAdminCourse').then(res => {
        return res.data
    })
    return {
          type: GET_COURSES_FOR_ADMIN
        , payload: courses
    }
}
// ************************** GET STUDENT **************************
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
// ************************** GET PARENT **************************
export function getParent(){
    let getParentsKids = axios.get('/getParentsKids');
    let parent = Promise.all([getParentsKids]).then(res=>{
        return {
            getParent:res[0].data
        }
    }).catch(err=>console.log(err))
    return{
          type: GET_STUDENT
        , payload: parent
    }
}
// ************************** GET Teacher **************************
export function getTeacher(){
    let getTeachers = axios.get('/getStudentTeacher');
    let getCourses = axios.get('/getCoursesTeacher');
    let teacher = Promise.all([getTeachers, getCourses]).then(res=>{
        return {
              getStudent:res[0].data
            , getCourses:res[1].data
        }
    }).catch(err=>console.log(err))
    return{
          type: GET_TEACHER
        , payload: teacher
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
// ****** FOR USERS ******
        case GET_USER + _FULFILLED:
            return Object.assign({}, state, {user:action.payload})
        case NAVIGATION:
            return Object.assign({}, state, {navigation:action.payload})
// ****** FOR ADMIN ******
        case GET_ADMIN + _FULFILLED:
                return Object.assign({}, state, {admin:action.payload})
        case GET_TEACHRERS_FOR_ADMIN + _FULFILLED:
            return {...state, admin: {...state.admin, teachers: action.payload}}  
        case GET_STUDENTS_FOR_ADMIN + _FULFILLED:
            return {...state, admin: {...state.admin, students: action.payload}}
        case GET_PARENTS_FOR_ADMIN + _FULFILLED:
            return {...state, admin: {...state.admin, parents: action.payload}}
        case GET_COURSES_FOR_ADMIN + _FULFILLED:
            return {...state, admin: {...state.admin, courses: action.payload}}
// ****** FOR STUDENT ******
        case GET_STUDENT + _FULFILLED:
            return Object.assign({}, state, {student:action.payload})
// ****** FOR PARENT ******
        case GET_PARENT + _FULFILLED:
            return Object.assign({}, state, {parent:action.payload})
        default: 
            return state;
    }
}
