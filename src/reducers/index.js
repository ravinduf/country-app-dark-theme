import { combineReducers } from 'redux';

import darkTheme from './darkTheme';
import searchTerm from './searchTerm';

export default combineReducers({
  darkTheme,
  searchTerm,
})