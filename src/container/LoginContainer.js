import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LoginPage from '../LoginPage'
import * as UserActions from '../actions/users'

const LoginContainer = ({users, loginForm, userActions}) => (
  <div>
    <LoginPage
      userInfo={users}
      actions={userActions}
      logInForm={loginForm}
    />
  </div>
)


const mapStateToProps = state => ({
  loginForm: state.loginForm,
  users: state.users

})

const mapDispatchToProps = dispatch => ({
    userActions: bindActionCreators(UserActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
