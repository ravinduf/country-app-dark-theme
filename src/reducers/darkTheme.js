import { DARK_THEME_ON, DARK_THEME_OFF } from '../actions/types'

const initialState = {
    dark: false,
}

const darkTheme = (state = initialState, action) => {
    switch (action.type){
        case DARK_THEME_ON:
            return { ...state, dark: true }
        case DARK_THEME_OFF:
            return { ...state, dark: false }
        default:
            return state
    }
}

export default darkTheme;