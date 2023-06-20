import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  isLoading: false,
  hasError: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    fetchUser(state) {
      state.isLoading = true;
    },

    getUser(state, action) {
      const user = action.payload;
      state.userInfo = user;
      state.isLoading = false;
    },

    deleteUser(state) {
      state.userInfo = {};
      state.isLoading = false;
    },

    errorFetchingUser(state) {
      state.hasError = true;
    },
  },
});

export const {
  fetchUser,
  getUser,
  deleteUser,
  errorFetchingUser,
} = userSlice.actions;

export default userSlice.reducer;
