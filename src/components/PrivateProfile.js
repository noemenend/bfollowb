import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser, getMessages, addMessage, removeMessage} from '../actions/userActions';
import Usuario from "./Usuario";
import Message from "./Message";
import AddMessage from "./AddMessage";
import {isEmpty} from '../helpers/helper';

class PrivateProfile extends Component {
  state = {
    user: {},
    errors: {}
  };

  componentDidMount() {
    this.props.getMessages(this.props.auth.sampledata);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const uuid = this.props.auth.uuid;
    const user = this.props.users[uuid];
    const {messages} = !isEmpty(this.props.messages) && this.props;

    return this.props.auth.isAuthenticated && (
      <div class="row mt-5">
      <div class="col-sm-4">
      <Usuario
          user={user}
          type="me"
        />
          <Link className="btn btn-secondary" to="/users"><i class="far fa-arrow-alt-circle-left"></i> Back</Link>
      </div>
      <div className="col-sm-8">
      {messages && messages[uuid] && messages[uuid].map((message, j) => (
          <Message
          key={j}
          index={`${j}`}
          message={message}
          uuid={uuid}
          removeMessage={this.props.removeMessage}
          />
        ))}
         {uuid &&
            <AddMessage
              uuid={uuid}
              addMessage={this.props.addMessage}
            />
          }
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
  messages: state.messages,
  errors: state.errors
})

export default connect(mapStateToProps, { logoutUser, getMessages, addMessage, removeMessage })(PrivateProfile);


