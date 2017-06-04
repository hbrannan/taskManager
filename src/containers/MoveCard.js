import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { moveCardLeft } from '../actions';
import { moveCardRight } from '../actions';

let MoveCardButton = ({dispatch, cardIdx, colIdx, left, text}) => {
  if (left){
    return (<span
      className="before"
      onClick= { () => {
         dispatch(moveCardLeft(text, cardIdx, colIdx))
       }}
      >  ◀
      </span>
    );
  } else {
    return (<span
      className="after"
      onClick= { () => {
         dispatch(moveCardRight(text, cardIdx, colIdx))
       }}
      >  ▶
      </span>
    );
  }
};

MoveCardButton = connect()(MoveCardButton);

export default MoveCardButton;

