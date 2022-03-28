import React, { useState, useEffect } from 'react';
import Payment from './Payment';
import Details from './Details';
import { Box, Grid, Typography } from '@material-ui/core';
import useStyles from 'styles/commonStyles';
import { getOrder } from 'store/slices/orders';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getmyOrders } from 'store/slices/orders/extraReducers';
import { Skeleton } from '@material-ui/lab';

const PaymentDetails = () => {
  const [check, setCheck] = useState(true);
  const classes_g = useStyles();
  const dispatch = useDispatch();
  const { orderid } = useParams();
  console.log('orderid', orderid);

  const { loading, order } = useSelector((state) => ({
    order: orderid ? getOrder(state, orderid) : undefined,
    loading: state.orders.fetching,
  }));

  useEffect(() => {
    if (loading || !order) {
      dispatch(getmyOrders());
    }
  }, [loading]);

  console.log('ORDER...', order);
  console.log('loading...', loading);

  if (loading || !order) {
    return Array(1)
      .fill()
      .map((_, idx) => (
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Skeleton
              style={{
                marginBlock: '2rem',
              }}
              variant='rectangular'
              animation='wave'
              height={400}
              key={idx}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Skeleton
              style={{
                marginBlock: '2rem',
              }}
              variant='rectangular'
              animation='wave'
              height={400}
              key={idx}
            />
          </Grid>
        </Grid>
      ));
  }

  return (
    <>
      <Typography
        variant='h4'
        style={{ margin: '1rem 1.4rem 0rem' }}
        className={classes_g.fontWeight600}
      >
        {order?.status !== 'completed' ? 'Payment' : 'Order Details'}
      </Typography>
      <Box display='flex' alignItems='center' gridGap={15}>
        {order?.status !== 'completed' ? (
          <Payment order={order} />
        ) : (
          <Details order={order} />
        )}
      </Box>
    </>
  );
};

export default PaymentDetails;
