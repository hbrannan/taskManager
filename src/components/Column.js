import React, { Component } from 'react';
import CardCollection from './CardCollection';
import Card from './Card';

class Column extends Component {
  constructor(props){
    super();
    this.state = {
      cards: []
    }
  }

  onCardAdd () {
    //trigger allert
    var userText = prompt('Please enter Task Description');
    //
    var cardUpdate = this.state.cards;
    cardUpdate.push(userText);

    this.setState({cards: cardUpdate})
    console.log(this.state.cards);
  }

  render () {
    return (
      <div className="col">
        <div className="col-header">
          <h2>{this.props.title}</h2>
        </div>

        <CardCollection children={this.state.cards}/>

        <div className="addCardButton" onClick={this.onCardAdd.bind(this)}>+Add Card</div>
      </div>
    );
  }
}

export default Column;
