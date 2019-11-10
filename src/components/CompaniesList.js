import React, { Component } from "react";
import JoblyApi from '../JoblyApi';
import CompanyCard from './CompanyCard';
import './CompaniesList.css';

class CompaniesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      search: "",
      loading: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    try{
      let companies = await JoblyApi.getCompanies();
      this.setState({ companies, loading: false })
    } catch {
      this.props.history.push('/login');
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    let companies = await JoblyApi.searchCompanies(this.state.search);
    this.setState({ companies });
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-inline my-2">
          <input autoComplete="off" onChange={this.handleChange} value={this.state.search} className="form-control col-sm-11" type="search" placeholder="Search" aria-label="Search" name="search" />
          <button className="btn btn-outline-success my-2 col-sm-1" type="submit">Search</button>
        </form>
        {
          this.state.loading
            ? <div className="loading-container">
                <h3>Loading</h3>
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
              </div>
            : this.state.companies.map(c => {
              return <CompanyCard key={c.handle} company={c} />
            })
        }
      </div>
    );
  }
}

export default CompaniesList;