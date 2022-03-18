import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import { makeReq } from 'utils/makeReq';

export const topProducts = createAsyncThunk(
  'products/top',
  async (_, { rejectWithValue }) => {
    return makeReq('/top-sales')
      .then((resData) => resData.data)
      .catch((err) => rejectWithValue(err));
  }
);

export const flashSales = createAsyncThunk(
  'products/sales',
  async (_, { rejectWithValue }) => {
    return makeReq('/flash-sales')
      .then((resData) => resData.data)
      .catch((err) => rejectWithValue(err));
  }
);

const initialState = {
  loading: true,
  sales: [],
  topSelling: [],
};

const vendorSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    //^ Top Selling Products and Services
    [topProducts.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [topProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.topSelling = payload;
    },
    [topProducts.rejected]: (state) => {
      state.loading = false;
    },

    //^ Flash Sales (Products and Services)
    [flashSales.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [flashSales.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.sales = payload;
    },
    [flashSales.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default vendorSlice;
