import { CLOSE_LEFT_NAV, OPEN_LEFT_NAV, TOGGLE_LEFT_NAV } from "../constants/UiConstants"

const initialState = {
    isCloseLeftNav: false
}

export default (state = initialState, action) => {
    switch (action.type) {

        case CLOSE_LEFT_NAV:
            return { ...state, isCloseLeftNav: true };

        case OPEN_LEFT_NAV:
            return { ...state, isCloseLeftNav: false };

        case TOGGLE_LEFT_NAV:
            return { ...state, isCloseLeftNav: !state.isCloseLeftNav };

        default:
            return state
    }
}
