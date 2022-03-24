import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: window.localStorage.getItem('cart') || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.cartItem];
    },
    removeFromCart: {},
    updateCart: {},
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice;
