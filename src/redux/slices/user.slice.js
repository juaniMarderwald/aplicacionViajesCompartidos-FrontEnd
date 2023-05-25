import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  hasError: false,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    userLogin(state) {
      state.isLoading = true;
    },

    userLoginSuccess(state, action) {
      const data = action.payload;
      console.log({ data });
      state.user = data;
      state.isLoading = false;
    },

    userRegisterSuccess(state, action) {
      const data = action.payload || {};
      state.user = data;
      state.isLoading = false;
    },

    errorFetchingUser(state) {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const {
  userLogin,
  userLoginSuccess,
  userRegisterSuccess,
  errorFetchingUser,
} = userSlice.actions;

export default userSlice.reducer;
