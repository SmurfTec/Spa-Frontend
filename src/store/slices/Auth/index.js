import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { makeReq } from 'utils/makeReq';
import { LOCALSTORAGE_TOKEN_KEY } from 'utils/constants';
import { toast } from 'react-toastify';
import {
  getMe,
  login,
  signUp,
  updateMe,
  forgotPassword,
  resetPassword,
  confirmMail,
  updatePassword,
} from './extraReducers';

const initialState = {
  authenticating: true,
  isLoggedIn: false,
  loading: false,
  user: null,
  token: window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY) || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: {
      reducer: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        state.token = null;
        window.localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
      },
      // * Prepare is a middleware between action and reducer
      // * its usage is to modify payload before passing it to reducer
      // * e.g in our case , we are adding id
      // prepare: (value) => {
      //   return { payload: { completed: false, id: nanoid(5), task: value } };
      // },
    },
  },
  extraReducers: {
    // [getMe.pending] : {

    // }
    // ^ GetMe Reducers
    [getMe.fulfilled]: (state, { payload }) => {
      state.authenticating = false;
      state.isLoggedIn = true;
      state.user = payload.user;
      state.token = payload.token;
    },
    [getMe.rejected]: (state) => {
      state.authenticating = false;
      state.isLoggedIn = false;
    },

    // ^ Login Reducers
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = payload.user;
      state.token = payload.token;
      window.localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, payload.token);
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false;
      toast.error(payload.message);
    },

    // ^ Signup Reducers
    [signUp.pending]: (state) => {
      state.loading = true;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.loading = false;
      toast.success(payload);
    },
    [signUp.rejected]: (state, { payload }) => {
      state.loading = false;
      toast.error(payload);
    },

    // ^ Update Me Reducers
    [updateMe.pending]: (state) => {
      state.loading = true;
    },
    [updateMe.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      toast.success('Your profile have been updated successfully');
    },
    [updateMe.rejected]: (state, { payload }) => {
      state.loading = false;
      toast.success(payload.message);
    },
    // ^ Update Password Reducers
    [updatePassword.pending]: (state) => {
      state.loading = true;
    },
    [updatePassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
      toast.success('Your password have been updated successfully');
    },
    [updatePassword.rejected]: (state, { payload }) => {
      state.loading = false;
      toast.success(payload.message);
    },

    // ^ Forgot Password Reducers
    [forgotPassword.pending]: (state) => {
      state.loading = true;
    },
    [forgotPassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
      toast.success(payload);
    },
    [forgotPassword.rejected]: (state, { payload }) => {
      state.loading = false;
      toast.error(payload);
    },
    // ^ Reset Password Reducers
    [resetPassword.pending]: (state) => {
      state.loading = true;
    },
    [resetPassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = payload.user;
      state.token = payload.token;
      toast.success('Your password have been updated successfully');
    },
    [resetPassword.rejected]: (state, { payload }) => {
      state.loading = false;
      toast.error(payload);
    },
    // ^ Confirm Mail Reducers
    [confirmMail.pending]: (state) => {
      state.loading = true;
    },
    [confirmMail.fulfilled]: (state, { payload }) => {
      state.loading = false;
      toast.success(payload);
    },
    [confirmMail.rejected]: (state, { payload }) => {
      state.loading = false;
      toast.error(payload);
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice;
