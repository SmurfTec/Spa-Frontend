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
    return makeReq('/products/?')
      .then((resData) => resData.vendors)
      .catch((err) => rejectWithValue(err));
  }
);

// export const topProducts = createAsyncThunk(
//   'products/sales',
//   async (_, { rejectWithValue }) => {
//     return makeReq('/products/?')
//       .then((resData) => resData.vendors)
//       .catch((err) => rejectWithValue(err));
//   }
// );

const initialState = {
  loading: true,
  sales: [],
  topProducts: [],
};

const vendorSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [topProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.topProducts = payload;
    },
    [topProducts.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default vendorSlice;
