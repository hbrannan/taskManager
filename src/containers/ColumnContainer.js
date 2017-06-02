import { connect } from 'react-redux';
import ColumnList from '../components/ColumnList';
// import { addCard } from '../actions';


const mapStateToProps = state => ({
  columns: state.columns
});

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddCard: colId => {
//       dispatch(addCard(colId))
//     }
//   }
// }
//,
//  mapDispatchToProps

const ColumnContainer = connect(
  mapStateToProps
)(ColumnList);

export default ColumnContainer;

/*
    onMoveCard: (move, text, cardIdx, colIdx) => {
      dispatch(moveCard(card, direction))
    }
*/
