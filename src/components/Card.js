import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="card">
        <p className="card__paragraph">{this.props.text}</p>
      </div>
    );
  }
}

export default Card;
