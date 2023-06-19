import { createSelector } from "reselect";

const userStore = (state) => state.user;

export const selectedUserEmail = createSelector(
  userStore,
  (user) => user.userInfo.email
);

export const selectedUserLoading = createSelector(
  userStore,
  (user) => user.isLoading
);

export const selectedUserError = createSelector(
  userStore,
  (user) => user.error
);
