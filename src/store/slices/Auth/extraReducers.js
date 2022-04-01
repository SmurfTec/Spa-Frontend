import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeReq } from 'utils/makeReq';

export const getMe = createAsyncThunk(
  'auth/getMe',
  async (_, { rejectWithValue }) => {
    return makeReq(`/users/me`)
      .then((resData) => ({
        token: resData.token,
        user: resData.user,
      }))
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
      .then((resData) => ({
        token: resData.token,
        user: resData.user,
      }))
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
      .then((resData) => ({
        token: resData.token,
        user: resData.user,
      }))
      .catch((err) => rejectWithValue(err));
  }
);

export const resetPassword = createAsyncThunk(
  'resetPassword',
  async (values, { rejectWithValue }) =>
    makeReq(
      `/auth/resetPassword/${values.token}`,
      {
        body: {
          ...values.pass,
        },
      },
      'PATCH'
    )
      .then((resData) => resData)
      .catch((err) => rejectWithValue(err.message))
);

export const forgotPassword = createAsyncThunk(
  'forgotPassword',
  async (values, { rejectWithValue }) =>
    makeReq(
      `/auth/forgotPassword`,
      {
        body: {
          email: values.email,
        },
      },
      'POST'
    )
      .then((resData) => resData)
      .catch((err) => rejectWithValue(err.message))
);

export const confirmMail = createAsyncThunk(
  'confirmMail',
  async (token, { rejectWithValue }) =>
    makeReq(`/auth/confirmMail/${token}`)
      .then((resData) => resData.message)
      .catch((err) => rejectWithValue(err.message))
);

export const updateMe = createAsyncThunk(
  'auth/updateMe',
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

export const updatePassword = createAsyncThunk(
  'auth/updatePassword',
  async (values, { rejectWithValue }) => {
    return makeReq(
      `/auth/update-password`,
      {
        body: {
          ...values,
        },
      },
      'PATCH'
    )
      .then((resData) => resData.user)
      .catch((err) => rejectWithValue(err));
  }
);

export const handleFavourities = createAsyncThunk(
  'auth/handleFavourities',
  async ({ resource, action, itemId }, { rejectWithValue }) => {
    const resResource =
      resource === 'products' ? 'productFavourites' : 'serviceFavourites';

    return makeReq(`/${resource}/${itemId}/${action}`, {}, 'PATCH')
      .then((resData) => ({
        [resResource]: resData[resResource],
      }))
      .catch((err) => rejectWithValue(err));
  }
);

export const socialLogin = createAsyncThunk(
  'auth/socailLogin',
  async ({ fullName, email, socialType, photo }, { rejectWithValue }) => {
    return makeReq(
      '/auth/sociallogin',
      { body: { fullName, email, socialType, photo } },
      'POST'
    )
      .then((resData) => ({
        token: resData.token,
        user: resData.user,
      }))
      .catch((err) => rejectWithValue(err));
  }
);
