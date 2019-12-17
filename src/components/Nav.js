import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const ACTIVE_STYLES = {
  fontWeight: "bold",
  color: "#fff",
  opacity: "1.0"
};

class Nav extends Component {
  render() {
    // let localToken = localStorage.getItem("joblyToken");
    let loggedIn = this.props.loggedIn;
    return loggedIn ?
      <div className="container-fluid navbar-dark bg-dark p-0">
        <div className="container">
          <nav className="navbar navbar-dark bg-dark px-0">
            <NavLink exact to="/jobs" activeStyle={ACTIVE_STYLES} className="d-none" >Home</NavLink>
            <NavLink exact to="/companies" activeStyle={ACTIVE_STYLES} >Companies</NavLink>
            <NavLink exact to="/jobs" activeStyle={ACTIVE_STYLES} >Jobs</NavLink>
            <NavLink exact to="/profile" activeStyle={ACTIVE_STYLES} >Profile</NavLink>
            <NavLink onClick={this.props.toggleLogin} exact to="/">Logout</NavLink>
          </nav>
        </div>
      </div>
      : <div className="container-fluid navbar-dark bg-dark p-0">
        <div className="container">
          <nav className="navbar navbar-dark bg-dark">
            <NavLink exact to="/" activeStyle={ACTIVE_STYLES} >Home</NavLink>
            <NavLink exact to="/login" activeStyle={ACTIVE_STYLES} >Login</NavLink>
          </nav>
        </div>
      </div>

  }
}

export default Nav;