import { combineReducers } from 'redux';
import photos from './photos';
import users from './users';
import loginForm from './loginForm';

export default combineReducers({
   photos, users, loginForm
})
