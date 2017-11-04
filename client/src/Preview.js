import React, { Component } from 'react';

export default class Preview extends Component {
  render() {
    return (
      <div style={{width: 300, height: 700}} className="card">
        <div className="card-image">
          <figure className="image is-square">
            <img src="http://i0.kym-cdn.com/photos/images/original/001/250/216/305.jpg"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <p className="title is-5">{this.props.title}</p>
            <p className="subtitle is-6">{this.props.author}</p>
          </div>
        </div>
      </div>
    );
  }
}
