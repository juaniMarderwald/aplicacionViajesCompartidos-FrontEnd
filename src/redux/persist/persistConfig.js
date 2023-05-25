import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], // Lista de reducers que deseas persistir
};

export default persistConfig;
