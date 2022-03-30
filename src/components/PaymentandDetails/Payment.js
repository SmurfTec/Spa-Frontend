import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';

import globalStyles from 'styles/commonStyles';

import CashOnDeliveryIcon from '@material-ui/icons/MonetizationOn';
import CreditCardIcon from '@material-ui/icons/CallToAction';
import SendIcon from '@material-ui/icons/Send';

import express from 'assets/americanexpress.svg';
import masterCard from 'assets/mastercard.svg';
import visa from 'assets/visa.svg';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const styles = makeStyles((theme) => ({
  tabButtons: {
    flex: 1,
    '& .MuiButton-label': {
      flexDirection: 'column',
      gap: 5,
    },
  },
  greenAvatar: {
    backgroundColor: theme.palette.success.dark,
  },
  formGrid: {},
  orderSummery: {
    display: 'flex',
    alignItems: 'end',
    flexDirection: 'column',
    gap: '1.5em',
  },
}));

const Payment = ({ order }) => {
  const classes_g = globalStyles();
  const classes = styles();
  const [state, setState] = useState(0);
  const { orderid } = useParams();
  const navigate = useNavigate();
  let shippingAddress = 'asds';
  let totalItems = 5;
  let cartTotal = 1000;

  console.log('order', order);

  const handlePayment = () => {
    console.log('PAYMENT');
    toast.success('Order Paid Successfully');
    navigate(`/customer/orders/${orderid}`);
  };
  return (
    <>
      <Grid container spacing={2} style={{ margin: '0rem 1rem 0rem' }}>
        <Grid item xs={12} sm={7} className={classes.formGrid}>
          <Box
            display='flex'
            gridGap={15}
            alignItems='center'
            flexDirection='column'
            width='100%'
          >
            <Box
              my={1}
              display='flex'
              alignItems='center'
              gridGap={15}
              width='100%'
            >
              <Button
                variant={state === 0 ? 'contained' : 'outlined'}
                color={state === 0 ? 'primary' : 'default'}
                startIcon={<CreditCardIcon />}
                onClick={() => setState(0)}
                className={classes.tabButtons}
              >
                Credit/Debit Card
              </Button>
              <Button
                variant={state === 1 ? 'contained' : 'outlined'}
                color={state === 1 ? 'primary' : 'default'}
                startIcon={<CashOnDeliveryIcon />}
                onClick={() => setState(1)}
                className={classes.tabButtons}
              >
                Cash On Delivery
              </Button>
            </Box>

            {state === 0 ? (
              <>
                <Box
                  width='100%'
                  display='flex'
                  gridGap={15}
                  alignItems='center'
                  justifyContent='space-between'
                  borderRadius={5}
                  bgcolor='#EDEDED'
                  px={2}
                  py={1}
                >
                  <Box display='flex' alignItems='center' gridGap={15}>
                    <Avatar className={classes.greenAvatar}>
                      <AssignmentTurnedInIcon />
                    </Avatar>
                    <Typography variant='subtitle1'>We accept</Typography>
                  </Box>
                  <Box display='flex' gridGap={15}>
                    <Avatar variant='square' className={classes_g.avatar}>
                      <img
                        src={express}
                        alt='American Express'
                        width='100%'
                        height='100%'
                      />
                    </Avatar>
                    <Avatar variant='square' className={classes_g.avatar}>
                      <img
                        src={masterCard}
                        alt='Master Card'
                        width='100%'
                        height='100%'
                      />
                    </Avatar>
                    <Avatar variant='square' className={classes_g.avatar}>
                      <img src={visa} alt='Visa' width='100%' height='100%' />
                    </Avatar>
                  </Box>
                </Box>

                <Box width='100%'>
                  <Typography variant='subtitle1'>*Name on Card</Typography>
                  <TextField
                    margin='dense'
                    value=''
                    // onChange={handleChange}
                    fullWidth
                    autoFocus
                    variant='outlined'
                    placeholder='Name on Card'
                  />
                </Box>
                <Box width='100%'>
                  <Typography variant='subtitle1'>*Card Number</Typography>
                  <TextField
                    margin='dense'
                    value=''
                    // onChange={handleChange}
                    fullWidth
                    autoFocus
                    variant='outlined'
                    placeholder='Card Number'
                  />
                </Box>
                <Box width='100%'>
                  <Box display='flex' alignItems='center' gridGap={15}>
                    <Box flex={1}>
                      <Typography variant='subtitle1'>*Expire Date</Typography>
                      <TextField
                        margin='dense'
                        value=''
                        // onChange={handleChange}
                        fullWidth
                        autoFocus
                        variant='outlined'
                        placeholder='MM/YY'
                      />
                    </Box>
                    <Box flex={1}>
                      <Box>
                        <Typography variant='subtitle1'>*CVV</Typography>
                        <TextField
                          margin='dense'
                          value=''
                          // onChange={handleChange}
                          fullWidth
                          autoFocus
                          variant='outlined'
                          placeholder='CVV'
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box
                  width='100%'
                  display='flex'
                  alignItems='center'
                  sx={{ columnGap: 10 }}
                >
                  <Checkbox
                    color='primary'
                    name='rememberMe'
                    // checked={inputState.rememberMe}
                    // onChange={(e) => handleToggleChange(e)}
                    style={{ boxShadow: 'none', padding: 0 }}
                  />
                  <Typography variant='body1'>Remember my details</Typography>
                </Box>
              </>
            ) : (
              <>
                <Box
                  width='100%'
                  display='flex'
                  flexDirection='column'
                  gridGap={5}
                  justifyContent='space-between'
                  borderRadius={10}
                  bgcolor='#EDEDED'
                  px={2}
                  py={1}
                >
                  <Box mb={1}>
                    <Typography
                      variant='h4'
                      color='primary'
                      className={classes_g.fontWeight600}
                    >
                      Shipping Info
                    </Typography>
                  </Box>

                  <Box display='flex' flexDirection='column' mb={1}>
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
                        Street : {shippingAddress.fullAddress.street}
                      </Typography>
                      <Typography variant='body2' component='span'>
                        City : {shippingAddress.fullAddress.city}
                      </Typography>
                      <Typography variant='body2' component='span'>
                        Country : {shippingAddress.fullAddress.country}
                      </Typography>
                      <Typography variant='body2' component='span'>
                        Postal Code : {shippingAddress.fullAddress.postalCode}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />

                  <Box display='flex' flexDirection='column' mb={1}>
                    <Typography
                      variant='subtitle1'
                      component='span'
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

                  <Box display='flex' flexDirection='column' mb={1}>
                    <Typography
                      variant='subtitle1'
                      component='span'
                      className={classes_g.fontWeight600}
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
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={5} className={classes.orderSummery}>
          <Box flex={1} />
          <Box width='100%' flex={3}>
            <Box
              bgcolor='#EDEDED'
              width='90%'
              px={3}
              py={3}
              borderRadius={10}
              marginLeft='auto'
            >
              <Typography
                variant='h4'
                color='primary'
                className={classes_g.fontWeight600}
              >
                Order Summary
              </Typography>
              <Box
                mt={2}
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
                gridGap={5}
              >
                <Typography variant='caption'>
                  {order?.products?.length} items with shipping fee
                </Typography>

                <Box display='flex' justifyContent='space-between' gridGap={5}>
                  <Typography variant='h5'>Total Amount</Typography>
                  <Typography
                    variant='subtitle1'
                    alignItems='center'
                    className={classes_g.fontWeight600}
                    style={{ fontSize: '1.1rem' }}
                  >
                    ${order.total}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Button
              variant='contained'
              color='secondary'
              endIcon={<SendIcon />}
              onClick={handlePayment}
            >
              Pay Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Payment;
