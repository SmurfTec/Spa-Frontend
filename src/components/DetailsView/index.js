import React, { useState, useEffect, useMemo } from 'react';
import {
  Link,
  Navigate,
  withRouter,
  useParams,
  useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  IconButton,
  Tabs,
  Tab,
  Avatar,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import { Rating, Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';
// import Lightbox from 'react-image-lightbox';
import faker from 'faker';

import ProdServCard from 'components/Carousels/ProductServiceCarousel/Card';
import CarouselLayout from 'components/Carousels/Default/CarouselLayout';
import { responsive2 } from 'components/Carousels/Default/settings';

import { useManyInputs, useToggleInput } from 'hooks';

import { dropDownNumbers, reviews } from 'data';
import { getMuiDateFormat } from 'utils/constants';

import prod1 from 'assets/prod1.jpg';
import prod2 from 'assets/prod2.jpg';
import prod3 from 'assets/prod3.jpg';
import prod4 from 'assets/prod4.jpg';

import globalStyles from 'styles/commonStyles';
import styles from './Styles';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveRounded from '@material-ui/icons/RemoveRounded';
import Addrounded from '@material-ui/icons/AddRounded';
import BookIcon from '@material-ui/icons/Book';

import Review from 'components/common/Review';
import useFetch from 'hooks/useFetch';
import { API_BASE_URL } from 'utils/makeReq';
import { createOrder } from 'store/slices/orders/extraReducers';
import { toast } from 'react-toastify';
import { allServices } from 'store/slices/getAll/extraReducers';

function TabPanel(props) {
  const { children, value, index, classes, ...other } = props;

  return (
    <div
      className='tabPanel'
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box mt={10}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  classes: PropTypes.any,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const SingleProdServ = ({ type }) => {
  const classes_g = globalStyles();
  const classes = styles();
  const status = 'In Stock';

  const initialState = {
    prodServ: {},
    quantity: 1,
    checkIn: getMuiDateFormat(),
    guests: 1,
  };

  const { services, loading: fetching } = useSelector((st) => st.getAll);

  const [state, handleTxtChange, , changeInput, , setState] =
    useManyInputs(initialState);
  const [tabValue, setTabValue] = React.useState(1);

  const [selectedSlots, setSelectedSlots] = useState([]);

  // const [isOpen, toggleOpen] = useToggleInput(false); // done
  // const [checkIn, setCheckIn] = React.useState(getMuiDateFormat());
  // const { addItemToCart, userOrders } = useContext(StoreContext);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [relatedProduct, setRelatedProduct] = useState([]);

  let {
    error,
    loading,
    value,
    setValue: setProdServ,
  } = useFetch(
    `${API_BASE_URL}/${type}s/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
    [id],
    type
  );

  console.log('value', value);

  useEffect(() => {
    if (!value) return;

    if (selectedSlots.length > state.guests) {
      setSelectedSlots((st) => st.slice(0, state.guests - 1));
    }
  }, [state.guests]);

  //* set Related Proucts
  useEffect(() => {
    if (!value) return;

    if (!services) return dispatch(allServices());
    setRelatedProduct(
      services?.filter((el) => {
        return el?.category?.name === value?.category?.name;
      })
    );
  }, [value]);

  useEffect(() => {
    if (type === 'product') {
      // setState((st) => ({
      //   ...st,
      //   prodServ: products?.filter((el) => el.dummyId === parseInt(_id))[0],
      // }));
    } else {
      // setState((st) => ({
      //   ...st,
      //   prodServ: services?.filter((el) => el.dummyId === parseInt(_id))[0],
      // }));
    }
  }, [id, type]);

  const selectElement = (slot) => {
    if (selectedSlots.find((el) => el._id === slot._id)) {
      setSelectedSlots((st) => st.filter((el) => el._id !== slot._id));
    } else {
      if (selectedSlots.length === state.guests) return;
      setSelectedSlots((st) => [...st, slot]);
    }
  };

  const handleBook = () => {
    dispatch(
      createOrder({
        service: {
          service: value._id,
          guests: state.guests,
          subTotal: value.discountPrice * state.guests,
          slot: selectedSlots,
        },
        total: value.discountPrice * state.guests,
        serviceDate: new Date(state.checkIn),
      })
    ).then((res) => {
      console.log('Value', res);
      if (res.error) {
        toast.error(
          res.payload.message ? res.payload.message : 'Something went wrong'
        );
      } else {
        setTimeout(() => {
          navigate(`/paymentDetails/${res.payload._id}`);
        }, 500);
        console.log('Success');
      }
    });
  };

  const increaseNoOfItems = () => {
    setState((st) => ({ ...st, quantity: st.quantity + 1 }));
  };
  const decreaseNoOfItems = () => {
    setState((st) => ({ ...st, quantity: st.quantity - 1 }));
  };

  const handleImageClick = (e) => {
    const { image } = e.currentTarget.dataset;
    // toggleOpen();
  };

  const handleAddToCart = () => {
    // addItemToCart(product, noOfItem);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleGuests = (e) => {
    changeInput('guests', e.target.value);
  };

  const slotDay = useMemo(() => {
    if (!state.checkIn) return 0;

    const day = new Date(state.checkIn).getDay();
    console.log('day', day);

    return day;
  }, [state.checkIn]);

  const isSlotDisabled = (slot) =>
    Boolean(
      value.bookedSlots.find((el) => {
        let slotDate = new Date(el.day);
        let checkIn = new Date(state.checkIn);

        if (
          slotDate.getMonth() === checkIn.getDate() &&
          slotDate.getFullYear() === checkIn.getFullYear() &&
          slotDate.getMonth() === checkIn.getMonth() &&
          (slotDate.slot.from === slot.from || slotDate.slot.to === slot.to)
        ) {
          //
          return true;
        }

        return false;
      })
    );

  if (error) navigate('/');

  if (!value) return <></>;

  return (
    <div
      className={clsx(
        classes_g.componentSectionGap,
        classes_g.smallOutletGap,
        classes.root
      )}
    >
      {/* {value && isOpen && (
        <Lightbox
          mainSrc={ [photoIndex]}
          // mainSrc={images[0]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={toggleOpen}
          onMovePrevRequest={() =>
            setphotoIndex((st) => (st + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setphotoIndex((st) => (st + 1) % images.length)
          }
        />
      )} */}
      {/* <div> */}

      {loading && (
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Skeleton variant='rect' width={'100%'} height={330} />

            <Grid item xs={12} sm={12}>
              <Box sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                  {Array(4)
                    .fill()
                    .map((_, idx) => (
                      <Grid item xs={6} sm={3} key={idx}>
                        <Card
                          sx={{
                            boxShadow: 'none',
                            borderRadius: 1,
                          }}
                        >
                          <Skeleton variant='rect' width={'100%'} height={50} />
                        </Card>
                      </Grid>
                    ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs='auto' sm={6}>
            <div>
              <Typography variant='h3'>
                <Skeleton variant='text' />
              </Typography>
              <Typography variant='h4' color='textSecondary' sx={{ mt: 1 }}>
                <Skeleton variant='text' />
              </Typography>
              <Typography variant='h5' sx={{ mt: 1 }}>
                <Skeleton variant='text' />
              </Typography>
              <Typography variant='body1' sx={{ mt: 3 }}>
                <Skeleton variant='text' />
              </Typography>

              <Box
                sx={{
                  mt: 5,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 2,
                  width: '100%',
                }}
              >
                <Skeleton variant='rect' />
              </Box>

              <Skeleton variant='text' />
            </div>
          </Grid>
        </Grid>
      )}

      <div className={classes.prodViewWrapper}>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Card sx={{ boxShadow: 'none', borderRadius: 1 }}>
                <CardMedia
                  className={classes.cardMedia}
                  image={value.images[0]?.url}
                  data-image={value.images[0]?.url}
                  onClick={handleImageClick}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Grid container spacing={2}>
                {value.images.slice(1).map((img) => (
                  <Grid item xs={4} sm={4} key={img}>
                    <Card
                      sx={{
                        boxShadow: 'none',
                        borderRadius: 1,
                      }}
                    >
                      <CardMedia
                        className={classes.cardMediaSm}
                        image={img.url}
                        data-image={img.url}
                        onClick={handleImageClick}
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
        {/* <div
                  style={{
                    display: 'inline-block',
                    maxWidth: '100%',
                    overflow: 'hidden',
                    position: 'relative',
                    boxSizing: 'border-box',
                    margin: 0,
                  }}
                >
                  <div
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      maxWidth: '100%',
                    }}
                  >
                    <img
                      style={{
                        maxWidth: '100%',
                        display: 'block',
                        margin: 0,
                        border: 'none',
                        padding: 0,
                      }}
                      alt=''
                      aria-hidden='true'
                      role='presentation'
                      src={value.images?.[0]?.url}
                    />
                  </div>
                  <img
                    alt={state.prodServ.title}
                    srcSet={`${value.images?.[1]?.url}`}
                    src={`${value.images?.[1]?.url}`}
                    decoding='async'
                    // class='LazyImage-tufn0p-0 eIalbs'
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      boxSizing: 'border-box',
                      padding: 0,
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: 0,
                      height: 0,
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div> */}{' '}
        <div>
          <Box width='100%' display='flex' flexDirection='column'>
            <Typography variant='h4' className={classes_g.lightText}>
              {value.name}
            </Typography>

            <Box display='flex' gridGap={10} alignItems='center'>
              <Rating value={4} readOnly />
              <Typography variant='h5' className={classes_g.lightText}>
                {value.rating}
              </Typography>
            </Box>

            <Typography variant='body1' color='textPrimary'>
              {value.discountPrice}
            </Typography>

            <Typography variant='h4' sx={{ mt: 1, fontWeight: 500 }}>
              {value.info}
            </Typography>
          </Box>

          <Typography variant='body1' sx={{ mt: 1 }}>
            {value.description}
          </Typography>

          <Box
            display='flex'
            flexWrap='wrap'
            gridGap={15}
            className={classes.servOptions}
          >
            <TextField
              name='checkIn'
              label='Check In'
              variant='outlined'
              type='date'
              format='mm/dd/yyyy'
              value={state.checkIn}
              onChange={handleTxtChange}
              // className={classes.textField}
              // fullWidth

              ops={{
                shrink: true,
              }}
            />
            <FormControl variant='outlined'>
              <InputLabel htmlFor='outlined-age-native-simple'>
                Guest
              </InputLabel>
              <Select
                value={state.guests}
                onChange={handleGuests}
                variant='outlined'
                label='Guests'
                fullWidth
              >
                {dropDownNumbers.map((el) => (
                  <MenuItem value={el} key={el}>
                    {el}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box display='flex' flexWrap='wrap' gridGap='15px'>
            {value.slots[slotDay]?.slots.length > 0 ? (
              value.slots[slotDay].slots.map((el) => (
                <Typography
                  onClick={() => {
                    if (isSlotDisabled(el) === false) selectElement(el);
                  }}
                  className={`${classes.slotBtn} ${
                    !!selectedSlots.find((st) => st._id === el._id) &&
                    'selected'
                  } ${isSlotDisabled(el) === true && 'disabled'}`}
                >
                  {el.from} - {el.to}
                </Typography>
              ))
            ) : (
              <Typography variant='body2'>No Slot for this day.</Typography>
            )}
          </Box>

          <Box>
            <Button
              color='primary'
              sx={{ mt: 3 }}
              onClick={handleBook}
              endIcon={<BookIcon />}
              disabled={!selectedSlots.length}
            >
              Book Now
            </Button>
          </Box>

          <Box mt={2}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor='primary'
              className={classes.tabs}
            >
              <Tab label='Review' {...a11yProps(0)} />
              <Tab
                {...a11yProps(1)}
                // className={
                //   tabValue === 1
                //     ? classes.ActiveTab
                //     : classes.InActiveTab
                // }
                label='Related Services'
              />
            </Tabs>
          </Box>
        </div>
      </div>

      <TabPanel className={classes.TabPanel} value={tabValue} index={0}>
        {value.reviews && value.reviews.length > 0 ? (
          value.reviews.map((el) => <Review {...el} key={el.user._id} />)
        ) : (
          <Typography variant='body1' align='center'>
            No Reviews
          </Typography>
        )}
      </TabPanel>
      <TabPanel className={classes.TabPanel} value={tabValue} index={1}>
        <Box my={3}>
          <Typography variant='h4' fullWidth align='center'>
            Related {type === 'product' ? ' Products' : 'Services'}
          </Typography>
        </Box>
        {relatedProduct && relatedProduct.length > 0 ? (
          <CarouselLayout respSettings={responsive2}>
            {relatedProduct.map((el) => (
              <div key={el._id} className={classes_g.carouselItem}>
                <ProdServCard item={el} isPromo={false} />
              </div>
            ))}
          </CarouselLayout>
        ) : (
          <Typography variant='body1' align='center'>
            'No Results'
          </Typography>
        )}
      </TabPanel>

      {/* </div> */}
    </div>
  );
};

export default SingleProdServ;
