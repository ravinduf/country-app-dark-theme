import { SET_SELECTED_COUNTRY, REMOVE_SELECTED_COUNTRY } from './types'

export const setSelectedCountry = (country) => async (dispatch) => {
  await dispatch({
    type: SET_SELECTED_COUNTRY,
    payload: {
      country,
    }
  })
}

export const removeSelectedCountry = () => async (dispatch) => {
  await dispatch({
    type: REMOVE_SELECTED_COUNTRY
  })
}