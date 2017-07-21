import React, { Component } from 'react';
import { Redirect } from 'react-router'

class loginForm extends Component {
  constructor() {
  super();
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.props.actions.updateLogInForm( e.target.value)
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.actions.logIn({ username: this.props.logInForm });
    this.props.actions.resetLogInForm();
  }

  loginWithRedirect(){
    if (this.props.userInfo.loggedin === false) {
      return(
      <form onSubmit={this.handleSubmit}>
        Username:
        <input
        name="login"
        type="text"
        placeholder="Username"
        value={this.props.logInForm}
        onChange={this.handleChange}/>
        <input type="submit"
        value="Login"/>
    </form>)
    } else {
        return(
      <Redirect to={{
        pathname: '/feed',
      }}/>)
    }
  }

  render(){
    return(
      <div>{this.loginWithRedirect()}</div>
        )
      }
}

export default loginForm;
