import React, { Component } from 'react';
import Card from './Card';

class Column extends Component {
  constructor(props){
    super();
  }

  render () {
    return (
      <div className="card-header">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default Column;
