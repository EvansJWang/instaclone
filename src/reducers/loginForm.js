import { UPDATE_LOGIN_FORM, RESET_LOGIN_FORM } from '../actions/users';

const initialState = ""

export default function photos(state = initialState, action = {}) {
  switch(action.type) {
    case UPDATE_LOGIN_FORM:
      return action.formInformation
    case RESET_LOGIN_FORM:
      return action.formInformation
    default:
      return state;
  }
}
