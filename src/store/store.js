import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import userSaga from "../redux/sagas/user.saga";
import userReducer from "../redux/slices/user.slice";

import authSaga from "../redux/sagas/auth.saga";
import authReducer from "../redux/slices/auth.slice";

import persistConfig from "../redux/persist/persistConfig";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(authSaga);
sagaMiddleware.run(userSaga);

export const persistor = persistStore(store);
