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
import { getMuiDateFormat } from 'utils/constants';
import EditForm from './EditForm';
import globalStyles from 'styles/commonStyles';
import styles from 'styles/CartStyles';
import { dropDownNumbers } from 'data';
import CloseIcon from '@material-ui/icons/Close';
import PaymentIcon from '@material-ui/icons/CallToAction';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import DoneIcon from '@material-ui/icons/Done';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { removeFromCart } from 'store/slices/cart';
import { createOrder } from 'store/slices/orders/extraReducers';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
  // removeItemFromCart,
  handleTxtChange,
  review,
  handleEdit,
  editedValue,
}) => {
  const classes_g = globalStyles();
  const classes = styles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEditing, toggle] = useToggleInput(false);
  const [editField, setEditField] = useState(-1);
  const [quantityState, setQuantityState] = useState(1);

  const fieldEditing = (e) => {
    const { fieldid } = e.currentTarget.dataset;
    setEditField(fieldid * 1);
    toggle();
  };

  const handleQuantity = (e) => {
    console.log('E', e.target.value);
    setQuantityState(e.target.value);
  };

  const handleRemoveItemFromCart = (e) => {
    const { product } = e.currentTarget.dataset;
    dispatch(removeFromCart(product));
    // removeItemFromCart(cart);
  };

  const handleProceedToPay = () => {
    // console.log('Proceed to pay', cart);
    dispatch(createOrder(cart)).then((value) => {
      console.log('Value', value);
      if (value.error) {
        toast.error(
          value.payload.message ? value.payload.message : 'Something went wrong'
        );
      } else {
        setTimeout(() => {
          navigate(`/paymentDetails/${value.payload._id}`);
        }, 500);
        console.log('Success');
      }
    });
  };

  return (
    <>
      {/* // ^ Cart Items  */}
      {cart.products && cart.products.length > 0 ? (
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
                <TableRow key={el.product._id}>
                  <TableCell>
                    <IconButton
                      onClick={handleRemoveItemFromCart}
                      data-product={el.product._id}
                    >
                      <CloseIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>{el.product.name}</TableCell>
                  <TableCell>S${el.product.discountPrice}</TableCell>
                  {/* <TableCell align='center'>
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
                          value={el.quantity}
                          onChange={handleQuantity}
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
                  </TableCell> */}
                  <TableCell align='center'>{el.quantity}</TableCell>
                  <TableCell align='center'>
                    S${el.product.discountPrice * el.quantity}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
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
              <TableRow>
                <TableCell></TableCell>
                <TableCell>No product Yet!</TableCell>
                <TableCell>0</TableCell>
                <TableCell align='center'>0</TableCell>
                <TableCell align='center'>0</TableCell>
              </TableRow>
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
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                  gridGap={15}
                >
                  <Typography variant='h5' className={classes_g.fontWeight600}>
                    Cart Total
                  </Typography>
                  {review && (
                    <Typography
                      variant='subtitle1'
                      className={classes_g.fontWeight600}
                    >
                      ${cart.total}
                    </Typography>
                  )}
                </Box>
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
                      onClick={handleProceedToPay}
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
                      disabled={cart.products.length === 0}
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
