import React, { Component } from "react";

class PostAdd extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var form = document.forms.postAdd;
    this.props.createPost({
      author: form.author.value,
      title: form.title.value,
      body: form.body.value,
    });

    form.author.value = "";
    form.title.value = "";
    form.body.value = "";
  }

  render() {
    return (
      <div>
        <form name="postAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="author" placeholder="Author" />
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="body" placeholder="Body" />
          <button>Create</button>
        </form>
      </div>
    )
  }
}

export default PostAdd;
