import React, { Component } from "react";
import axios from 'axios';
import JoblyApi from "../JoblyApi";

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {
        jobs: []
      }
    }
  }

  async componentDidMount() {
    let company = await JoblyApi.getCompany(this.props.match.params.id);
    this.setState({ company });
    console.log(this.state.company.jobs);
  }

  render() {
    return (
      <div className="my-4">
        <h4>{this.state.company.name}</h4>
        <p>{this.state.company.description}</p>
        <ul>
          {this.state.company.jobs.map(j => {
            return <li key>{j.title}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default Company;