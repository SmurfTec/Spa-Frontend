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
  const classes_g = useStyles();
  const classes = styles();

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
                Your Orders ({order?.products?.length} items)
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                Order Number : {order?._id}
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
                Order : {new Date(order.createdAt).toDateString()}
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ overflowY: 'auto', maxHeight: 270 }}>
              {order &&
                order.products.length > 0 &&
                order?.products.map((el, index) => (
                  <>
                    <Box
                      mt={index !== 0 ? 2 : 0}
                      mb={index < order?.products - 1 ? 2 : 0}
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
                            alt={el.name}
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
                        <Typography
                          variant='body2'
                          color='textPrimary'
                        >
                          {el.product.name}
                        </Typography>
                        <Typography
                          variant='body2'
                          color='textPrimary'
                        >
                          Quantity :{el.quantity}
                        </Typography>
                        <Typography
                          variant='h5'
                          color='primary'
                          className={classes_g.lightText}
                        >
                          ${Math.floor(el.product.price)}
                        </Typography>
                      </Box>
                    </Box>
                    <Divider />
                  </>
                ))}
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
                  {order?.products?.length} with shipping fee
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
                    ${Math.floor(order?.total)}
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
                  <Typography variant='body2' component='span'>
                    Street : {order.shippingAddress.street}
                  </Typography>
                  <Typography variant='body2' component='span'>
                    City : {order.shippingAddress.city}
                  </Typography>
                  <Typography variant='body2' component='span'>
                    Country : {order.shippingAddress.country}
                  </Typography>
                  <Typography variant='body2' component='span'>
                    Postal Code : {order.shippingAddress.postalCode}
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

export default Details;
