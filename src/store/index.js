import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/Auth';
import vendorSlice from './slices/vendors';
import productSlice from './slices/products';
import getAllSlice from './slices/getAll';
import getMyOrders from './slices/orders';
import myCartSlice from './slices/cart';

const store = configureStore({
  reducer: combineReducers({
    auth: authSlice.reducer,
    vendors: vendorSlice.reducer,
    products: productSlice.reducer,
    getAll: getAllSlice.reducer,
    orders: getMyOrders.reducer,
    cart: myCartSlice.reducer,
  }),
});

export default store;
