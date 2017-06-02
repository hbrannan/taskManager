import React from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions';

let AddCard = ({dispatch, colIndex}) => {
  return (
    <div
      className="add-card-button"
      onClick={ () => {
        const textEntry = prompt('Please describe task');
        if (textEntry){
          dispatch(addCard(textEntry, colIndex))
        }
    }}>
      + Add Card
    </div>
  );
}

AddCard = connect()(AddCard);

export default AddCard;


/*


*/
