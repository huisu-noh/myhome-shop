import { configureStore, createSlice } from '@reduxjs/toolkit';

const stock = createSlice({
  name: 'stock',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    AddCount(state, actions) {
      const num = state.findIndex((index) => index.id === actions.payload);
      state[num].count++;
    },
  },
});

export default configureStore({
  reducer: {
    stock: stock.reducer,
  },
});

export const { AddCount } = stock.actions;
