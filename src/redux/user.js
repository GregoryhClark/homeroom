// ========== IMPORTS =============
import axios from 'axios';
// ======= INITIAL STATE ==========
const initialState = {
      user:{}
}
// ======= ACTION TYPES ===========
const GET_USER = "GET_USER";
const _FULFILLED = "_FULFILLED";

// ======= ACTION CREATORS ========
export function getUser(){
    let userData = axios.get('/auth/me').then(res => {
        console.log("GET USER-REDUX", res.data)
        return res.data
    })
    return{
          type: GET_USER
        , payload: userData
    }
}
// =========== REDUCER ===========
export default function reducer(state = initialState, action){
    switch (action.type) {
        case GET_USER + _FULFILLED:
            return Object.assign({}, state, {user:action.payload})
        default: 
            return state;
    }
}