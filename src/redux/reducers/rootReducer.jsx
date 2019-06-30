import { combineReducers } from 'redux'
import auth from './authReducer'
import alertMessages from './alertMessageReducer'
import tickets from './ticketsReducer'

export default combineReducers({
    auth,
    alertMessages,
    tickets
})
