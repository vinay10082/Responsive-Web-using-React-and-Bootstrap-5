import { combineReducers } from "redux";
import authReducer from './auth'
import currentUserReducer from './currentUser'
import postsReducer from './posts'

export default combineReducers({ authReducer, currentUserReducer, postsReducer })