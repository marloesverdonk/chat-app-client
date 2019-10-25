import { ADD_MESSAGES } from '../actions'

const messages = (state = [], action = {}) => {
  switch(action.type){
    case ADD_MESSAGES:
      return action.payload
    default: 
      return state
  }
}

export default messages