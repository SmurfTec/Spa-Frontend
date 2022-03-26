import {
  createSlice,
  createSelector,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import {
  myOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} from './extraReducers';
import { toast } from 'react-toastify';

const myOrdersAdapter = createEntityAdapter({
  selectId: (order) => order._id,
});

const initialState = {
  loading: true,
  isOpen: false,
};

const myOrdersSlice = createSlice({
  name: 'myOrders',
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
    [myOrders.pending]: (state) => {
      state.loading = true;
    },
    [myOrders.fulfilled]: (state, { payload }) => {
      console.log('PAYLOAD', payload);
      state.loading = false;
      myOrdersAdapter.addMany(state, payload);
    },
    [myOrders.rejected]: (state) => {
      state.loading = false;
    },

    //* CREATE REQUESTS
    [createOrder.pending]: (state) => {
      state.loading = true;
    },
    [createOrder.fulfilled]: (state, { payload }) => {
      console.log('payload', payload);
      state.loading = false;
      myOrdersAdapter.addOne(state, payload);
    },
    [createOrder.rejected]: (state) => {
      state.addingNew = false;
    },

    //* UPDATE REQUESTS
    [updateOrder.pending]: (state) => {
      state.loading = true;
    },
    [updateOrder.fulfilled]: (state, { payload }) => {
      // console.log('PAYLOAD', payload);
      toast.success('Success');
      state.loading = false;
      state.isOpen = true;
      myOrdersAdapter.updateOne(state, {
        id: payload.post._id,
        changes: { ...payload.post },
      });

      //
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
