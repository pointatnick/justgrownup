import React, { Component } from 'react';
import './css/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h1 className="logo">Just Grown Up</h1>
        <ul>
          <li><a href="#recent">Recent Posts</a></li>
          <li><a href="#articles">Articles</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><input type="text" placeholder="Search" /></li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
