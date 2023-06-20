import { call, put, takeLatest } from "redux-saga/effects";
import { fetchUser, getUser, errorFetchingUser } from "../slices/user.slice";
import { UserService } from "../../services/userService";

const userService = new UserService();

function* _getUser({ type, payload: token }) {
  try {
    const user = yield call(userService.getUser, token);
    yield put(getUser(user));
  } catch (error) {
    yield put(errorFetchingUser());
  }
}

export default function* userSaga() {
  yield takeLatest(fetchUser.type, _getUser);
}
