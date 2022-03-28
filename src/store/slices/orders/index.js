import {
  createSlice,
  createSelector,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import {
  getmyOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  addReview,
} from './extraReducers';
import { toast } from 'react-toastify';

const myOrdersAdapter = createEntityAdapter({
  selectId: (order) => order._id,
});

const initialState = {
  fetching: true,
  loading: true,
  isOpen: false,
};

const myOrdersSlice = createSlice({
  name: 'getmyOrders',
  initialState: myOrdersAdapter.getInitialState(initialState),

  reducers: {
    toggleSuccess: {
      reducer: (state, action) => {
        state.isOpen = false;
      },
    },
  },

  extraReducers: {
    //* Get my Orders
    [getmyOrders.pending]: (state) => {
      state.fetching = true;
    },
    [getmyOrders.fulfilled]: (state, { payload }) => {
      console.log('PAYLOAD', payload);
      state.fetching = false;
      myOrdersAdapter.addMany(state, payload);
    },
    [getmyOrders.rejected]: (state) => {
      state.fetching = false;
    },

    //* CREATE REQUESTS
    [createOrder.pending]: (state) => {
      state.loading = true;
    },
    [createOrder.fulfilled]: (state, { payload }) => {
      console.log('payload', payload);
      state.loading = false;
      myOrdersAdapter.addOne(state, payload);
      //* remove items from localStorage
      localStorage.removeItem('spaCart');
      toast.success('Order Created');
    },
    [createOrder.rejected]: (state) => {
      state.addingNew = false;
      state.loading = false;
    },

    //* UPDATE REQUESTS
    [updateOrder.pending]: (state) => {
      state.loading = true;
    },
    [updateOrder.fulfilled]: (state, { payload }) => {
      // console.log('PAYLOAD', payload);
      state.loading = false;
      state.isOpen = true;
      myOrdersAdapter.updateOne(state, {
        id: payload.post._id,
        changes: { ...payload.post },
      });
      toast.success('Success');
    },

    [updateOrder.rejected]: (state) => {
      state.loading = false;
    },

    //* DELETE REQUESTS

    [deleteOrder.pending]: (state) => {
      state.loading = true;
    },
    [deleteOrder.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // state.orders = state.orders.filter((el) => el._id !== payload?.posts._id);
      myOrdersAdapter.removeOne(state, payload._id);
      toast.success('Order Deleted successfully');
    },
    [deleteOrder.rejected]: (state) => {
      state.loading = false;
    },

    //* AddReview
    [addReview.pending]: (state) => {
      state.loading = true;
    },
    [addReview.fulfilled]: (state, { payload }) => {
      // console.log('PAYLOAD', payload);
      state.loading = false;
      state.isOpen = true;
      myOrdersAdapter.updateOne(state, {
        id: payload.post._id,
        changes: { ...payload },
      });
      toast.success('Success');
    },
    [addReview.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const simpleMyOrdersSelectors = myOrdersAdapter.getSelectors();

export const globalMyOrdersSelectors = myOrdersAdapter.getSelectors(
  (st) => st.orders
);

export const getOrder = createSelector(
  (st) => st.orders.entities,
  (_, id) => id,
  (entities, id) => entities[id] || {}
);

export const { toggleSuccess } = myOrdersSlice.actions;

export default myOrdersSlice;
