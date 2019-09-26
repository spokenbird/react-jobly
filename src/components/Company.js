import React, { Component } from 'react';
import JoblyApi from '../JoblyApi';
import JobCard from './JobCard';

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
  }

  render() {
    return (
      <div className="my-4">
        <h4>{this.state.company.name}</h4>
        <p>{this.state.company.description}</p>
          {this.state.company.jobs.map(j => {
            return <JobCard job={j} />
          })}
      </div>
    );
  }
}

export default Company;