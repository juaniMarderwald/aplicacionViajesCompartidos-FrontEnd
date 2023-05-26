import { createSelector } from "reselect";

const authstore = (state) => state.auth;

export const userAuth = createSelector(authstore, (auth) => auth.isAuth);
export const userToken = createSelector(authstore, (auth) => auth.token);
