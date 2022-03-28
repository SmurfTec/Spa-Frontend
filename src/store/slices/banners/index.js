import { createSlice } from '@reduxjs/toolkit';
import { getBanners } from './extraReducers';

const initialState = {
  fetching: false,
  banners: undefined,
};

const bannersSlice = createSlice({
  name: 'banners',
  initialState,
  extraReducers: {
    [getBanners.pending]: (state) => {
      state.fetching = true;
    },
    [getBanners.fulfilled]: (state, { payload }) => {
      state.fetching = false;
      state.banners = payload;
    },
    [getBanners.rejected]: (state) => {
      state.fetching = false;
    },
  },
});

export default bannersSlice;
