import React from 'react';
import PropTypes from 'prop-types';
import MoveCardButton from '../containers/MoveCard';

const Card = ({ text, cardIndex, colIndex}) => (

  <div className="card">
    <MoveCardButton
      colIdx={colIndex}
      cardIdx={cardIndex}
      text={text}
      left={true}
    />
    <p className="card__paragraph">{ text }</p>
    <MoveCardButton
      colIdx={colIndex}
      cardIdx={cardIndex}
      text={text}
    />
  </div>

);

Card.propTypes = {
  text: PropTypes.string.isRequired,
  colIndex: PropTypes.number.isRequired,
  cardIndex: PropTypes.number.isRequired
}

export default Card;

