import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrementar: (state, action) => {
      const novoEstado = state.value - action.payload;
      return { value: novoEstado };
    },
    incrementar: (state, action) => {
      const novoEstado = state.value + action.payload;
      return { value: novoEstado };
    },
    clear: () => initialState,
  },
});

export const { decrementar, incrementar, clear } = slice.actions;
export const counterReducers = slice.reducer;
