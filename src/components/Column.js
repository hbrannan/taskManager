import React, { Component } from 'react';
import CardCollection from './CardCollection';
// import { CookiesProvider, withCookies, Cookies } from 'react-cookie';
//TODO: handle cookies forcards .. or is that handles as cols?

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
      <div className={`col` + `${this.props.index}`}>
        <div className="card-header">
          <h2>{this.props.title}</h2>
        </div>
          <CardCollection index={this.props.index} cards={this.state.cards} moveCard={this.props.moveCard}/>
        <div className="add-card-button" onClick={this.onAddCard.bind(this)}> + Add Card</div>
      </div>
    );
  }
}

export default Column;
