
import { createSlice } from '@reduxjs/toolkit';
import { products } from '../data';

const initialState = {
  products: products,
  status: 'idle',
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

  },
});

export default productSlice.reducer;