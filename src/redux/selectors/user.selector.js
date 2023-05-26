import { createSelector } from "reselect";

const userStore = (state) => state.user;

export const selectUserEmail = createSelector(userStore, (user) => user.email);
export const userLoading = createSelector(userStore, (user) => user.isLoading);
export const userError = createSelector(userStore, (user) => user.error);
