import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.cart.findIndex((element) => element.id === action.payload);
      state.cart.splice(index, 1);
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;


export const selectCart = state => state.cart.cart;

export default cartSlice.reducer;
