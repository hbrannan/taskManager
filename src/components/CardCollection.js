import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardCollection  = ({colIndex, tasks, moveCard}) => (
  <div className="card-collection">
    {
      tasks.map((text, idx)=>
        <Card
          key={idx}
          colIndex={colIndex}
          cardIndex={idx}
          text={text}
          moveCard={moveCard}
        />
      )
    }
  </div>
);

CardCollection.PropTypes = {
  index: PropTypes.number.isRequired,
  tasks: PropTypes.array.isRequired,
  moveCard: PropTypes.func.isRequired
}

export default CardCollection;
