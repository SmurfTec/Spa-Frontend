import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth';
import vendorSlice from './slices/vendors';
import productSlice from './slices/products';

const store = configureStore({
  reducer: combineReducers({
    auth: authSlice.reducer,
    vendors: vendorSlice.reducer,
    products: productSlice.reducer,
  }),
});

export default store;
