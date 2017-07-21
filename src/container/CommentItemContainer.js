import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../Header'
import * as UserActions from '../actions/users'

const Container = ({users, userActions}) => (
  <div>
    <Header
      userInfo={users}
      actions={userActions}
    />
  </div>
)


const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
    userActions: bindActionCreators(UserActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
