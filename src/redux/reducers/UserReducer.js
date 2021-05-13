import { JWT } from "../../utils/constant";
import { PUT_USER_LOGIN } from "../constants/UserConstant";

let jwtDefault;
let isLoginDefault = false;

if (localStorage.getItem(JWT)) {
    jwtDefault = localStorage.getItem(JWT)
    isLoginDefault = true;
}

const initialState = {
    jwt: jwtDefault || '',
    isLogin: isLoginDefault
}

export default (state = initialState, action) => {
    switch (action.type) {

        case PUT_USER_LOGIN:{
            return { ...state, jwt: action.jwt, isLogin: true };
        }

        default:
            return state
    }
}
