import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { makeReq } from 'utils/makeReq';

const initialState = {
  fetching: false,
  products: undefined,
  services: undefined,
  sales: undefined,
};

export const allProducts = createAsyncThunk(
  'allProducts',
  async (_, { rejectWithValue }) => {
    return makeReq('/products/approved')
      .then((reqData) => {
        return reqData.products;
      })
      .catch((err) => rejectWithValue(err));
  }
);

export const allServices = createAsyncThunk(
  'allServices',
  async (_, { rejectWithValue }) => {
    return makeReq('/services/approved')
      .then((reqData) => reqData.services)
      .catch((err) => rejectWithValue(err));
  }
);

export const getFlashSales = createAsyncThunk(
  'allFlashSales',
  async (_, { rejectWithValue }) => {
    return makeReq('/flash-sales')
      .then((reqData) => reqData.flashSales)
      .catch((err) => rejectWithValue(err));
  }
);

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
