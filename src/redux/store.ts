import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './reducers';

// Redux Persist yapılandırması
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux store oluşturma
export const store = configureStore({
  reducer: persistedReducer,
});

// Redux Persistor
export const persistor = persistStore(store);

// Store'un tipini oluşturma
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
