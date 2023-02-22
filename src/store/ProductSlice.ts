import { createSlice } from '@reduxjs/toolkit';
import data from '../data';

const product = createSlice({
  name: 'product',
  initialState: data,
  reducers: {},
});

export const {} = product.actions;

export default product;
