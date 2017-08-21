import React, { Component } from 'react';

export default class Post extends Component {
  componentDidMount() {
    console.log((this.props.match.params._id).toString());
    fetch(`/api/posts/${this.props.match.params._id}`)
      .then(console.log('asdf'));
  }

  render() {
    return (
      <div className="post">A</div>
    );
  }
}

/*
<h2>{this.props.title}</h2>
<h3>Written by {this.props.author}</h3>
<p>{this.props.body}</p>
<button type="button">Edit</button>
<button type="button">Delete</button>
*/
