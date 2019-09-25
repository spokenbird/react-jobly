import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Nav from './Nav';
import LoginForm from './LoginForm';
import DisplayItems from './DisplayItems';
import ProfileForm from './ProfileForm';
import Home from './Home';

class Jobly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
        "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30" +
        "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U"
    }
    this.addToken = this.addToken.bind(this);
  }

  addToken(token){
    this.setState({token});
    console.log("Added New Token: ", this.state.token)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <BrowserRouter>
              <Nav token={this.state.token} />
              <Switch >
                <Route exact path="/"
                  render={() => <Home />} />
                <Route exact path="/companies"
                  render={() => <DisplayItems />} />
                <Route exact path="/companies/:id"
                  render={routeProps => <DisplayItems {...routeProps} />} />
                <Route exact path="/jobs"
                  render={() => <DisplayItems />} />
                <Route exact path="/profile"
                  render={routeProps => <ProfileForm {...routeProps} />} />
                <Route exact path="/login"
                  render={routeProps => <LoginForm {...routeProps} addToken={this.addToken}/>} />
                <Redirect to="/" />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default Jobly;