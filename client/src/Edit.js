import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      title: '',
      body: '',
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    fetch(`/api/posts/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(post => {
        console.log(post);
        this.setState({
          id: post._id,
          author: post.author,
          title: post.title,
          body: post.body,
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleSubmit(e) {
    e.preventDefault();
    var form = document.forms.post;
    this.updatePost({
      title: this.state.title,
      body: this.state.body,
    });
    this.setState({ redirect: true });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  updatePost(post) {
    fetch(`/api/posts/${this.state.id}`, {
      method: 'put',
      body: this.state,
    })
      .then(res => res.json());
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`/articles/${this.state.id}`} />
    } else {
      return (
        <div>
          <h2>Edit post</h2>
          <form name="post" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <h3>Written by {this.state.author}</h3>
            <input
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
            <button>Cancel</button>
            <button type="submit">Save</button>
          </form>
        </div>
      );
    }
  }
}
