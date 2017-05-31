import React, { Component } from 'react';
import Card from './Card';

class CardCollection extends Component {
  constructor (props){
    super();
  }

  render (props) {
    return (
      <ul className="card-list">
        {
          this.props.children.map((card) =>
            <li key={card}>
              <Card text={card}/>
            </li>
          )
        }
      </ul>
    );
  }
}

export default CardCollection;
