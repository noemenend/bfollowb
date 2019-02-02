import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class Button extends Component {
  render() {
    const {follower, following, followed, request, text} = this.props;
    if (followed === 'pending') {
      return  <button className="btn btn-primary">Pending</button>
    }
    else
    if (followed === 'approved') {
      return  <Link className="btn btn-primary" to={`/users/${following}`}>Read</Link>
    }
    else {
      return  <button className="btn btn-primary" onClick={() => request(following, follower)}>{text}</button>
    }
  }
}


class UButtons extends Component {
  static propTypes = {
    follower: PropTypes.string,
    following: PropTypes.string,
  }

  render() {
    const {type, follower, following, followed} = this.props;
    switch(type) {
      case 'me':
        return ''
      case 'deny':
        return <Button follower={follower} following={following} followed={followed} request={this.props.denyRequest} text="Deny" />
      case 'approve':
        return <Button follower={follower} following={following} followed={followed} request={this.props.approveRequest} text="Approve" />
      case 'profile':
        if (followed === 'approved') {
          return <Button follower={follower} following={following} followed="unfollow" request={this.props.denyRequest} text="Unfollow" />
        }
        // fallsthrough
      default:
        return <Button follower={follower} following={following} followed={followed} request={this.props.followRequest} text="Follow" />

      }
    }
};

export default UButtons;