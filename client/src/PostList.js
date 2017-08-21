import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PostList extends Component {
  constructor() {
    super();
    this.state = { data: [] }
    this.createPost = this.createPost.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  createPost(newPost) {
    const posts = this.state.data.slice();
    posts.push(newPost);
    this.setState({ data: posts });
  }

  loadData() {
    fetch('/api/posts').then(res => res.json())
    .then(posts => {
      this.setState({ data: posts });
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    const postPreviews = this.state.data.map(p =>
      <li key={p._id}>
        <Link to={`/posts/${p._id}`}>{p.title}</Link>
      </li>
    );
    return (
      <div>
        <ul>
          {postPreviews}
        </ul>
      </div>
    );
  }
}
