import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import { makeReq } from 'utils/makeReq';

export const fetchVendors = createAsyncThunk(
  'vendors/fetchAll',
  async (_, { rejectWithValue }) => {
    return makeReq('/users/vendors')
      .then((resData) => resData.vendors)
      .catch((err) => rejectWithValue(err));
  }
);

const vendorAdapter = createEntityAdapter({
  selectId: (v) => v._id,
});

const initialState = {
  loading: true,
};

const vendorSlice = createSlice({
  name: 'vendors',
  initialState: vendorAdapter.getInitialState(initialState),
  extraReducers: {
    [fetchVendors.fulfilled]: (state, { payload }) => {
      state.loading = false;
      vendorAdapter.addMany(state, payload);
    },
    [fetchVendors.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const simpleVendorsSelectors = vendorAdapter.getSelectors();
//^ get part of state(vendors) from slice
export const globalVendorsSelectors = vendorAdapter.getSelectors(
  (st) => st.vendors
);

//^ To get Single vendor by Id
export const getVendor = createSelector(
  (st) => st.vendors.entities,
  (_, id) => id,
  (entities, id) => entities[id] || {}
);

export default vendorSlice;
