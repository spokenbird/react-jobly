import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return this.props.token ?  
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/companies">Companies</NavLink>
        <NavLink exact to="/jobs">Jobs</NavLink>
        <NavLink exact to="/profile">Profile</NavLink>
        <NavLink exact to="/">Logout</NavLink>
      </nav>
    : <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/login">Login</NavLink>
      </nav>
    
  }
}

export default Nav;