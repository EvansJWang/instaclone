import { LOGIN, LOGOUT } from '../actions/users';

const initialState = {
  username: "guest",
  id: "guest",
  loggedin: false
}


export default function photos(state = initialState, action = {}) {
  switch(action.type) {
    case LOGIN:
      return action.user
    case LOGOUT:
      return initialState
    default:
      return state;
  }
}
