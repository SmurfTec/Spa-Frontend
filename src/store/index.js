import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/Auth';
import vendorSlice from './slices/vendors';
import productSlice from './slices/products';
import getAllSlice from './slices/getAll';

const store = configureStore({
  reducer: combineReducers({
    auth: authSlice.reducer,
    vendors: vendorSlice.reducer,
    products: productSlice.reducer,
    getAll: getAllSlice.reducer,
  }),
});

export default store;
