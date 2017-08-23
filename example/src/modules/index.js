import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users/reducer';

export default combineReducers({
  routing: routerReducer,
  users
});