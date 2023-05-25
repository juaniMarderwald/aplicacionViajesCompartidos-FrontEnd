import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import userSaga from "../redux/sagas/user.saga";
import userReducer from "../redux/slices/user.slice";

import persistConfig from "../redux/persist/persistConfig";

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(userSaga);

export const persistor = persistStore(store);
