import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeReq } from 'utils/makeReq';

export const getMe = createAsyncThunk(
  'auth/getMe',
  async (_, { rejectWithValue }) => {
    return makeReq(`/users/me`)
      .then((resData) => ({ token: resData.token, user: resData.user }))
      .catch((err) => rejectWithValue(err));
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    return makeReq(
      `/auth/login`,
      {
        body: {
          email,
          password,
        },
      },
      'POST'
    )
      .then((resData) => ({ token: resData.token, user: resData.user }))
      .catch((err) => rejectWithValue(err));
  }
);

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (user, { rejectWithValue }) => {
    return makeReq(
      `/auth/signUp`,
      {
        body: {
          ...user,
          role: 'buyer',
        },
      },
      'POST'
    )
      .then((resData) => ({ token: resData.token, user: resData.user }))
      .catch((err) => rejectWithValue(err));
  }
);

export const updateMe = createAsyncThunk(
  'users/me',
  async (userInfo, { rejectWithValue }) => {
    return makeReq(
      '/users/me',
      {
        body: {
          ...userInfo,
        },
      },
      'PATCH'
    )
      .then((resData) => resData.user)
      .catch((err) => rejectWithValue(err));
  }
);
