import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDeleteClick = this.onDeleteClick.bind(this);
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

  onDeleteClick() {
    // TODO: modal
    if (window.confirm("Are you sure you want to delete this post?")) {
      fetch(`/api/posts/${this.state.id}`, { method: 'delete' })
        .then(res => res.json());
      window.location.href='/articles';
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <h3>Written by {this.state.author}</h3>
        <p>{this.state.body}</p>
        <Link to={`/articles/edit/${this.state.id}`}>
          <button type="button">Edit</button>
        </Link>
        <button type="button" onClick={this.onDeleteClick}>Delete</button>
      </div>
    );
  }
}
