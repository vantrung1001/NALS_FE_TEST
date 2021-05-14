import { userListService } from "../../Services/UserListService";
import { GET_USER_LIST_API, PUT_USER_LIST } from "../constants/UserListConstant";
import { call, put, takeLatest } from "@redux-saga/core/effects";


function * getUserList() {
    try {
        const {data, status} = yield call(() => userListService.getListUser())

        if(status === 200) {
            console.log('data', data)
            yield put({
                type: PUT_USER_LIST,
                value: data
            })
        }
    }
    catch(e) {

    }
}

export function* UserListSaga() {
    yield takeLatest(GET_USER_LIST_API, getUserList);
}