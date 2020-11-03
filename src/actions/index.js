import axios from 'axios'
import { AUTH_USER, AUTH_ERROR } from './types'

/*
* Because reduxThunk is applied as middleware
* redux action creators are allowed to return a function
* redux thunk as an alternative approach to async action creators as of Redux-Promise
* - allows use of multiple dispatch functions
* - allows use of dispatch within Promises
* signature = a nested function. It is a function that returns a function
*/
export const signup = (formProps, callback) => async dispatch => {
    // object here is es2015 (es6) syntax
    try {
        const response = await axios.post('http://localhost:3090/signup', formProps)
        dispatch({ type: AUTH_USER, payload:response.data.token })
        localStorage.setItem('token', response.data.token)
        callback()
    } catch (e) {
        dispatch( { type: AUTH_ERROR, payload:'Email in use'})
    }
}

export const signin = (formProps, callback) => async dispatch => {
    // object here is es2015 (es6) syntax
    try {
        const response = await axios.post('http://localhost:3090/signin', formProps)
        dispatch({ type: AUTH_USER, payload:response.data.token })
        localStorage.setItem('token', response.data.token)
        callback()
    } catch (e) {
        dispatch( { type: AUTH_ERROR, payload:'No account with this email or password'})
    }
}

export const signout = () => {

    localStorage.removeItem('token')

    return {
        type: AUTH_USER,
        payload: ''
    }
}