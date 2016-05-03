import * as ActionTypes from '../actions/action-types';
import { routerReducer as routing } from 'react-router-redux';//need to be as routing because react-router-redux api
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  routing
})

export default rootReducer
