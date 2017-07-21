import React, { Component } from 'react';
import Navbar from './Navbar.js';
import PostList from './PostList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <PostList />
      </div>
    );
  }
}

export default App;
