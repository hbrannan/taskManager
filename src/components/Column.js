import React, { Component } from 'react';
import CardCollection from './CardCollection';

class Column extends Component {
  constructor(props){
    super(props);

    this.state = {
      cards: this.props.tasks
    };
  }

  render () {
    return (
      <div className={`col` + `${this.props.index}`}>
        <div className="col-header">
          <h3>{this.props.title}</h3>
        </div>
        <CardCollection index={this.props.index} cards={this.state.cards} moveCard={this.props.moveCard}/>
        <div className="add-card-button" onClick={ () => { this.props.addCard(this) } }> + Add Card</div>
      </div>
    );
  }
}

export default Column;
