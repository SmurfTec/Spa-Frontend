import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fetchingCart: true,
  loading: false,
  cartItems: window.localStorage.getItem('cart') || [],
  total: 0,
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
