import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/Auth';
import vendorSlice from './slices/vendors';
import productSlice from './slices/products';
import getAllSlice from './slices/getAll';
import cartSlice from './slices/cart';

const store = configureStore({
  reducer: combineReducers({
    auth: authSlice.reducer,
    vendors: vendorSlice.reducer,
    products: productSlice.reducer,
    getAll: getAllSlice.reducer,
    cart: cartSlice.reducer,
  }),
});

export default store;
