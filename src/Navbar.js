import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li><a href="#">Recent Posts</a></li>
          <li><a href="#">Articles</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact Us</a></li>
          <input type="text" value="Search" />
        </ul>
      </div>
    )
  }
}

export default Navbar;
