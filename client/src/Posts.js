import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Post from './Post.js';
import Edit from './Edit.js';
import PostList from './PostList.js';
import PostAdd from './PostAdd';

export default class Posts extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/articles' component={PostList} />
          <Route path='/articles/new' component={PostAdd} />
          <Route path='/articles/edit/:id' component={Edit} />
          <Route path='/articles/:id' component={Post} />
        </Switch>
      </div>
    )
  }
}
