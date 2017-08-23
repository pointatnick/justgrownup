import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home.js';
import Posts from './Posts.js';
import About from './About.js';
import Contact from './Contact.js';

export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/articles' component={Posts} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </main>
    );
  }
}
