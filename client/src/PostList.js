import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Preview from './Preview';

export default class PostList extends Component {
  constructor() {
    super();
    this.state = { data: [] }
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => {
        this.setState({ data: posts });
      }).catch(err => {
        console.log(err);
      });
  }

  render() {
    const postPreviews = this.state.data.map(p =>
      <li key={p._id}>
        <Link to={`/articles/${p._id}`}><Preview title={p.title} subtitle={p.author}/></Link>
      </li>
    );
    return (
      <div>
        <h2>Posts</h2>
        <ul>
          {postPreviews}
        </ul>
        <Link to='/articles/new'><button type="button">New Post</button></Link>
      </div>
    );
  }
}
