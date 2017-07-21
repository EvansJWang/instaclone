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
        <div className="container">
            <form className="form-group input-group center-block" onSubmit={this.handleSubmit}>
              <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
              <input className="form-control"
              name="login"
              type="text"
              placeholder="Username"
              value={this.props.logInForm}
              onChange={this.handleChange}/>
              </div>
              <input type="submit" className="center-block btn btn-primary btn-lg btn-block"
              value="Login"/>
          </form>
      </div>)
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
