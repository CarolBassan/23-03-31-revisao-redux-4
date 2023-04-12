/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TProfile } from '../../../pages/Profile/types';

const initialState = {
  value: {} as TProfile,
};

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    saveProfile: (_, action:PayloadAction<TProfile>) => ({ value: action.payload }),

  },
});
export const { saveProfile } = slice.actions;
export const profileReducers = slice.reducer;
