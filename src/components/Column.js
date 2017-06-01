import React, { Component } from 'react';
import CardCollection from './CardCollection';

class Column extends Component {
  constructor(props){
    super(props);

    this.state = {
      cards: this.props.tasks
    };
  }

  onAddCard () {
    var newInfo = prompt('Please describe task');
    var cardList = this.state.cards;
    cardList.push(newInfo);
    this.setState({'cards': cardList});
    //pass it to cardCollection
  }

  render () {
    return (
      <div className={this.props.title}>
        <div className="card-header">
          <h2>{this.props.title}</h2>
        </div>
          <CardCollection cards={this.state.cards}/>
        <div className="add-card-button" onClick={this.onAddCard.bind(this)}> + Add Card</div>
      </div>
    );
  }
}

export default Column;
