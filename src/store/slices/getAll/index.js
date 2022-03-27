import { createSlice } from '@reduxjs/toolkit';
import {
  allProducts,
  allServices,
  getFlashSales,
} from './extraReducers';

const initialState = {
  fetching: false,
  products: undefined,
  services: undefined,
  sales: undefined,
};

const getAllSlice = createSlice({
  name: 'common',
  initialState,
  extraReducers: {
    [allProducts.pending]: (state) => {
      state.fetching = true;
    },
    [allProducts.fulfilled]: (state, { payload }) => {
      state.fetching = false;
      state.products = payload;
    },
    [allProducts.rejected]: (state) => {
      state.fetching = false;
    },

    [allServices.pending]: (state) => {
      state.fetching = true;
    },
    [allServices.fulfilled]: (state, { payload }) => {
      state.fetching = false;
      state.services = payload;
    },
    [allServices.rejected]: (state) => {
      state.fetching = false;
    },

    [getFlashSales.pending]: (state) => {
      state.fetching = true;
    },
    [getFlashSales.fulfilled]: (state, { payload }) => {
      state.fetching = false;
      state.sales = payload;
    },
    [getFlashSales.rejected]: (state) => {
      state.fetching = false;
    },
  },
});

export default getAllSlice;
