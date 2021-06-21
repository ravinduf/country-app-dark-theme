import { REMOVE_SEARCH_TERM, SET_SEARCH_TERM } from "./types"


export const setSearchTerm = (url, searchTerm) => async (dispatch) => {
  await dispatch({
    type: SET_SEARCH_TERM,
    payload: {
      url,
      searchTerm
    }
  })
}

export const removeSearchTerm = () => async (dispatch) => {
  await dispatch({
    type: REMOVE_SEARCH_TERM
  })
}