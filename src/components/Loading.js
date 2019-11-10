import React, { Component } from "react";
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading-container">
        <h3>Loading</h3>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    );
  }
}

export default Loading;