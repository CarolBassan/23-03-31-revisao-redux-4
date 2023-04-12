import { configureStore } from '@reduxjs/toolkit';
import { counterReducers } from './modules/counter/counterSlice';
import { productsReducers } from './modules/products/productsSlice';
import { profileReducers } from './modules/profile/profileSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducers,
    profile: profileReducers,
    products: productsReducers,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
