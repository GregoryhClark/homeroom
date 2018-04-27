// ========== IMPORTS =============
import axios from 'axios';
// ======= INITIAL STATE ==========
const initialState = {
    // CONTAINS CURRENT USERS INFORMATION
        user:{}            
    // CONTAINS ALL CURRENT ADMIN INFO
      , admin:{
          teachers:          []
        , students:          []
        , parents:           []
        , courses:           []
        , calendar:          []
        , getStudentsPerCourse: []} 
    // CONTAINS ALL CURRENT STUDENT INFO          
      , student:{
          courses:     []
        , assignments: []
        , attachments: []
        , classAverage:[]
        , calendar:    []
        , myTeacher:   []} 
    // CONTAINS ALL CURRENT PARENTS CHILDREN        
      , parent:{
          parent:      []
        , calendar:    []}
    // CONTAINS ALL CURRENT TEACHERS INFO   
      , teacher:{
          students:    []
        , courses:     []
        , calendar:    []}
      , currentCourseID:{}   
}
// ======= ACTION TYPES ===========
const _FULFILLED             = "_FULFILLED";
const CURRENT_COURSE         = "CURRENT_COURSE";
// ****** FOR USERS ******
// ==== GET USER ====
const GET_USER               = "GET_USER";
// ==== UPDATE USER ====
const UPDATE_USER            = "UPDATE_USER"
// ****** FOR ADMIN ******
const GET_ADMIN              = "GET_ADMIN";
// ===== UPDATE FOR ADMIN ========
const GET_TEACHERS_FOR_ADMIN = "GET_TEACHERS_FOR_ADMIN";
const GET_STUDENTS_FOR_ADMIN = "GET_STUDENTS_FOR_ADMIN";
const GET_PARENTS_FOR_ADMIN  = "GET_PARENTS_FOR_ADMIN";
const GET_COURSES_FOR_ADMIN  = "GET_COURSES_FOR_ADMIN";
const GET_STUDENTS_PER_COURSE  = "GET_STUDENTS_PER_COURSE";
// ****** FOR STUDENT ******
const GET_STUDENT            = "GET_STUDENT";
// ****** FOR PARENT ******
const GET_PARENT             = "GET_PARENT";
// ****** FOR TEACHER ******
const GET_TEACHER            = "GET_TEACHER";
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
export function updateUser(updates){
    let userUpdate = axios.put('/updateUser', updates).then(res=>{
        return res.data
    })
    return{
          type:UPDATE_USER
        , payload: userUpdate
    }
}
// ************************** GET ADMIN **************************
export function getAdmin(){
    let getTeachers          = axios.get('/getAdminTeacher');
    let getStudents          = axios.get('/getAdminStudent');
    let getParents           = axios.get('/getAdminParent');
    let getCourses           = axios.get('/getAdminCourse');
    let getUserCalendar      = axios.get('/getUserCalendar');
    let getStudentsPerCourse = axios.get('/getStudentsPerCourse');
    let admin = Promise.all([getTeachers, getStudents, getParents, getCourses, getUserCalendar, getStudentsPerCourse]).then(res=>{
        return {
              teachers:            res[0].data
            , students:            res[1].data
            , parents:             res[2].data
            , courses:             res[3].data
            , calendar:            res[4].data
            , getStudentsPerCourse:res[5].data
        }
    }).catch(err=>console.log(err))
    return{
          type: GET_ADMIN
        , payload: admin
    }
}
// ========== UPDATE ADMIN ===========
export function teachersForAdmin(teachers) {
    if (!teachers) teachers = axios.get('/getAdminTeacher').then(res => {
        return res.data
    })
    return {
          type: GET_TEACHERS_FOR_ADMIN
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
    let getAssignments    = axios.get('/getStudentAssignments');
    let getAttachments    = axios.get('/getStudentAttachments');
    let classAverage      = axios.get('/getStudentAverage');
    let getUserCalendar   = axios.get('/getUserCalendar');
    let studentTeacher    = axios.get('/getAdminTeacher');
    let student = Promise.all([getStudentCourses, getAssignments, getAttachments, classAverage, getUserCalendar, studentTeacher]).then(res=>{
        return {
              getCourses:     res[0].data
            , getAssignments: res[1].data
            , getAttachments: res[2].data
            , classAverage:   res[3].data
            , calendar:       res[4].data
            , myTeacher:      res[5].data
        }
    }).catch(err=>console.log(err))
    return{
          type: GET_STUDENT
        , payload: student
    }
}
// ************************** GET PARENT **************************
export function getParent(){
    let getParentsKids  = axios.get('/getParentsKids');
    let getUserCalendar = axios.get('/getUserCalendar');
    let parent = Promise.all([getParentsKids, getUserCalendar]).then(res=>{
        return {
              getParent:res[0].data
            , calendar: res[1].data
        }
    }).catch(err=>console.log(err))
    return{
          type: GET_PARENT
        , payload: parent
    }
}
// ************************** GET TEACHER **************************
export function getTeacher(){
    let getTeachers     = axios.get('/getStudentTeacher');
    let getCourses      = axios.get('/getCoursesTeacher');
    let getUserCalendar = axios.get('/getUserCalendar');
    let teacher = Promise.all([getTeachers, getCourses, getUserCalendar]).then(res=>{
        return {
              getStudent:res[0].data
            , getCourses:res[1].data
            , calendar:  res[2].data
        }
    }).catch(err=>console.log(err))
    return{
          type: GET_TEACHER
        , payload: teacher
    }
}

// ========== SHOW NAV ===========
export function selectedCourse(course){
    return {
          type: CURRENT_COURSE
        , payload: course
    }
}

// =========== REDUCER ===========
export default function reducer(state = initialState, action){
    switch (action.type) {
// ****** FOR USERS ******
        case GET_USER + _FULFILLED:
            return Object.assign({}, state, {user:action.payload})
        case UPDATE_USER  + _FULFILLED:
            return Object.assign({}, state, {user:action.payload})
// ****** FOR ADMIN ******
        case GET_ADMIN + _FULFILLED:
            return Object.assign({}, state, {admin:action.payload})
        case GET_TEACHERS_FOR_ADMIN + _FULFILLED:
            return {...state, admin: {...state.admin, teachers: action.payload}}  
        case GET_STUDENTS_FOR_ADMIN + _FULFILLED:
            return {...state, admin: {...state.admin, students: action.payload}}
        case GET_PARENTS_FOR_ADMIN + _FULFILLED:
            return {...state, admin: {...state.admin, parents: action.payload}}
        case GET_COURSES_FOR_ADMIN + _FULFILLED:
            return {...state, admin: {...state.admin, courses: action.payload}}
        case GET_STUDENTS_PER_COURSE + _FULFILLED:
            return {...state, admin: {...state.admin, studentsPerCourse: action.payload}}
// ****** FOR STUDENT ******
        case GET_STUDENT + _FULFILLED:
            return Object.assign({}, state, {student:action.payload})
// ****** FOR TEACHER ******
        case GET_TEACHER + _FULFILLED:
            return Object.assign({}, state, {teacher:action.payload})
// ****** FOR PARENT ******
        case GET_PARENT + _FULFILLED:
            return Object.assign({}, state, {parent:action.payload})
        case CURRENT_COURSE:
            return Object.assign({}, state, {currentCourseID:action.payload})
        default: 
            return state;
    }
}
