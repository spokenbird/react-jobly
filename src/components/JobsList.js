import React, { Component } from "react";
import JoblyApi from '../JoblyApi'
import JobCard from './JobCard'

class JobsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      search: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    let jobs = await JoblyApi.getJobs();
    this.setState({ jobs })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    let jobs = await JoblyApi.searchJobs(this.state.search);
    this.setState({ jobs });
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-inline my-2">
          <input 
            autocomplete="off" 
            onChange={this.handleChange} 
            value={this.state.search} 
            className="form-control col-sm-11" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
            name="search"
          />
          <button className="btn btn-outline-success my-2 col-sm-1" type="submit">Search</button>
        </form>
        {this.state.jobs.map(j => {
          return <JobCard key={j.handle} job={j} />
        })}
      </div>
    );
  }
}

export default JobsList;