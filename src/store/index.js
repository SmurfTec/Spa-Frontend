import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth';
import vendorSlice from './slices/vendors';

const store = configureStore({
  reducer: combineReducers({
    auth: authSlice.reducer,
    vendors: vendorSlice.reducer,
  }),
});

export default store;
