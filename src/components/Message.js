import React, { Component } from 'react';
import Parser from 'html-react-parser';
import PropTypes from 'prop-types';

class Message extends Component {
  static propTypes = {
    index: PropTypes.string,
    message: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      publishedAt: PropTypes.string
    }),
    removeMessage: PropTypes.func
  }

  render() {
    const {message} = this.props;
    return (
      <article className="mt-3">
        <div>
          <header>
            <h2>{Parser(message.title)}</h2>
            <div>{Parser(message.content)}</div>
          </header>
          {this.props.removeMessage &&
          <footer>
            <button className="btn btn-secondary" onClick={() => this.props.removeMessage(this.props.uuid, this.props.index)}>Delete post</button>
          </footer>}
        </div>
      </article>
    )
  }
}

export default Message;