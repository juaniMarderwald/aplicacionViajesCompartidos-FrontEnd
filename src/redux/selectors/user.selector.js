import { createSelector } from "reselect";

const userStore = (state) => state.user;

export const selectedUserEmail = createSelector(
  userStore,
  (user) => user.userInfo.email
);

export const selectedUser = createSelector(userStore, (user) => {
  const email = user?.userInfo?.email;
  if (email) {
    const username = email.split("@")[0];
    return username;
  } else {
    return "";
  }
});

export const selectedUserLoading = createSelector(
  userStore,
  (user) => user.isLoading
);

export const selectedUserError = createSelector(
  userStore,
  (user) => user.error
);
