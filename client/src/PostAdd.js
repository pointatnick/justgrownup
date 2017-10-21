import React, {Component, PropTypes} from 'react';
// import { Redirect } from 'react-router-dom';
import RichTextEditor from 'react-rte';
import './PostAdd.css';

class PostAdd extends Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    // redirect: false,
    value: RichTextEditor.createEmptyValue()
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  render () {
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
    return (
      <RichTextEditor className="editor"
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}

export default PostAdd;
