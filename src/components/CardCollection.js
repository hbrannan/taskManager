import React, { Component } from 'react';
import Card from './Card';

class CardCollection extends Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className="card-collection">
      {
        this.props.cards.map((text, idx)=>
          <Card
            key={idx}
            colIndex={this.props.index}
            cardIndex={idx}
            text={text}
            moveCard={this.props.moveCard}
           />
        )
      }
      </div>
    );
  }
}

export default CardCollection;
