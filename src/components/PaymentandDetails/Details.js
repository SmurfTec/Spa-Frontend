import {
  Avatar,
  Box,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import useStyles from 'styles/commonStyles';
import image from 'assets/prod5.jpg';

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

const Details = ({ order }) => {
  console.log('order', order);

  const orderNumber = '1AJH3H78';
  const orderArrives = '27/9 - 29/10';
  const classes_g = useStyles();
  const classes = styles();
  const productQuantity = 2;

  let shippingAddress = 'asds';
  let totalItems = 5;
  let cartTotal = 1000;
  let cartItems = [1, 2, 3];

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
                Your Orders ({totalItems}{' '}
                {totalItems > 1 ? ` items` : ` item`})
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
              <Typography
                variant='subtitle1'
                style={{ color: '#fff' }}
              >
                Order Arrives : {orderArrives}
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ overflowY: 'auto', maxHeight: 270 }}>
              {/* {cartItems.map((el, index) => (
                <>
                  <Box
                    mt={index !== 0 ? 2 : 0}
                    mb={index < cartItems.length - 1 ? 2 : 0}
                    key={el._id}
                    display='flex'
                    gridGap={15}
                    alignItems='center'
                  >
                    <Box>
                      <Avatar
                        className={classes.avatar}
                        variant='square'
                      >
                        <img
                          src={image}
                          alt={el.title}
                          width='100%'
                          height='100%'
                        />
                      </Avatar>
                    </Box>
                    <Box
                      display='flex'
                      gridGap={5}
                      flexDirection='column'
                    >
                      <Typography variant='body2' color='textPrimary'>
                        {el.title}
                      </Typography>
                      <Typography variant='body2' color='textPrimary'>
                        Quantity :{` ${productQuantity}`}
                      </Typography>
                      <Typography
                        variant='h5'
                        color='primary'
                        className={classes_g.lightText}
                      >
                        ${el.price}
                      </Typography>
                    </Box>
                  </Box>
                  {index < cartItems.length - 1 && <Divider />}
                </>
              ))} */}
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
                  {totalItems} {totalItems > 1 ? 'items' : 'item'}{' '}
                  with shipping fee
                </Typography>

                <Box
                  display='flex'
                  justifyContent='space-between'
                  gridGap={5}
                >
                  <Typography variant='h5'>Total Amount</Typography>
                  <Typography
                    variant='subtitle1'
                    alignItems='center'
                    className={classes_g.fontWeight600}
                    style={{ fontSize: '1.1rem' }}
                  >
                    ${cartTotal}
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
              <Box
                display='flex'
                flexDirection='column'
                mb={1}
                mt={1}
              >
                <Typography
                  variant='subtitle1'
                  component='span'
                  className={classes_g.fontWeight600}
                >
                  Address
                </Typography>
                <Box
                  display='flex'
                  px={2}
                  flexDirection='column'
                  gridGap={3}
                >
                  {/* <Typography variant='body2' component='span'>
                    Street : {shippingAddress.fullAddress.street}
                  </Typography>
                  <Typography variant='body2' component='span'>
                    City : {shippingAddress.fullAddress.city}
                  </Typography>
                  <Typography variant='body2' component='span'>
                    Country : {shippingAddress.fullAddress.country}
                  </Typography>
                  <Typography variant='body2' component='span'>
                    Postal Code :{' '}
                    {shippingAddress.fullAddress.postalCode}
                  </Typography> */}
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
                    {shippingAddress.phone}
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
                    {shippingAddress.email}
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

export default Details;
