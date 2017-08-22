import React, { Component } from 'react';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    fetch(`/api/posts/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(post => {
        console.log(post);
        this.setState({
          author: post.author,
          title: post.title,
          body: post.body,
        });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <h3>Written by {this.state.author}</h3>
        <p>{this.state.body}</p>
        <button type="button">Edit</button>
        <button type="button">Delete</button>
      </div>
    );
  }
}
