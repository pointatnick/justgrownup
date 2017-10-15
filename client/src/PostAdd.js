import React, { Component } from "react";
// import { Redirect } from 'react-router-dom';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './PostAdd.css';

class PostAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      // redirect: false,
    }

    // this.onChange = (editorState) => {
    //   this.setState({ editorState });
    // }
    //
    // this.handleKeyCommand = (command) => {
    //   const newState = RichUtils.handleKeyCommand(
    //     this.state.editorState,
    //     command
    //   );
    //
    //   if (newState) {
    //     this.onChange(newState);
    //     return 'handled';
    //   }
    //
    //   return 'not-handled';
    // }
    // // this.handleSubmit = this.handleSubmit.bind(this);
    // // this.handleChange = this.handleChange.bind(this);
    // // this.createPost = this.createPost.bind(this);
  }

  onEditorStateChange = (editorState) => {
    this.setState({ editorState })
  }

  // onUnderlineClick = () => {
  //   this.onChange(
  //     RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE')
  //   );
  // }

  // handleChange(e) {
  //   e.preventDefault();
  //   this.setState({ [e.target.name]: e.target.value })
  // }
  //
  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.createPost();
  //   this.setState({ redirect: true });
  // }
  //
  // createPost() {
  //   fetch('/api/posts/', {
  //     method: 'post',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(this.state),
  //   })
  //   .then(res => res.json())
  // }

  render() {
    return (
      <div id="content">
        <h1>New Post</h1>
        <div className="editor">
          <Editor
            editorState={this.state.editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
          />
        </div>
      </div>
    );
  //   const { redirect } = this.state;
  //
  //   if (redirect) {
  //     return <Redirect to='/articles' />;
  //   } else {
  //     return (
  //       <div>
  //         <form name="postAdd" onSubmit={this.handleSubmit}>
  //           <label>
  //             Author<br/>
  //             <input
  //               onChange={this.handleChange}
  //               type="text"
  //               name="author"
  //               value={this.state.author} />
  //           </label>
  //           <br/>
  //           <label>
  //             Title<br/>
  //             <input
  //               onChange={this.handleChange}
  //               type="text"
  //               name="title"
  //               value={this.state.title} />
  //           </label>
  //           <br/>
  //           <label>
  //             Content<br/>
  //             <input
  //               onChange={this.handleChange}
  //               type="text"
  //               name="body"
  //               value={this.state.body} />
  //           </label><br/>
  //           <input type="submit" value="Create" />
  //         </form>
  //       </div>
  //     );
  //   }
  }
}

export default PostAdd;
