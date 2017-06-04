import React from 'react';
import PropTypes from 'prop-types';
import CardCollection from './CardCollection';
import AddCard from '../containers/addCard';

const Column = ({index, title, tasks}) => (
  <li className={`col col` + `${ index}`}>
    <div className="col-header">
      <h3>{ title}</h3>
    </div>
    <CardCollection colIndex={ index } tasks={ tasks } />
    <AddCard colIndex={ index }/>
  </li>
);

Column.PropTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired
}

export default Column;
