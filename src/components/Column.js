import React, { Component } from 'react';
import CardCollection from './CardCollection';
import Card from './Card';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';

class Column extends Component {
  constructor(props){
    super();
  }

  componentWillMount() {
    const { cookies } = this.props;
    console.log(cookies)

    this.state = {
      cards: cookies.get('cards' + this.props.title) || []
    };
  }

  //Trigger prompt for user text, update state and set cookie.
  onCardAdd () {
    const { cookies } = this.props;

    var userText = prompt('Please enter Task Description');
    var cardUpdate = this.state.cards;
    cardUpdate.push(userText);

    this.setState({cards: cardUpdate});
    cookies.set('cards' +  this.props.title, cardUpdate, { path: '/' })
  }

  render () {
    return (
      <div className="col">
        <div className="col__header">
          <h2>{this.props.title}</h2>
        </div>
        <div className="col__container">
          <CardCollection children={this.state.cards}/>

          <div className="addCardButton" onClick={this.onCardAdd.bind(this)}>+Add Card</div>
        </div>
      </div>
    );
  }
}


export default withCookies(Column);

