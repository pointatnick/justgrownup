import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      title: '',
      body: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    var form = document.forms.postAdd;
    this.props.createPost({
      author: form.author.value,
      title: form.title.value,
      body: form.body.value,
    });
  }

  render() {
    return (
      <div>
        <h2>Edit post</h2>
        <form name="post" onSubmit={this.handleSubmit}>
          <input type="text" name="title" value={this.state.title} />
          <h3>Written by {this.state.author}</h3>
          <input type="text" name="body" value={this.state.body} />
          <button>Cancel</button>
          <Link to={`/articles/${this.state.id}`}><button>Save</button></Link>
        </form>
      </div>
    )
  }
}
