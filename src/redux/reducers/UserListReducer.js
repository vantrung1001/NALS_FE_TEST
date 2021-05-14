import { PUT_USER_LIST } from "../constants/UserListConstant"

const initialState = {
    userList: []
}

export default (state = initialState, action) => {
    switch (action.type) {

    case PUT_USER_LIST:
        return { ...state, userList: action.value }

    default:
        return state
    }
}
