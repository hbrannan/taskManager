import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="card">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Card;
