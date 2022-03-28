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
  CircularProgress,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import Chip from 'components/common/CustChipLabel';
import { getMuiDateFormat } from 'utils/constants';
import { orders, orderDetails } from 'data';
import globalStyles from 'styles/commonStyles';
import styles from './styles';
import prodImg from 'assets/prod1.jpg';
import { getOrder } from 'store/slices/orders';
import { useDispatch, useSelector } from 'react-redux';
import {
  addReview,
  getmyOrders,
} from 'store/slices/orders/extraReducers';
import { useNavigate } from 'react-router-dom';

const OrderDetails = () => {
  const classes_g = globalStyles();
  const classes = styles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { orderid } = useParams();
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const [comment, setComment] = useState('');
  const [reviewId, setReviewId] = useState();

  const { loading, order } = useSelector((state) => ({
    order: orderid ? getOrder(state, orderid) : undefined,
    loading: state.orders.fetching,
  }));

  useEffect(() => {
    if (loading || !order) {
      dispatch(getmyOrders());
    }
  }, [loading]);

  const toggleReviewOpen = () => {
    setOpen((st) => !st);
  };

  const handleAddReview = (e) => {
    const { id: itemId } = e.currentTarget.dataset;
    setReviewId(itemId);
    toggleReviewOpen();
  };

  const saveReview = (e) => {
    e.preventDefault();
    console.log('rating', rating);
    console.log('comment', comment);

    dispatch(
      addReview({
        id: order._id,
        data: {
          itemId: reviewId,
          comment,
          rating,
        },
      })
    ).then(({ error }) => {
      if (error) return;
      toggleReviewOpen();
    });
  };

  const handlePay = (id) => {
    console.log('HANDLE PAY');
    // navigate to payment
    navigate(`/paymentDetails/${orderid}`);
  };

  return (
    <>
      <Box
        mb={2}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h5' className={classes_g.fontWeight600}>
          Order Details
        </Typography>
        {order?.status !== 'completed' && (
          <Button
            variant='contained'
            color='secondary'
            onClick={handlePay}
          >
            pay
          </Button>
        )}
      </Box>
      {order && (
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
                Order ID :
              </Typography>
              <Typography
                variant='body2'
                color='textPrimary'
                component='span'
              >
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
              <Typography
                variant='body2'
                color='textPrimary'
                component='span'
              >
                {getMuiDateFormat(order?.createdAt)}
              </Typography>
            </Box>

            <Chip color='warning'>{order?.status}</Chip>
          </Box>
          <Box
            mt={2}
            py={2}
            className={classes_g.boxBorder}
            borderRadius={8}
            px={1}
          >
            {!order?.serviceDate && order?.products?.length > 0 ? (
              order.products.map((el) => (
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
                        alt={el.product.name}
                      />
                    </Avatar>
                    <Typography
                      variant='subtitle2'
                      style={{ fontWeight: 500 }}
                    >
                      {el.product.name}
                    </Typography>
                  </Box>
                  <Box
                    className={classes.orderItems}
                    flex='1 1 200px'
                  >
                    <Typography variant='body2'>
                      {el.product.description}
                    </Typography>
                  </Box>
                  {order?.status === 'completed' && (
                    <Box
                      className={classes.orderItems}
                      flex='1 1 100px'
                    >
                      <Button
                        variant='outlined'
                        color='secondary'
                        size='small'
                        style={{ fontWeight: 400 }}
                        onClick={handleAddReview}
                        disabled={loading}
                        data-id={el.product._id}
                        data-type='product'
                      >
                        Add Review{' '}
                        {loading && (
                          <CircularProgress
                            style={{ marginRight: 10 }}
                          />
                        )}
                      </Button>
                    </Box>
                  )}
                </Box>
              ))
            ) : (
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
                      alt={order?.service?.name}
                    />
                  </Avatar>
                  <Typography
                    variant='subtitle2'
                    style={{ fontWeight: 500 }}
                  >
                    {order?.service?.service.name}
                  </Typography>
                </Box>
                <Box className={classes.orderItems} flex='1 1 200px'>
                  <Typography variant='body2'>
                    {order?.service?.service.description}
                  </Typography>
                </Box>
                {order.status === 'completed' &&
                  !order.service.review && (
                    <Box
                      className={classes.orderItems}
                      flex='1 1 100px'
                    >
                      <Button
                        variant='outlined'
                        color='secondary'
                        size='small'
                        style={{ fontWeight: 400 }}
                        onClick={handleAddReview}
                        disabled={loading}
                        data-id={order.service._id}
                        data-type='service'
                      >
                        Add Review{' '}
                        {loading && (
                          <CircularProgress
                            style={{ marginRight: 10 }}
                          />
                        )}
                      </Button>
                    </Box>
                  )}
              </Box>
            )}
          </Box>
        </>
      )}

      <Dialog
        open={open}
        onClose={toggleReviewOpen}
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
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={toggleReviewOpen}
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
