import { combineReducers } from 'redux'
// the reducer for redux-form and rename for code more clear code
import { reducer as formReducer } from 'redux-form'
import auth from './auth'

// auth here is es2015 (es6) syntax
export default combineReducers({
  auth,
  form: formReducer  
})