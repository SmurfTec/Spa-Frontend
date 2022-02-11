import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { IconButton, Typography, Box } from '@material-ui/core';
import { useManyInputs } from 'hooks';

import globalStyles from 'styles/commonStyles';
import useStyles from 'styles/CartStyles';

import { cartProd, cartServ } from 'data';

// import Cart from './Cart';
import Cart from './CartRep';
import ReviewCart from './Step2';
import PaymentStep from './Step3';
import PaymentDetails from './Step4';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import clsx from 'clsx';
import { getTotal } from 'utils/constants';

// function getSteps() {
//   return ['Cart', 'Checkout', 'Payment', 'PaymentDetails'];
// }

const Checkout = () => {
  const classes_g = globalStyles();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(-1);

  // const type = 'product';
  // const steps = getSteps();

  const initialState = {
    products: [],
    services: [],
    phone: '',
    total: 0,
    subtotal: 0,
    shippingAddress: { address: '' },
    email: '',
    phoneNumber: '',

    toggleEdit: false,
  };

  const [cartState, handleTxtChange, , , , setState] =
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
    if (cartServ && cartServ.length > 0) {
      total += getTotal(cartServ, 'price');
      setState((st) => ({
        ...st,
        services: cartServ,
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
    console.log('target :', name, value);
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const validateStep1 = () => {
    console.log('validated step 1');
    // * If user if NOT Logged in , move him to Login page
    // if (!user) history.push('/auth/login?redirect=/store/cart');
    // else handleNext();

    handleNext();
  };
  const validateStep2 = () => {
    console.log('validated step 1');
  };
  const validateStep3 = () => {
    console.log('validated step 1');
  };

  const getStepContent = useMemo(() => {
    console.log('rerender');

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
            editField={handleEditedField}
            review
          />
        );
      case 2:
        return (
          <PaymentStep
            validateStep={validateStep3}
            cart={cartState.cartItems}
          />
        );

      case 3:
        return <PaymentDetails />;

      default:
        return <div className='loader'></div>;
    }
  }, [activeStep]);

  return (
    <div className={clsx(classes_g.componentSectionGap, classes.stepIcon)}>
      {/* Back to Specific Section of Checkout */}
      <Box display='flex' gridGap={15}>
        {activeStep > 0 && activeStep < 4 && (
          <>
            <IconButton onClick={handleBack} color='primary' size='small'>
              <NavigateBeforeIcon />
            </IconButton>
          </>
        )}
        <Typography variant='h4' className={classes_g.fontWeight600}>
          Cart
        </Typography>
      </Box>
      {getStepContent}
    </div>
  );
};

export default Checkout;
