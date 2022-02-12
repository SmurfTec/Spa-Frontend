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

import { useManyInputs, useToggleInput, useTextInput } from 'hooks';
import EditForm from './EditForm';

import globalStyles from 'styles/commonStyles';
import styles from 'styles/CartStyles';

import { dropDownNumbers } from 'data';
import { getMuiDateFormat } from 'utils/constants';

import CloseIcon from '@material-ui/icons/Close';
import PaymentIcon from '@material-ui/icons/CallToAction';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import DoneIcon from '@material-ui/icons/Done';

import clsx from 'clsx';

const shippingFields = [
  { label: 'Address', name: 'address', icon: <LocationOnIcon /> },
  {
    label: 'Phone Number',
    name: 'phoneNumber',

    icon: <PhoneIcon />,
  },
  {
    label: 'Email',
    name: 'email',
    icon: <EmailIcon />,
  },
];

const CartStep = ({
  validateStep,
  cart,
  removeItemFromCart,
  handleTxtChange,
  review,
  handleEdit,
  editedValue,
}) => {
  const classes_g = globalStyles();
  const classes = styles();
  const initialState = {
    guests: 1,
    quantity: 1,
  };

  const [state, handleChange, , , ,] = useManyInputs(initialState);

  const [isEditing, toggle] = useToggleInput(false);
  const [editField, setEditField] = useState(-1);

  const fieldEditing = (e) => {
    const { fieldid } = e.currentTarget.dataset;
    setEditField(fieldid * 1);
    toggle();
  };

  // console.log('cart', cart);

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
                  <TableCell>${el.price}</TableCell>
                  <TableCell align='center'>
                    {getMuiDateFormat(el.date)}
                  </TableCell>
                  <TableCell align='center'>
                    {review ? (
                      2
                    ) : (
                      <FormControl
                        variant='outlined'
                        margin='dense'
                        size='small'
                        fullWidth
                      >
                        <Select
                          name='guests'
                          value={state.guests}
                          onChange={handleChange}
                          displayEmpty
                        >
                          {dropDownNumbers.map((el) => (
                            <MenuItem value={el} key={el}>
                              {el}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  </TableCell>
                  <TableCell align='center'>
                    ${el.price * state.guests}
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
                  <TableCell>${el.price}</TableCell>
                  <TableCell align='center'>
                    {review ? (
                      2
                    ) : (
                      <FormControl
                        variant='outlined'
                        margin='dense'
                        size='small'
                        fullWidth
                      >
                        <Select
                          name='quantity'
                          value={state.quantity}
                          onChange={handleChange}
                          displayEmpty
                        >
                          {dropDownNumbers.map((el) => (
                            <MenuItem value={el} key={el}>
                              {el}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  </TableCell>
                  <TableCell align='center'>
                    ${el.price * state.quantity}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Box mt={5}>
        <Grid container>
          <Grid item sm={5} />
          <Grid item xs={12} sm={7}>
            <div className={classes.cartTotalInfo}>
              <div className={classes_g.customGreyBack}>
                <Typography variant='h5' className={classes_g.fontWeight600}>
                  Cart Total
                </Typography>
              </div>

              {review ? (
                <>
                  {shippingFields?.map((el, index) => (
                    <Box
                      key={el.name}
                      display='flex'
                      alignItems='center'
                      gridGap={15}
                      className={classes.listDivider}
                    >
                      <Box className={classes.iconColor}>{el.icon}</Box>
                      <div className={classes.dispFlex}>
                        {isEditing && editField === index ? (
                          <>
                            <EditForm
                              name={el.name}
                              toggleEditForm={toggle}
                              editedValue={editedValue}
                              classes={classes}
                              value={cart[el.name]}
                            />
                          </>
                        ) : (
                          <>
                            {el.name === 'address' ? (
                              <Box
                                display='flex'
                                flexDirection='column'
                                gridGap={3}
                              >
                                <Box
                                  display='flex'
                                  alignItems='center'
                                  gridGap={15}
                                >
                                  <Typography variant='subtitle2'>
                                    Street :
                                  </Typography>
                                  <Typography variant='body2'>
                                    {cart.shippingAddress.street}
                                  </Typography>
                                </Box>
                                <Box
                                  display='flex'
                                  alignItems='center'
                                  gridGap={15}
                                >
                                  <Typography variant='subtitle2'>
                                    City :
                                  </Typography>
                                  <Typography variant='body2'>
                                    {cart.shippingAddress.city}
                                  </Typography>
                                </Box>
                                <Box
                                  display='flex'
                                  alignItems='center'
                                  gridGap={15}
                                >
                                  <Typography variant='subtitle2'>
                                    Country :
                                  </Typography>
                                  <Typography variant='body2'>
                                    {cart.shippingAddress.country}
                                  </Typography>
                                </Box>
                                <Box
                                  display='flex'
                                  alignItems='center'
                                  gridGap={15}
                                >
                                  <Typography variant='subtitle2'>
                                    Postal Code :
                                  </Typography>
                                  <Typography variant='body2'>
                                    {cart.shippingAddress.postalCode}
                                  </Typography>
                                </Box>
                              </Box>
                            ) : (
                              <>
                                <Typography variant='subtitle2'>
                                  {(el.name !== 'address' &&
                                    cart[el.name] === '') ||
                                  cart[el.name] === -1
                                    ? el.label
                                    : cart[el.name]}
                                </Typography>
                              </>
                            )}
                            {/* <Typography variant='subtitle2'>
                              {el.name === 'address'
                                ? cart.shippingAddress.address === ''
                                  ? el.label
                                  : cart.shippingAddress.address
                                : cart[el.name] === '' || cart[el.name] === -1
                                ? el.label
                                : cart[el.name]}
                            </Typography> */}
                            <Button
                              color='primary'
                              style={{ boxShadow: 'none' }}
                              data-fieldid={index}
                              disabled={isEditing}
                              onClick={fieldEditing}
                            >
                              Edit
                            </Button>
                          </>
                        )}
                      </div>
                    </Box>
                  ))}
                  <Box>
                    <Button
                      color='secondary'
                      variant='contained'
                      endIcon={<PaymentIcon />}
                      onClick={validateStep}
                    >
                      Proceed To Pay
                    </Button>
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                    gridGap={15}
                    px={2}
                    className={classes.listDivider}
                  >
                    <Typography variant='h5'>Subtotal</Typography>
                    <Typography variant='h5' className={classes_g.lightText}>
                      ${cart.subtotal}
                    </Typography>
                  </Box>
                  <Box
                    mt={6}
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                    gridGap={15}
                    px={2}
                    className={classes_g.customGreyBack}
                  >
                    <Typography variant='h5'>Total</Typography>
                    <Typography variant='h5'>${cart.total}</Typography>
                  </Box>
                  <Box>
                    <Button
                      color='secondary'
                      variant='contained'
                      endIcon={<DoneIcon />}
                      onClick={validateStep}
                    >
                      Proceed To Checkout
                    </Button>
                  </Box>
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CartStep;

// {
//   /* //^ Promo Code */
// }
// {
//   /* <Box display='flex' alignItems='center' gridGap='1em'>

//         <FormControl
//           variant='outlined'
//           size='small'
//           className={classes.customtextField}
//         >
//           <OutlinedInput
//             name='promoCode'
//             value={cart.promoCode}
//             onChange={handleTxtChange}
//             labelWidth={0}
//             placeholder='Enter Promotion Code'
//           />
//         </FormControl>
//         <Button color='primary' style={{ minWidth: 100 }}>
//           Apply
//         </Button>
//       </Box> */
// }
