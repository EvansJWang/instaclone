import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  constructor() {
  super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    e.preventDefault()
    this.props.actions.logout()
  }

  loginWithRedirect(){
    if (this.props.userInfo.loggedin === false) {
      return(
        <nav>
          <Link to="/feed">Feed</Link>
          <Link to="/login">Login</Link>
        </nav>
     )
    } else {
        return(
          <span>
            <span>@{this.props.userInfo.username}</span>
            <nav>
              <Link to="/feed">Feed</Link>
              <Link to="/account">Account</Link>
              <a href="#" onClick={this.onClick}>Logout</a>
            </nav>
          </span>
     )
    }
  }

  render(){
    return(
      <div>{this.loginWithRedirect()}</div>
        )
      }
}

export default Header;
