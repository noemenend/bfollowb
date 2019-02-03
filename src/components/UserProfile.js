import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser, getMessages, getRequests, followRequest, denyRequest } from '../actions/userActions';
import User from "./Usuario";
import Message from "./Message";
import {isEmpty, isFollower} from '../helpers/helper';

class UserProfile extends Component {
  state = {
    user: {},
    errors: {}
  };

  componentDidMount() {
    const {uuid} = this.props.match.params;
    const follower = this.props.auth.uuid;

   
    this.props.getMessages(this.props.auth.sampledata);
    this.props.getRequests(this.props.auth.sampledata);

    if(isFollower(follower, uuid, this.props.requests) !== 'approved') {
      this.props.history.push('/users');
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({
          errors: nextProps.errors
      });
    }
  }

  render() {
    const follower = this.props.auth.uuid;
    const {uuid} = this.props.match.params;
    const user = this.props.users[uuid];
    const {messages} = !isEmpty(this.props.messages) && this.props;
    const {requests} = !isEmpty(this.props.requests) && this.props;
    return this.props.auth.isAuthenticated && (
    
      <div class="row mt-5">
        <div class="col-sm-4">
        <User
            user={user}
            type="profile"
            follower={follower}
            following={uuid}
            followed={isFollower(follower, uuid, requests)}
            followRequest={this.props.followRequest}
            denyRequest={this.props.denyRequest}
          />
            <Link className="btn btn-secondary" to="/users"><i class="far fa-arrow-alt-circle-left"></i> Back</Link>
        </div>
        <div class="col-sm-8">
        {messages && messages[uuid] && messages[uuid].map((message, index) => (
            <Message
              key={index}
              index={`${index}`}
              message={message}
              uuid={uuid}
            />
          ))}
        </div>
      </div>

  
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
  requests: state.requests,
  messages: state.messages,
  errors: state.errors
})

export default connect(mapStateToProps, { logoutUser, getMessages, getRequests, followRequest, denyRequest })(UserProfile);


