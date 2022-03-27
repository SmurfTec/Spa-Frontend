import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeReq } from 'utils/makeReq';

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
