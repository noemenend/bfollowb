import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutClean, logoutUser } from '../actions/userActions';

class Clean extends Component {

  componentDidMount() {
    this.props.logoutClean();
    if(this.props.auth.isAuthenticated) {
      this.props.logoutUser(this.props.history);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <p>Clearing out</p>
        </div>
      </div>
    );
  };
};

Clean.propTypes = {
  logoutClean: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { logoutClean, logoutUser })(Clean);