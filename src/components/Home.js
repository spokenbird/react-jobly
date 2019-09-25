import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Jobly</h1>
        <p>All the jobs in one, convenient place.</p>
        <Link className="btn btn-primary" to="/login">Log in</Link>
      </div>
    );
  }
}

export default Home;