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
        <nav className="navbar navbar-default navbar-static-top">
          <ul className="nav nav-tabs">
            <li role="presentation" className="active"><Link to="/feed">Feed</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
     )
    } else {
        return(
          <span>
            <span>@{this.props.userInfo.username}</span>
            <nav className="navbar navbar-default navbar-static-top">
              <ul className="nav nav-tabs">
                <li role="presentation" className="active"><Link to="/feed">Feed</Link></li>
                <li><Link to="/account">Account</Link></li>
              <button className="navbar navbar-default navbar-static-top" onClick={this.onClick}>Logout</button>
            </ul>
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
