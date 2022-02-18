import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { makeReq } from 'utils/makeReq';
import { LOCALSTORAGE_TOKEN_KEY } from 'utils/constants';

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
  async (_, { rejectWithValue }) => {
    return makeReq(`/auth/signUp`)
      .then((resData) => ({ token: resData.token, user: resData.user }))
      .catch((err) => rejectWithValue(err));
  }
);

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
        console.log(`action`, action);
        state.isLoggedIn = false;
        state.user = null;
        state.token = null;
        window.localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
      },
      // * Prepare is a middleware between action and reducer
      // * its usage is to modify payload before passing it to reducer
      // * e.g in our case , we are adding id
      // prepare: (value) => {
      //   console.log(`value`, value);
      //   return { payload: { completed: false, id: nanoid(5), task: value } };
      // },
    },
  },
  extraReducers: {
    // [getMe.pending] : {

    // }
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
    [login.rejected]: (state) => {
      state.loading = false;
      state.isLoggedIn = false;
    },

    [signUp.pending]: (state) => {
      state.loading = true;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      console.log('payload', payload);
      state.loading = false;
      state.isLoggedIn = true;
      state.user = payload.user;
      state.token = payload.token;
      window.localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, payload.token);
    },
    [signUp.rejected]: (state) => {
      state.loading = false;
      state.isLoggedIn = false;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice;
