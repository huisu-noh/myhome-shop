import { createSlice } from '@reduxjs/toolkit';

const data = [
  { id: 0, name: 'White and Black', count: 2 },
  { id: 2, name: 'Grey Yordan', count: 1 },
];

const stock = createSlice({
  name: 'stock',
  initialState: data,
  reducers: {
    AddCount(state, actions) {
      const num = state.findIndex((index) => index.id === actions.payload);
      state[num].count++;
    },
    AddItem(state, actions) {
      state.push(actions.payload);
    },
  },
});

export const { AddCount, AddItem } = stock.actions;

export default stock;
