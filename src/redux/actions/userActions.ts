import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  fetchUserFail,
  fetchUserStart,
  fetchUserSuccess,
} from "../reducers/userReducer";
import { User } from "../../shared/types";
import { addUser, getUser, updateUser } from "../../services/userService";

const fetchUserSaga = function* () {
  try {
    yield put(fetchUserStart());
    const user: User = yield call(getUser);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFail((error as Error).message));
  }
};

const createUserSaga = function* (action: any) {
  try {
    yield put(fetchUserStart());
    const user: User = action.payload;
    const response: User = yield call(addUser, user);
    yield put(fetchUserSuccess(response));
  } catch (error) {
    yield put(fetchUserFail((error as Error).message));
  }
};

const editUserSaga = function* (action: any) {
  try {
    yield put(fetchUserStart());
    const user: User = action.payload;
    const response: User[] = yield call(updateUser, user);
    yield put(fetchUserSuccess(response));
  } catch (error) {
    yield put(fetchUserFail((error as Error).message));
  }
};

const watchFetchUser = function* () {
  yield takeEvery("user/fetchUserSaga", fetchUserSaga);
};

const watchCreateUser = function* () {
  yield takeEvery("user/createUserSaga", createUserSaga);
};

const watchEditUser = function* () {
  yield takeEvery("user/editUserSaga", editUserSaga);
};

export function* userSaga() {
  yield all([fork(watchFetchUser), fork(watchCreateUser), fork(watchEditUser)]);
}
