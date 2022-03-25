import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  OutlinedInput,
} from '@material-ui/core';

import globalStyles from 'styles/commonStyles';
import styles from 'styles/CartStyles';

import { dropDownNumbers } from 'data';
import { getMuiDateFormat } from 'utils/constants';

import CloseIcon from '@material-ui/icons/Close';
import PaymentIcon from '@material-ui/icons/CallToAction';
import { useManyInputs } from 'hooks';

const CheckOutStep = ({
  validateStep,
  cart,
  removeItemFromCart,
  handleTxtChange,
}) => {
  const classes_g = globalStyles();
  const classes = styles();
  const initialState = {
    guests: 1,
    quantity: 1,
  };
  const [state, handleChange, , , ,] = useManyInputs(initialState);

  const handleCart = () => {
    //* dispatch order
    validateStep();
  };
  return (
    <>
      {/* // ^ Services  */}
      {cart.services && cart.services.length > 0 && (
        <TableContainer>
          <Table className={classes.tableWrapper}>
            <TableHead className={classes.tableHeader}>
              <TableRow>
                <TableCell />
                <TableCell>Service</TableCell>
                <TableCell>Price</TableCell>
                <TableCell align='center' style={{ minWidth: 120 }}>
                  Date
                </TableCell>
                <TableCell align='center'>Guests</TableCell>
                <TableCell align='center'>Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.services.map((el) => (
                <TableRow key={el._id}>
                  <TableCell>
                    <IconButton onClick={removeItemFromCart}>
                      <CloseIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>{el.title}</TableCell>
                  <TableCell>{el.price}</TableCell>
                  <TableCell align='center'>
                    {getMuiDateFormat(el.date)}
                  </TableCell>
                  <TableCell align='center'>2</TableCell>
                  <TableCell align='center'>
                    {el.price * state.guests}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {/* // ^ Products in Cart  */}
      {cart.products && cart.products.length > 0 && (
        <TableContainer>
          <Table className={classes.tableWrapper}>
            <TableHead className={classes.tableHeader}>
              <TableRow>
                <TableCell />
                <TableCell>Product</TableCell>
                <TableCell>Price</TableCell>
                <TableCell align='center'>Quantity</TableCell>
                <TableCell align='center'>Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.products.map((el) => (
                <TableRow key={el._id}>
                  <TableCell>
                    <IconButton onClick={removeItemFromCart}>
                      <CloseIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>{el.title}</TableCell>
                  <TableCell>{el.price}</TableCell>
                  <TableCell align='center'>1</TableCell>
                  <TableCell align='center'>
                    {el.price * state.quantity}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Box mt={5}>
        <Grid container>
          <Grid item sm={6} />
          <Grid item xs={12} sm={6}>
            <div className={classes.cartTotalInfo}>
              <div className={classes_g.customGreyBack}>
                <Typography
                  variant='h4'
                  className={classes_g.fontWeight600}
                >
                  Cart Total
                </Typography>
              </div>
              <Box
                display='flex'
                gridGap={15}
                px={2}
                justifyContent='space-between'
                alignItems='center'
              >
                <Typography variant='h5'>Address</Typography>
                <Typography
                  variant='h5'
                  className={classes_g.lightText}
                >
                  {/* ${cart.subtotal} */}
                  $100
                </Typography>
              </Box>
              <Box
                display='flex'
                gridGap={15}
                px={2}
                justifyContent='space-between'
                alignItems='center'
                className={classes_g.customGreyBack}
              >
                <Typography variant='h5'>Subtotal</Typography>
                <Typography variant='h5'>$100</Typography>
              </Box>
              <Box>
                <Button
                  color='secondary'
                  variant='contained'
                  endIcon={<PaymentIcon />}
                  onClick={handleCart}
                >
                  Proceed To Pay
                </Button>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CheckOutStep;
