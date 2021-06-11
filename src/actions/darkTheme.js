import { DARK_THEME_OFF, DARK_THEME_ON } from "./types";

export const changeToDarkTheme = () => async (dispatch) => {
    await dispatch({
        type: DARK_THEME_ON
    })
}

export const changeToDefaultTheme = () => async (dispatch) => {
    await dispatch({
        type: DARK_THEME_OFF
    })
}