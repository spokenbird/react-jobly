import React, { Component } from "react";
import { Link } from 'react-router-dom';

class JobCard extends Component {
  render() {
    return (
      <div className="card container my-3">
        <div className="card-body">
          <h4>{this.props.job.title}</h4>
          <p>Salary: {this.props.job.salary}</p>
          <p>Equity: {this.props.job.equity}</p>
          <Link to="#" className="btn btn-outline-primary float-right">Apply</Link>
        </div>
    </div>
    );
  }
}

export default JobCard;