import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <img id="logo-header" src="/images/logo.png" alt=""/>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><input type="text" placeholder="Search" /></li>
          </ul>
        </nav>
      </header>
    );
  }
}
