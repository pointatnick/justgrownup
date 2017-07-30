import React, { Component } from 'react';
import Post from './Post';
import PostAdd from './PostAdd';

class PostList extends Component {
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
        <PostAdd createPost={this.createPost} />
        <div className="postlist-container">
          {postNodes}
        </div>
      </div>
    )
  }
}

export default PostList;
