import React, { Component } from 'react';
import '../App.css';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <div className="Card-header">
          <h2>Welcome to Component</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Card;
