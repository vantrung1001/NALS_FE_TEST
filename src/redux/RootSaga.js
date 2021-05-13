import { all } from "redux-saga/effects";
import * as UserSaga from './saga/UserSaga'

export function * rootSaga() {
    yield all([
        UserSaga.UserSaga(),
    ])
}