import { call, put, takeLatest } from "@redux-saga/core/effects";
import { userService } from "../../Services/UserService";
import { JWT } from "../../utils/constant";
import { history } from "../../utils/history";
import { LOGIN_API, PUT_USER_LOGIN } from "../constants/UserConstant";
import {message} from 'antd'


function* login(action) {
    try {
        const { data, status } = yield call(() => userService.login(action.model));

        if(status === 200) {
            localStorage.setItem(JWT, data.token);

            yield put({
                type: PUT_USER_LOGIN,
                jwt: data.token
            })

            history.push('/');
            message.success('Login successfully!')
        }
        else {
            message.error('Login fail!');
        }
    }
    catch (e) {
        message.error('Login fail!');
    }
}

export function* UserSaga() {
    yield takeLatest(LOGIN_API, login);
}