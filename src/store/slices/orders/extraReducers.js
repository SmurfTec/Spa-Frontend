import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeReq } from 'utils/makeReq';

//* My Requests

export const myOrders = createAsyncThunk(
  'orders/myOrders',
  async (_, { rejectWithValue }) => {
    return makeReq('/orders/me')
      .then((resData) => resData.orders)
      .catch((err) => rejectWithValue(err));
  }
);

export const createOrder = createAsyncThunk(
  'order/create',
  async (request, { rejectWithValue }) => {
    console.log('REQUEST', request);
    // return makeReq('/orders', { body: request }, 'POST')
    //   .then((resData) => resData.order)
    //   .catch((err) => rejectWithValue(err));
  }
);

export const updateOrder = createAsyncThunk(
  'orders/update',
  async ({ data, id }, { rejectWithValue }) => {
    console.log('UPDATE DATA', data);
    return makeReq(`/orders/${id}`, { body: data }, 'PATCH')
      .then((resData) => resData)
      .catch((err) => rejectWithValue(err));
  }
);

export const deleteOrder = createAsyncThunk(
  'orders/delete',
  async (id, { rejectWithValue }) => {
    return makeReq(`/orders/${id}`, {}, 'DELETE')
      .then((resData) => resData.order)
      .catch((err) => rejectWithValue(err));
  }
);
