import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../actions/userActions";

class Login extends Component {
  state = {
    username: "angryostrich988",
    password: "r2d2",
    sampledata: false,
    errors: {}
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

  handleChange = event => {
    const target = event.target;
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };


  handleSubmit = event => {
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user, this.state.sampledata);
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/users");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/users");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const { username, password, sampledata, errors } = this.state;
    
    return (
      <div className="row justify-content-center mt-5">
      <div className="col-md-8">
           <div className="card border-primary">
           <div className="card-body">
      <form
        className="form box-col container"
        method="POST"
        onSubmit={this.handleSubmit}
      >
        <fieldset>
          <legend>Login</legend>
          <div className="form-group">
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              className="form-control"
              type="text"
              id="username"
              name="username"
              required
              placeholder="Username"
              onChange={this.handleChange}
              value={username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password"
              onChange={this.handleChange}
              value={password}
            />
          </div>

          <div className="form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                id="sampledata"
                name="sampledata"
                type="checkbox"
                onChange={this.handleChange}
                checked={sampledata}
              />
              Load sample data?
            </label>
          </div>
          <button type="submit"  className="btn btn-primary mt-2">
            Login
          </button>
          
          {errors && errors.msg && <div className="font-weight-bold alert alert-danger alert-dismissible text-center mt-4 ">
             <button type="button" className="close" data-dismiss="alert">&times;</button>
                {errors.msg}
                        </div>
          }
        </fieldset>
      </form>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
