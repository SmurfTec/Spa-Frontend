import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Avatar,
  Box,
  Button,
  Typography,
  Dialog,
  TextField,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from '@material-ui/core';

import { Rating } from '@material-ui/lab';

import Chip from 'components/common/CustChipLabel';

import { getMuiDateFormat } from 'utils/constants';
import { orders, orderDetails } from 'data';

import globalStyles from 'styles/commonStyles';
import styles from './userInfoProps';

import prodImg from 'assets/prod1.jpg';

const OrderDetails = () => {
  const classes_g = globalStyles();
  const classes = styles();

  const { orderid } = useParams();
  const [state, setState] = useState(null);

  useEffect(() => {
    if (orderid) {
      const orderDetail = orderDetails.filter((o) => o._id === orderid && o);
      // console.log('orderDetail', orderDetail);
      setState(...orderDetail);
    }
  }, [orderid]);

  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(0);

  const handleToggleDialog = () => {
    setOpen((st) => !st);
  };

  const showReviewModal = () => {};
  const saveReview = () => {};

  return (
    <>
      <Box mb={2}>
        <Typography variant='h5' className={classes_g.fontWeight600}>
          Order Details
        </Typography>
      </Box>
      {state && (
        <>
          <Box
            display='flex'
            gridGap={15}
            flexWrap='wrap'
            justifyContent='space-between'
          >
            <Box display='flex' gridGap={10}>
              <Typography
                variant='body2'
                color='textSecondary'
                component='span'
              >
                Order ID :{' '}
              </Typography>
              <Typography variant='body2' color='textPrimary' component='span'>
                {orderid.split('-')[0]}
              </Typography>
            </Box>
            <Box display='flex' gridGap={10}>
              <Typography
                variant='body2'
                color='textSecondary'
                component='span'
              >
                Placed On :{' '}
              </Typography>
              <Typography variant='body2' color='textPrimary' component='span'>
                {getMuiDateFormat(state.createdAt)}
              </Typography>
            </Box>

            <Chip color='warning'>{state.status}</Chip>
          </Box>
          <Box
            mt={2}
            py={2}
            className={classes_g.boxBorder}
            borderRadius={8}
            px={1}
          >
            {state.isProduct
              ? state.products &&
                state.products.length > 0 &&
                state.products.map((el) => (
                  <Box
                    display='flex'
                    padding='8px 0'
                    flexWrap='wrap'
                    alignItems='center'
                    // gridGap={10}
                  >
                    <Box
                      className={classes.orderItems}
                      gridGap={10}
                      flex='2 2 190px'
                    >
                      <Avatar
                        variant='square'
                        className={classes.orderItemImage}
                      >
                        <img
                          src={prodImg}
                          width='100%'
                          height='100%'
                          alt={el.title}
                        />
                      </Avatar>
                      <Typography
                        variant='subtitle2'
                        style={{ fontWeight: 500 }}
                      >
                        {el.title}
                      </Typography>
                    </Box>
                    <Box className={classes.orderItems} flex='1 1 200px'>
                      <Typography variant='body2'>{el.description}</Typography>
                    </Box>
                    <Box className={classes.orderItems} flex='1 1 100px'>
                      <Button
                        variant='outlined'
                        color='secondary'
                        size='small'
                        style={{ fontWeight: 400 }}
                        onClick={handleToggleDialog}
                      >
                        Add Review
                      </Button>
                    </Box>
                  </Box>
                ))
              : state.services &&
                state.services.length > 0 &&
                state.services.map((el) => (
                  <Box
                    display='flex'
                    padding='8px 0'
                    flexWrap='wrap'
                    alignItems='center'
                    // gridGap={10}
                  >
                    <Box
                      className={classes.orderItems}
                      gridGap={10}
                      flex='2 2 190px'
                    >
                      <Avatar
                        variant='square'
                        className={classes.orderItemImage}
                      >
                        <img
                          src={prodImg}
                          width='100%'
                          height='100%'
                          alt={el.title}
                        />
                      </Avatar>
                      <Typography
                        variant='subtitle2'
                        style={{ fontWeight: 500 }}
                      >
                        {el.title}
                      </Typography>
                    </Box>
                    <Box className={classes.orderItems} flex='1 1 200px'>
                      <Typography variant='body2'>{el.description}</Typography>
                    </Box>
                    <Box className={classes.orderItems} flex='1 1 100px'>
                      <Button
                        variant='outlined'
                        color='secondary'
                        style={{ fontWeight: 400 }}
                        size='small'
                        onClick={handleToggleDialog}
                      >
                        Add Review
                      </Button>
                    </Box>
                  </Box>
                ))}
          </Box>
        </>
      )}

      <Dialog
        open={open}
        onClose={handleToggleDialog}
        fullWidth={true}
        maxWidth='sm'
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          Write a Review for this product
        </DialogTitle>
        <DialogContent>
          <Box
            display='flex'
            alignItems='center'
            // justifyContent='end'
            gridGap={10}
          >
            <Typography variant='subtitle1'>Your Rating</Typography>
            <Rating
              name='rating'
              value={rating}
              // size='small'
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </Box>

          <form id='reviewForm' onSubmit={saveReview}>
            <TextField
              autoFocus
              margin='dense'
              name='review'
              placeholder='Write your review here...'
              variant='outlined'
              fullWidth
              multiline
              rows={4}
              required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleToggleDialog}
            color='primary'
            variant='outlined'
          >
            Cancel
          </Button>
          <Button
            type='submit'
            form='reviewForm'
            color='secondary'
            variant='contained'
            style={{ minWidth: 80 }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OrderDetails;
