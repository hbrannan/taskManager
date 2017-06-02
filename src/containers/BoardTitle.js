import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//TODO import CHANGE_TITLE from '../actions';

let BoardTitle = ({title, actions}) => {
  return (
    <div className="app-header">
      <h2>{title}</h2>
    </div>
  );
}

BoardTitle.propTypes = {
  title: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  title: state.appTitle
});

//TODO: add 'change title' action.
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(XXXctions, dispatch)
// })
//Also: add mapDispatchToProps to connect call below.

BoardTitle = connect(
  mapStateToProps
)(BoardTitle);

export default BoardTitle;
