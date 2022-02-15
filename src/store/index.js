import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/Auth';

const store = configureStore({
  reducer: combineReducers({ auth: authSlice.reducer }),
});

export default store;
