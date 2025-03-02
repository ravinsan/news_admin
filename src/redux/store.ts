import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { userReducer } from '@/redux/slice/userReducer';

const persistConfig = {
  key:"root",
  storage,
}

 const persistedUserReducer = persistReducer(persistConfig, userReducer.reducer);

export const store = configureStore({
  reducer:{
    user:persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware({
    serializableCheck: {
     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
   },
  }),
});

export let persistor = persistStore(store);