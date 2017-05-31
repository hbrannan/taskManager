import React, { Component } from 'react';

class CardCollection extends Component {
  constructor (props){
    super();
  }

  render (props) {
    return (
      <ul>
        {
          this.props.children.map((card) =>
            <li key={card}>
              {card}
            </li>
          )
        }
      </ul>
    );
  }
}

export default CardCollection;
