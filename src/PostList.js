import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  constructor() {
    super();
    this.state = { data: [] }
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch('http://localhost:3001/api/posts').then(res => res.json())
    .then(posts => {
      this.setState({ data: posts });
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    const postNodes = this.state.data.map(post =>
      <Post author={post.author} title={post.title} body={post.body} />
    );
    return (
      <div>
        <h1>Posts</h1>
        <div className="postlist-container">
          {postNodes}
        </div>
      </div>
    )
  }
}

export default PostList;
