import {combineReducers} from 'redux'
import {addStaff, assign} from './staff'
import addUser from './user'

export default combineReducers({
  addStaff,
  assign,
  addUser
})