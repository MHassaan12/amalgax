import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authApi } from './api/authApi';
import { usersApi } from './api/usersApi';
import { adminApi } from './api/adminApi';
import auth from './state/authSlice';
import admin from './state/adminSlice';

export const store = configureStore({
  reducer: {
    auth,
    admin,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(usersApi.middleware).concat(adminApi.middleware),
});

setupListeners(store.dispatch)