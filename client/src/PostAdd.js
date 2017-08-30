import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

class PostAdd extends Component {
  constructor() {
    super();
    this.state = {
      author: '',
      title: '',
      body: '',
      redirect: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.createPost();
    this.setState({ redirect: true });
  }

  createPost() {
    fetch('/api/posts/', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state),
    })
    .then(res => res.json())
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/articles' />;
    } else {
      return (
        <div>
          <form name="postAdd" onSubmit={this.handleSubmit}>
            <label>
              Author<br/>
              <input
                onChange={this.handleChange}
                type="text"
                name="author"
                value={this.state.author} />
            </label>
            <br/>
            <label>
              Title<br/>
              <input
                onChange={this.handleChange}
                type="text"
                name="title"
                value={this.state.title} />
            </label>
            <br/>
            <label>
              Content<br/>
              <input
                onChange={this.handleChange}
                type="text"
                name="body"
                value={this.state.body} />
            </label><br/>
            <input type="submit" value="Create" />
          </form>
        </div>
      );
    }
  }
}

export default PostAdd;
