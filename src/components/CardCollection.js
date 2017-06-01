import React, { Component } from 'react';
import Card from './Card';

class CardCollection extends Component {
  constructor(props){
    super(props);
    console.log(this.props)
  }

  render () {
    return (
      <div className="card-collection">
      {
        this.props.cards.map((text)=>
          <Card key={text} text={text}/ >
        )
      }
      </div>
    );
  }
}

export default CardCollection;
