import { applyMiddleware, combineReducers, createStore } from 'redux'
import createMiddlewareSaga from 'redux-saga'
import UiReducer from './reducers/UiReducer';
import UserListReducer from './reducers/UserListReducer';
import UserReducer from './reducers/UserReducer';
import { rootSaga } from './RootSaga';

const middlewareSaga = createMiddlewareSaga();

const rootReducer = combineReducers({
    UserReducer: UserReducer,
    UiReducer: UiReducer,
    UserListReducer: UserListReducer
})

const store = createStore(rootReducer, applyMiddleware(middlewareSaga));

middlewareSaga.run(rootSaga);

export default store;