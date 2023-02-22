import { configureStore } from '@reduxjs/toolkit';
import stock from './store/CartSlice';
import product from './store/ProductSlice';

export default configureStore({
  reducer: {
    stock: stock.reducer,
    product: product.reducer,
  },
});
