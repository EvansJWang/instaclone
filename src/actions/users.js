import axios from 'axios'

export const UPDATE_LOGIN_FORM = 'UPDATE_LOGIN_FORM'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const RESET_LOGIN_FORM = 'RESET_LOGIN_FORM'

export function logIn(userInfo){
  return dispatch => {
    axios.post("http://tranquil-sands-93773.herokuapp.com/sessions", { username: userInfo.username }).then(res => {

      let user = {
        username: userInfo.username,
        id: res.data,
        loggedin: true
      }
       dispatch( dispatchLogIn(user))
   })
  }
}

export function dispatchLogIn(user){
  return {
    type: LOGIN,
    user
  }
}



export function updateLogInForm(formInformation){
  return dispatch => {
   dispatch(dispatchLogInForm(formInformation));
  }
}

export function dispatchLogInForm(formInformation){
  return {
    type: UPDATE_LOGIN_FORM,
    formInformation
  }
}

export function resetLogInForm(){
  return dispatch => {
    let formInformation = ""
   dispatch(dispatchResetLogInForm(formInformation));
  }
}

export function dispatchResetLogInForm(formInformation){
  return {
    type: RESET_LOGIN_FORM,
    formInformation
  }
}

export function logout(){
  return dispatch => {
   dispatch(dispatchLogout());
  }
}

export function dispatchLogout(){
  return {
    type: LOGOUT
  }
}
