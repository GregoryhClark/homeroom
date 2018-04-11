// ========== IMPORTS =============
import axios from 'axios';
// ======= INITIAL STATE ==========
const initialState = {
      user:{}
      , navigation: false  //CONTROLS IF NAVIGATION IS DISPLAYED
}
// ======= ACTION TYPES ===========
const GET_USER = "GET_USER";
const _FULFILLED = "_FULFILLED";
const NAVIGATION = "NAVIGATION";

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
        default: 
            return state;
    }
}