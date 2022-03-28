import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeReq } from 'utils/makeReq';

export const getBanners = createAsyncThunk(
  'getAllBanners',
  async (_, { rejectWithValue }) => {
    return makeReq('/banners')
      .then((reqData) => {
        return reqData.banners;
      })
      .catch((err) => rejectWithValue(err));
  }
);
