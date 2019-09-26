import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return this.props.token ?  
      <nav className="navbar navbar-dark bg-dark">
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/companies">Companies</NavLink>
        <NavLink exact to="/jobs">Jobs</NavLink>
        <NavLink exact to="/profile">Profile</NavLink>
        <NavLink exact to="/">Logout</NavLink>
      </nav>
    : <nav className="navbar navbar-dark bg-dark">
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/login">Login</NavLink>
      </nav>
    
  }
}

export default Nav;