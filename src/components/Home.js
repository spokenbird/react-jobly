import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {

  render() {
    return (
      <div className="home container text-center">
        <h1 className="display-4">Jobly</h1>
        <h4>All the jobs in one, convenient place.</h4>
        { this.props.loggedIn 
          ? <h2>Welcome Back!</h2> 
          : <Link className="btn btn-primary my-4" to="/login">Log in</Link> 
        }
      </div>
    );
  }
}

export default Home;