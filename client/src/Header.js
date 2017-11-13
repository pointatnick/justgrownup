import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar has-shadow">
          <div className="navbar-brand">
            <img className="navbar-item" id="logo-header" src="/images/logo.png" alt=""/>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <Link to="/" className="navbar-item">Home</Link>
              <Link to="/articles" className="navbar-item">Articles</Link>
              <Link to="/about" className="navbar-item">About</Link>
              <Link to="/contact" className="navbar-item">Contact Us</Link>
              <div className="navbar-item field">
                <p className="control has-icons-left">
                  <input className="input" type="text" placeholder="Search"/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-search"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
