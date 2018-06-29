import {combineReducers} from 'redux'
import {addStaff, assign} from './staff'
import addUser from './user'
import step from './step'

export default combineReducers({
  addStaff,
  assign,
  addUser,
  step
})