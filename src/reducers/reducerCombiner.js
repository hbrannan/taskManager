import { combineReducers } from 'redux';
import columns from './columns';
import appTitle from './appTitle';

const combinedReducer = combineReducers({
  appTitle,
  columns
});

export default combinedReducer;
