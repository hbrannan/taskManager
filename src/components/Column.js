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

    this.state = {
      cards: cookies.get('cards') || []
    };
  }

  onCardAdd () {
    const { cookies } = this.props;
    //trigger allert
    var userText = prompt('Please enter Task Description');
    //
    var cardUpdate = this.state.cards;
    cardUpdate.push(userText);

    this.setState({cards: cardUpdate});
    //update cookie
    cookies.set('cards', cardUpdate, { path: '/cards' })
    console.log(cookies.get('cards'));
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

// Column.propTypes = {
//   cookies: instanceOf(Cookies).isRequired
// }

export default withCookies(Column);

