import { combineReducers } from 'redux'
import stepReducer from './stepReducer'
import userReducer from './userReducer'

// COMBINED REDUCERS
const reducers = {
  user: userReducer,
  step: stepReducer,
}

export default combineReducers(reducers)
