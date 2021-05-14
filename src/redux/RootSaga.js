import { all } from "redux-saga/effects";
import * as UserSaga from './saga/UserSaga'
import * as UserListSaga from './saga/UserListSaga'

export function * rootSaga() {
    yield all([
        UserSaga.UserSaga(),
        UserListSaga.UserListSaga()
    ])
}