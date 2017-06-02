import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="card">
        <span className="before" onClick={ (e) => {this.props.moveCard(this, e)} }> ← </span>
        <p className="card__paragraph">{this.props.text}</p>
        <span className="after" onClick={ (e) => {this.props.moveCard(this, e)} }> → </span>
      </div>
    );
  }
}

export default Card;
