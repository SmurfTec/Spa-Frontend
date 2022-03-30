import {
  Avatar,
  Box,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import useStyles from 'styles/commonStyles';
import image from 'assets/prod5.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrder } from 'store/slices/orders';
import { addReview, getmyOrders } from 'store/slices/orders/extraReducers';
import Loading from 'components/common/Loading';
import Label from 'components/common/CustChipLabel';
const styles = makeStyles((theme) => ({
  gridItem: {
    padding: '1.5em',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    borderRadius: 10,
    backgroundColor: theme.custom.backLightGrey,
  },
  avatar: {
    backgroundColor: 'transparent',
    width: '5em',
    height: '5em',
  },
}));

const OrderDetails = () => {
  const orderNumber = '1AJH3H78';
  const orderArrives = '27/9 - 29/10';
  const classes_g = useStyles();
  const classes = styles();
  const { orderid } = useParams();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const [comment, setComment] = useState('');
  const [reviewId, setReviewId] = useState();

  const { loading, order } = useSelector((state) => ({
    order: orderid ? getOrder(state, orderid) : undefined,
    loading: state.orders.fetching,
  }));

  useEffect(() => {
    if (loading || !order) {
      dispatch(getmyOrders());
    }
  }, [loading]);

  if (!order) <Loading noTitle />;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box height='100%' className={classes.gridItem}>
            <Box width='100%'>
              <Typography
                variant='h5'
                color='primary'
                className={classes_g.fontWeight600}
              >
                Your Orders ({order.products?.length || 1}{' '}
                {order.products?.length || 1 > 1 ? ` items` : ` item`})
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                Order Number : {orderNumber}
              </Typography>
            </Box>
            <Box
              width='100%'
              px={2}
              py={2}
              bgcolor='primary.main'
              borderRadius={5}
            >
              <Typography variant='subtitle1' style={{ color: '#fff' }}>
                Order Arrives : {orderArrives}
              </Typography>
            </Box>
            <Divider />
            <Box>
              {order.products ? (
                order.products.map((el, index) => (
                  <>
                    <Box
                      mt={index !== 0 ? 2 : 0}
                      mb={index < order.productslength - 1 ? 2 : 0}
                      key={el._id}
                      display='flex'
                      gridGap={15}
                      alignItems='center'
                    >
                      <Box>
                        <Avatar className={classes.avatar} variant='square'>
                          <img
                            src={el.product?.images?.[0]?.url}
                            alt={el.title}
                            width='100%'
                            height='100%'
                          />
                        </Avatar>
                      </Box>
                      <Box display='flex' gridGap={5} flexDirection='column'>
                        <Typography variant='body2' color='textPrimary'>
                          {el.product.name}
                        </Typography>
                        <Typography variant='body2' color='textPrimary'>
                          Quantity :{` ${el.quantity}`}
                        </Typography>
                        <Typography
                          variant='h5'
                          color='primary'
                          className={classes_g.lightText}
                        >
                          ${el.subTotal}
                        </Typography>
                      </Box>
                      <Box style={{
                        alignSelf: 'baseline'
                      }}>
                        <Label  color={el.status ==='unpaid' ? 'error' : el.status ==='inProgress' ? 'warning' : 'success'}>
                      {el.status}
                        </Label>

                      </Box>
                    </Box>
                    {index < order.products?.length - 1 && <Divider />}
                  </>
                ))
              ) : (
                <>
                  <Box
                    mt={0}
                    mb={0}
                    key={order.service?.service?._id}
                    display='flex'
                    gridGap={15}
                    alignItems='center'
                  >
                    <Box>
                      <Avatar className={classes.avatar} variant='square'>
                        <img
                          src={image}
                          alt={order.service?.service?.title}
                          width='100%'
                          height='100%'
                        />
                      </Avatar>
                    </Box>
                    <Box display='flex' gridGap={5} flexDirection='column'>
                      <Typography variant='body2' color='textPrimary'>
                        {order.service?.service?.title}
                      </Typography>
                      <Typography variant='body2' color='textPrimary'>
                        Quantity :{` ${1}`}
                      </Typography>
                      <Typography
                        variant='h5'
                        color='primary'
                        className={classes_g.lightText}
                      >
                        ${order.service?.service?.discountPrice}
                      </Typography>
                    </Box>
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            height='100%'
            gridGap={18}
          >
            <Box width='100%' flex={3} className={classes.gridItem}>
              <Typography
                variant='h5'
                color='primary'
                className={classes_g.fontWeight600}
              >
                Order Summary
              </Typography>
              <Box
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
                gridGap={5}
              >
                <Typography variant='caption'>
                  {order.products?.length || 1}{' '}
                  {order.products?.length || 1 > 1 ? 'items' : 'item'} with
                  shipping fee
                </Typography>

                <Box display='flex' justifyContent='space-between' gridGap={5}>
                  <Typography variant='h5'>Total Amount</Typography>
                  <Typography
                    variant='subtitle1'
                    alignItems='center'
                    className={classes_g.fontWeight600}
                    style={{ fontSize: '1.1rem' }}
                  >
                    ${order.total || 1}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              display='flex'
              flexDirection='column'
              gridGap={15}
              bgcolor='#EDEDED'
              px={3}
              py={2}
              borderRadius={10}
            >
              <Typography
                variant='h5'
                color='primary'
                className={classes_g.fontWeight600}
              >
                Details
              </Typography>
              <Box display='flex' flexDirection='column' mb={1} mt={1}>
                <Typography
                  variant='subtitle1'
                  component='span'
                  className={classes_g.fontWeight600}
                >
                  Address
                </Typography>
                <Box display='flex' px={2} flexDirection='column' gridGap={3}>
                  <Typography variant='body2' component='span'>
                    Street : {order.street}
                  </Typography>
                  <Typography variant='body2' component='span'>
                    City : {order.city}
                  </Typography>
                  <Typography variant='body2' component='span'>
                    Country : {order.country}
                  </Typography>
                  <Typography variant='body2' component='span'>
                    Postal Code : {order.postalCode}
                  </Typography>
                </Box>
              </Box>
              <Divider />

              <Box display='flex' flexDirection='column' mb={1}>
                <Typography
                  component='span'
                  variant='subtitle1'
                  className={classes_g.fontWeight600}
                >
                  Phone No.
                </Typography>
                <Box px={2}>
                  <Typography variant='body2' component='span'>
                    {order.phoneNumber}
                  </Typography>
                </Box>
              </Box>
              <Divider />

              <Box display='flex' flexDirection='column'>
                <Typography
                  variant='subtitle1'
                  className={classes_g.fontWeight600}
                  component='span'
                >
                  Email
                </Typography>
                <Box px={2}>
                  <Typography variant='body2' component='span'>
                    {order.email}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default OrderDetails;
