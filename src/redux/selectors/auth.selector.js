import { createSelector } from "reselect";

const authstore = (state) => state.auth;

export const selectedIsAuth = createSelector(authstore, (auth) => auth.isAuth);

export const selectedUserToken = createSelector(
  authstore,
  (auth) => auth.token
);
