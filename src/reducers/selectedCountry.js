import { SET_SELECTED_COUNTRY } from '../actions/types';

const initialState = {
  country: null,
}

const selectedCountry = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_COUNTRY:
      return { ...state, country: action.payload.country };
    default:
      return state;
  }
}

export default selectedCountry;