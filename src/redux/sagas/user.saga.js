import { call, put, takeLatest } from "redux-saga/effects";
import { LoginService } from "../../services/loginService";

import {
  userLogin,
  userLoginSuccess,
  userRegisterSuccess,
  errorFetchingUser,
} from "../slices/user.slice";

const loginService = new LoginService();

function* loginUser({ type, payload: credentials }) {
  try {
    const user = yield call(loginService.login, credentials);
    yield put(userLoginSuccess(user));
  } catch (error) {
    yield put(errorFetchingUser());
  }
}

function* registerUser({ type, payload: credentials }) {
  try {
    const user = yield call(loginService.register);
    yield put(userRegisterSuccess(user));
  } catch (error) {
    yield put(errorFetchingUser());
  }
}

export default function* userSaga() {
  yield takeLatest(userLogin.type, loginUser);
  yield takeLatest(userRegisterSuccess.type, registerUser);
}
