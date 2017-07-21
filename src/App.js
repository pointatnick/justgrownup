import React, { Component } from 'react';
import Navbar from './Navbar.js';
import PostList from './PostList.js';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <PostList />
        </div>
      </div>
    );
  }
}

export default App;
