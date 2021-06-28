import { combineReducers } from 'redux';

import darkTheme from './darkTheme';
import searchTerm from './searchTerm';
import selectedCountry from './selectedCountry';

export default combineReducers({
  darkTheme,
  searchTerm,
  selectedCountry,
})