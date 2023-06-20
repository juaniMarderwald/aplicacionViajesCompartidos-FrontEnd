import { call, put, takeLatest } from "redux-saga/effects";
import Cookies from "js-cookie";
import { LoginService } from "../../services/loginService";
import {
  userLogin,
  userLoginSuccess,
  userRegister,
  userRegisterSuccess,
  getToken,
  setToken,
  errorFetchingUser,
  error,
} from "../slices/auth.slice";

const loginService = new LoginService();

function* _userLogin({ type, payload: credentials }) {
  try {
    const token = yield call(loginService.login, credentials);
    yield put(userLoginSuccess(token));
    yield setTokenCoookie({ token });
  } catch (err) {
    console.log(err);
    yield put(errorFetchingUser());
  }
}

function* _registerUser({ type, payload: credentials }) {
  try {
    const token = yield call(loginService.register, credentials);
    yield put(userRegisterSuccess(token));
  } catch (error) {
    yield put(errorFetchingUser());
  }
}

function* setTokenCoookie({ token }) {
  try {
    Cookies.set("token", token.token);
  } catch (err) {
    yield put(error());
  }
}

function* getTokenFromCookies() {
  try {
    const token = Cookies.get("token");
    if (token) {
      yield put(getToken(token));
    } else {
      yield put(deleteToken());
    }
  } catch (err) {
    yield put(error());
  }
}

export default function* authSaga() {
  yield takeLatest(userLogin.type, _userLogin);
  yield takeLatest(userRegister.type, _registerUser);

  yield takeLatest(setToken.type, setTokenCoookie);
  yield takeLatest(getToken.type, getTokenFromCookies);
}
