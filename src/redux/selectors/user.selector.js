import { createSelector } from "reselect";

const selectUser = (state) => state.user;
const fetchLoading = (state) => state.isLoading;
const hasError = (state) => state.hasError;

export const selectUserEmail = createSelector(selectUser, (user) => user.email);
export const userLoading = createSelector(fetchLoading, (user) => user.isLoading);
export const userError = createSelector(hasError, (user) => user.error);
