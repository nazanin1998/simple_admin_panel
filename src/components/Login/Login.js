import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../../index.css'
class Login extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.logout();

    this.state = {
      username: "",
      password: "",
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log("ddd");
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      alert("baby");
      // this.props.login(username, password);
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2 className='title'> Login </h2>{" "}
        <form name="form" onSubmit={this.handleSubmit}>
          <div
            className={
              "form-group" + (submitted && !username ? " has-error" : "")
            }
          >
            <input
              type="text"
              placeholder={'Username'}

              className="form-control rounded-md w-full border border-gray-400 p-3 mb-5"
              name="username"
              value={username}
              onChange={this.handleChange}
            />{" "}
            {submitted && !username && (
              <div className="help-block"> Username is required </div>
            )}{" "}
          </div>{" "}
          <div
            className={
              "form-group" + (submitted && !password ? " has-error" : "")
            }
          >
            <input
              type="password"
              placeholder={'Password'}
              className="form-control"
              name="password"
              value={password}
              onChange={this.handleChange}
            />{" "}
            {submitted && !password && (
              <div className="help-block"> Password is required </div>
            )}{" "}
          </div>{" "}
          <div className="form-group">
            <button className="btn btn-primary"> Login </button>{" "}
            {loggingIn && (
              <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            )}{" "}
            {/* <Link to="/register" className="btn btn-link">Register</Link> */}{" "}
          </div>{" "}
        </form>{" "}
      </div>
    );
  }
}
export default Login;
