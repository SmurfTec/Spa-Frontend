import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import { useManyInputs } from 'hooks';

import globalStyles from 'styles/commonStyles';

import { cartProd, cartServ } from 'data';

import Cart from './Cart';
import ReviewCart from './Step2';
import PaymentStep from './Step3';
import PaymentDetails from './Step4';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

// function getSteps() {
//   return ['Cart', 'Checkout', 'Payment', 'PaymentDetails'];
// }

const Checkout = () => {
  const classes_g = globalStyles();
  const [activeStep, setActiveStep] = useState(-1);

  // const type = 'product';
  // const steps = getSteps();

  const initialState = {
    cartItems: [],
    phone: '',
    total: '200',
    subtotal: '200',
    promoCode: '',
  };

  const [cartState, handleTxtChange, , , , setState] =
    useManyInputs(initialState);

  useEffect(() => {
    if (cartServ && cartServ.length > 0) {
      setState((st) => ({
        ...st,
        cartItems: cartServ,
      }));
      setActiveStep(0);
    }
  }, []);

  const removeFromCart = () => {
    console.log('item removed');
  };

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

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Cart
            validateStep={validateStep1}
            cart={cartState.cartItems}
            // increaseQuantity={increaseQuantity}
            // decreaseQuantity={decreaseQuantity}
            handleTxtChange={handleTxtChange}
            removeItemFromCart={removeFromCart}
          />
        );
      case 1:
        return (
          <ReviewCart
            validateStep={validateStep2}
            cart={cartState.cartItems}
            changeDeliveryMethod={(val) =>
              setState((st) => ({ ...st, deliveryMethod: val }))
            }
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
        return (
          // order && (
          // <PayPalButton
          //   amount={order.total}
          //   options={{
          //     clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
          //     disableFunding: 'credit',
          //     currency: 'EUR',
          //   }}
          //   onSuccess={async (details, data) => {
          //     payOrder(order._id, '/store');
          //   }}
          // />
          <PaymentDetails />
          // )
        );

      default:
        return <div className='loader'></div>;
    }
  };

  return (
    <div className={classes_g.componentSectionGap}>
      {/* Back to Specific Section of Checkout */}
      {activeStep > 0 && activeStep < 4 && (
        <>
          <IconButton onClick={handleBack}>
            <NavigateBeforeIcon />
          </IconButton>
        </>
      )}
      {getStepContent(activeStep)}
    </div>
  );
};

export default Checkout;
