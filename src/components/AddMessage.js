import React from "react";
import PropTypes from "prop-types";

class AddMessage extends React.Component {
  state = {
    title: '',
    content: '',
    errors: {}
  };

  static propTypes = {
    addMessage: PropTypes.func
  }

  handleChange = event => {
    this.setState({[event.currentTarget.name]: event.target.value})
  };

  handleSubmit = event => {
    event.preventDefault();
    const uuid = this.props.uuid;
    const message = {
      title: this.state.title,
      content: this.state.content,
    };
    this.props.addMessage(uuid, message);
    this.setState({
      title: '',
      content: ''
    });
  };

  render() {
    const { title, content } = this.state;
    return (
    
           <div className="card border-primary mt-2">
           <div className="card-body">
      <form  className="form box-col container" method="POST" onSubmit={this.handleSubmit}>
      <fieldset>
          <legend>New Message</legend>
        <div className="form-group">
          <label htmlFor="title" className="sr-only">Title</label>
          <input
            className="form-control"
            type="text"
            id="title"
            name="title"
            required
            placeholder="Title"
            onChange={this.handleChange}
            value={title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content" className="sr-only">Content</label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            required
            placeholder="Content"
            onChange={this.handleChange}
            value={content}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Message</button>
        </fieldset>
      </form>
      </div>
      </div>

    );
  }
}

export default AddMessage;