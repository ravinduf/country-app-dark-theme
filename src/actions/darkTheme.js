import { DARK_THEME_OFF, DARK_THEME_ON } from "./types";

export const changeToDarkTheme = () => async (dispatch) => {
    console.log('hello dark')
    await dispatch({
        type: DARK_THEME_ON
    })
}

export const changeToDefaultTheme = () => async (dispatch) => {
    console.log('hello light')
    await dispatch({
        type: DARK_THEME_OFF
    })
}