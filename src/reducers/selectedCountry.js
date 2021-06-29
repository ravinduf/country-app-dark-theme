import { SET_SELECTED_COUNTRY, REMOVE_SELECTED_COUNTRY} from '../actions/types';

const initialState = {
  isSelected: false,
  country: null,
}

const selectedCountry = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_COUNTRY:
      return { ...state, isSelected: true, country: action.payload.country };
    case REMOVE_SELECTED_COUNTRY:
      return { initialState }
    default:
      return state;
  }
}

export default selectedCountry;