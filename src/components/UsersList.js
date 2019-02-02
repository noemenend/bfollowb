import React, { Component } from "react";
import Usuario from "./Usuario";
import {isFollower} from '../helpers/helper';

// Redux
import { connect } from "react-redux";
import { logoutUser, getUsers, getRequests, followRequest, denyRequest } from "../actions/userActions";

class Users extends Component {
  state = {
    errors: {}
  };

  componentDidMount() {
    this.props.getUsers();
    this.props.getRequests(this.props.auth.sampledata);
    
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const follower = this.props.auth.uuid;
    const {users, requests} = this.props;
   
      return this.props.auth.isAuthenticated && (
        
        <div className="container-fluid mt-5 my-2">
          <div className="card-columns">
          {Object.keys(users).map((uuid) => (
          follower !== uuid &&
          <div key={uuid}>
            <Usuario
              user={users[uuid]}
              follower={follower}
              following={uuid}
              followed={isFollower(follower, uuid, requests)}
              followRequest={this.props.followRequest}
              denyRequest={this.props.denyRequest}
            />
          </div>
        ))}
        </div>
        </div>
        
      )
  }
}
// state
const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
  requests: state.requests,
  errors: state.errors
});

export default connect(mapStateToProps, { logoutUser, getUsers, getRequests, followRequest, denyRequest })(Users);
