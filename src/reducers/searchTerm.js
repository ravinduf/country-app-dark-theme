import { REMOVE_SEARCH_TERM, SET_SEARCH_TERM } from "../actions/types"

const initialState = {
  isSearchTerm : false,
  searchTerm: "",
  url: "",
}

const searchTerm = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, 
                  isSearchTerm: true , 
                  searchTerm: action.payload.searchTerm, 
                  url: action.payload.url 
              };
              
    case REMOVE_SEARCH_TERM:
      return { initialState };

    default:
      return state;
  }
}

export default searchTerm;