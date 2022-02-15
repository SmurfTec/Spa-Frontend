import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { IconButton, Typography, Box } from '@material-ui/core';
import { useManyInputs } from 'hooks';

import globalStyles from 'styles/commonStyles';
import useStyles from 'styles/CartStyles';

import { cartProd, cartServ } from 'data';

// import Cart from './Cart';
import Cart from './Cart';
import ReviewCart from './Step2';
import PaymentStep from './Step3';
import OrderDetails from './Step4';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import clsx from 'clsx';
import { getTotal } from 'utils/constants';

// function getSteps() {
//   return ['Cart', 'Checkout', 'Payment', 'OrderDetails'];
// }

function getSteps() {
  return ['Cart', 'Cart', 'Payment Method', 'OrderDetails'];
}

const Checkout = () => {
  const classes_g = globalStyles();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(-1);
  const steps = getSteps();

  // const type = 'product';
  // const steps = getSteps();

  const initialState = {
    products: [],
    total: 0,
    subtotal: 0,
    shippingAddress: {
      street: 'abc',
      city: 'abc',
      country: 'abc',
      postalCode: 112,
    },
    email: 'abc@gmail.com',
    phoneNumber: 9231232133,
    toggleEdit: false,
  };

  const [cartState, handleTxtChange, , changeInput, , setState] =
    useManyInputs(initialState);

  useEffect(() => {
    let total = 0;
    if (cartProd && cartProd.length > 0) {
      total += getTotal(cartProd, 'price');
      setState((st) => ({
        ...st,
        products: cartProd,
      }));
    }

    setState((st) => ({
      ...st,
      total,
      subtotal: total,
    }));
    setActiveStep(0);
  }, [setState]);

  const removeFromCart = () => {
    console.log('item removed');
  };

  const handleChange = (e) => {
    console.log('e.target.name', e.target.name);
    // if(e.target.name === 'quantity')
  };

  const handleEditedField = useCallback((name, value) => {
    if (name === 'address') {
      setState((st) => ({
        ...st,
        shippingAddress: {
          street: value.street,
          city: value.city,
          postalCode: value.postalCode,
          country: value.country,
        },
      }));
    } else changeInput(name, value);
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const validateStep1 = () => {
    // console.log('validated step 1');
    // * If user if NOT Logged in , move him to Login page
    // if (!user) history.push('/auth/login?redirect=/store/cart');
    // else handleNext();

    handleNext();
  };
  const validateStep2 = () => {
    if (
      cartState.shippingAddress.address !== '' &&
      cartState.phoneNumber !== -1 &&
      cartState.email !== ''
    ) {
      // console.log('validated step 2');
      handleNext();
    } else console.log('Invalid Step 2');
  };

  const validateStep3 = () => {
    console.log('validated step 3');
    handleNext();
  };

  const getStepContent = useMemo(() => {
    // console.log('Get Content rerender');

    switch (activeStep) {
      case 0:
        return (
          <Cart
            validateStep={validateStep1}
            cart={cartState}
            // increaseQuantity={increaseQuantity}
            // decreaseQuantity={decreaseQuantity}
            handleTxtChange={handleTxtChange}
            removeItemFromCart={removeFromCart}
          />
        );
      case 1:
        return (
          <Cart
            cart={cartState}
            validateStep={validateStep2}
            removeItemFromCart={removeFromCart}
            editedValue={handleEditedField}
            review
          />
        );
      case 2:
        return (
          <PaymentStep
            shippingAddress={{
              fullAddress: cartState.shippingAddress,
              phone: cartState.phoneNumber,
              email: cartState.email,
            }}
            cartTotal={cartState.total}
            totalItems={cartState.products.length}
            validateStep={validateStep3}
          />
        );

      case 3:
        return (
          <OrderDetails
            shippingAddress={{
              fullAddress: cartState.shippingAddress,
              phone: cartState.phoneNumber,
              email: cartState.email,
            }}
            cartItems={cartState.products}
            cartTotal={cartState.total}
            totalItems={cartState.products.length}
          />
        );

      default:
        return <div className='loader'></div>;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep, cartState, removeFromCart, handleEditedField]);

  return (
    <div className={clsx(classes_g.componentSectionGap, classes.stepIcon)}>
      <Box display='flex' alignItems='center' gridGap={15}>
        {console.log('cart', cartState)}
        {activeStep > 0 && activeStep < 3 && (
          <>
            <IconButton onClick={handleBack} color='primary' size='small'>
              <NavigateBeforeIcon />
            </IconButton>
          </>
        )}
        <Typography variant='h4' className={classes_g.fontWeight600}>
          {steps[activeStep]}
        </Typography>
      </Box>
      {getStepContent}
    </div>
  );
};

export default Checkout;
