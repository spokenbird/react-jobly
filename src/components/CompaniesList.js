import React, { Component } from "react";
import JoblyApi from '../JoblyApi'
import CompanyCard from './CompanyCard'

class CompaniesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    }
  }
  async componentDidMount(){
    let companies = await JoblyApi.getCompanies();
    this.setState({companies})
    console.log("All Companies: ", companies);
  }

  render() {
    
    return (
      <div>
        {this.state.companies.map(c => {
          return <CompanyCard key={c.handle} company={c} />
        })}
      </div>
    );
  }
}

export default CompaniesList;