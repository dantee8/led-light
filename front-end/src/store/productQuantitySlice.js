import { createSlice } from '@reduxjs/toolkit';


const productQuantitySlice = createSlice({
  name: 'productQuantity',
  initialState: {},
  reducers: {
    incrementProductQuantity(state, action) {
      const { productId } = action.payload;
      state[productId] = (state[productId] || 0) + 1;
    },
    decrementProductQuantity(state, action) {
      const { productId } = action.payload;
      if (state[productId] && state[productId] > 0) {
        state[productId]--;
      }
    },
  },
});

export const { incrementProductQuantity, decrementProductQuantity } = productQuantitySlice.actions;

export default productQuantitySlice.reducer;