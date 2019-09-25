import React, { Component } from "react";

class CompanyCard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.company.name}</h1>
      </div>
    );
  }
}

export default CompanyCard;