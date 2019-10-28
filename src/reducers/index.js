import {combineReducers} from 'redux'
import messages from './message'
import auth from './auth'

export default combineReducers({
  messages,
  auth
})