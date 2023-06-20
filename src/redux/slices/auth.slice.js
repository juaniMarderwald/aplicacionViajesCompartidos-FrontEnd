import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  token: null,
  isAuth: false,
  isLoading: false,
  hasError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setToken(state, action) {
      const { token } = action.payload;
      state.token = token;
      state.isAuth = true;
      state.hasError = false;
    },

    getToken(state, action) {
      const token = action.payload;
      state.token = token;
      state.isAuth = true;
    },

    deleteToken(state) {
      Cookies.remove("token");
      state.token = null;
      state.isAuth = false;
      state.hasError = false;
    },

    userLogin(state) {
      state.isLoading = true;
    },

    userRegister(state) {
      state.isLoading = true;
    },

    userLoginSuccess(state, action) {
      const { token } = action.payload;
      state.token = token;
      state.isAuth = true;
      state.isLoading = false;
    },

    userRegisterSuccess(state, action) {
      const { token } = action.payload;
      state.token = token;
      state.isAuth = true;
      state.isLoading = false;
    },

    errorFetchingUser(state) {
      state.isLoading = false;
      state.hasError = true;
    },

    error(state) {
      state.hasError = true;
    },
  },
});

export const {
  userLogin,
  userLoginSuccess,
  userRegister,
  userRegisterSuccess,
  setToken,
  getToken,
  deleteToken,
  errorFetchingUser,
  error,
} = authSlice.actions;

export default authSlice.reducer;
