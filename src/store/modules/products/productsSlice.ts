import { PayloadAction, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '../..';

export type TProduct = {
  id: number,
  title: string,
  price: number,
}

const adapter = createEntityAdapter<TProduct>({
  selectId: (item) => item.id,
});

const slice = createSlice({
  name: 'products',
  initialState: adapter.getInitialState(),
  reducers: {
    salvarLocalStorage: (state, action) => {
      const retorno = adapter.addOne(state, action.payload);

      localStorage.setItem('retorno', JSON.stringify(retorno));

      return retorno;
    },
    salvar: adapter.addOne,
    apagar: adapter.removeOne,
    editar: adapter.updateOne,
  },
});

export const { selectAll: selectAllProducts } = adapter.getSelectors((state: RootState) => state.products);
export const {
  salvar, apagar, editar, salvarLocalStorage,
} = slice.actions;
export const productsReducers = slice.reducer;
