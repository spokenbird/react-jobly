import React, { Component } from "react";
import JoblyApi from '../JoblyApi'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: ''
    }
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleForm() {
    this.setState({ login: !this.state.login });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    let { username, password, first_name, last_name, email } = this.state;
    if (this.state.login) {
      let { token } = await JoblyApi.request('login', { username, password }, 'post');
      localStorage.setItem("joblyToken", token);
      localStorage.setItem("joblyUser", username);
      this.props.toggleLogin();
      this.props.history.push('/jobs')
    } else {
      let { token } = await JoblyApi.request('users', { username, password, first_name, last_name, email }, 'post');
      localStorage.setItem("joblyToken", token);
      localStorage.setItem("joblyUser", username);
      this.props.toggleLogin();
      this.props.history.push('/jobs')
    }
  }

  render() {
    return (
      this.state.login ?
        <div className="col-md-6 login">
          <form onSubmit={this.handleSubmit}>
            <h1 className="display-5 text-center mb-3">Jobly</h1>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input onChange={this.handleChange} name="username" value={this.state.username} type="text" className="form-control" id="username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={this.handleChange} name="password" value={this.state.password} type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <p>New to Jobly? <span className="login-toggle btn-link" onClick={this.toggleForm}>Signup!</span></p>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
        :
        <div className="col-md-6 login">
          <h1 className="display-5 text-center mb-3">Jobly</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input onChange={this.handleChange} name="username" value={this.state.username} type="text" className="form-control" id="username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={this.handleChange} name="password" value={this.state.password} type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="first_name">First name</label>
              <input onChange={this.handleChange} name="first_name" value={this.state.first_name} type="text" className="form-control" id="first_name" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last name</label>
              <input onChange={this.handleChange} name="last_name" value={this.state.last_name} type="text" className="form-control" id="last_name" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input onChange={this.handleChange} name="email" value={this.state.email} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <p>Already have an account? <span className="login-toggle btn-link" onClick={this.toggleForm}>Login!</span></p>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
    )
  }
}

export default LoginForm;