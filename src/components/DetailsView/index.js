import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  Tabs,
  Tab,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Avatar,
} from '@material-ui/core';
import { Rating, Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';

import ProdServCard from 'components/Carousels/ProductServiceCarousel/Card';
import CarouselLayout from 'components/Carousels/Default/CarouselLayout';
import { responsive2 } from 'components/Carousels/Default/settings';

import { useManyInputs } from 'hooks';

import { dropDownNumbers } from 'data';
import { getMuiDateFormat } from 'utils/constants';

import globalStyles from 'styles/commonStyles';
import styles from './Styles';

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

  const [currentImg, setCurrentImg] = useState();
  const initialState = {
    prodServ: {},
    quantity: 1,
    checkIn: getMuiDateFormat(),
    guests: 1,
  };
  const { isLoggedIn } = useSelector((st) => st.auth);

  const { user } = useSelector((st) => st.auth);
  const { services, loading: fetching } = useSelector((st) => st.getAll);

  const [state, handleTxtChange, , changeInput, , setState] =
    useManyInputs(initialState);
  const [tabValue, setTabValue] = React.useState(1);

  const [selectedSlots, setSelectedSlots] = useState([]);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const [images, setImages] = useState([]);

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
    console.log('value.images', value.images);
    setCurrentImg(value.images[0]);
    setRelatedProduct(
      services?.filter((el) => {
        return el?.category?.name === value?.category?.name;
      })
    );

    setTimeout(() => {
      console.log('images', images);
    }, 1000);
  }, [value]);

  const selectElement = (slot) => {
    if (selectedSlots.find((el) => el._id === slot._id)) {
      setSelectedSlots((st) => st.filter((el) => el._id !== slot._id));
    } else {
      if (selectedSlots.length === state.guests) return;
      setSelectedSlots((st) => [...st, slot]);
    }
  };

  const handleBook = () => {
    if (!user) return navigate(`/login?redirect=${location.pathname}`);
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
      // console.log('Value', res);
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
          (slotDate.slot?.from === slot?.from || slotDate.slot?.to === slot?.to)
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
      {value && isOpen && (
        <Lightbox
          mainSrc={[photoIndex]}
          // mainSrc={images[0]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((st) => (st + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((st) => (st + 1) % images.length)
          }
        />
      )}
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
                  image={currentImg?.url}
                  data-image={currentImg?.url}
                  style={{ cursor: 'pointer' }}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Grid container spacing={2}>
                {value.images
                  .filter((img) => img._id !== currentImg?._id)
                  .map((img, idx) => (
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
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            setCurrentImg(img);
                          }}
                        />
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Grid>
        </div>

        <div style={{ gap: 15 }}>
          <Box width='100%' display='flex' flexDirection='column'>
            <Box
              style={{
                display: 'flex',
                gap: 10,
                alignItems: 'center',
              }}
            >
              {value.vendor?.logo?.url && (
                <Avatar
                  variant='circlular'
                  src={value.vendor?.logo?.url}
                  alt='logo'
                />
                // <img
                //   style={{ width: 50, height: 50, borderRadius: '50%' }}
                // />
              )}
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Typography variant='h4' className={classes_g.lightText}>
                  {value.name}
                </Typography>
                <Typography variant='caption' className={classes_g.lightText}>
                  {value.vendor?.fullName}
                </Typography>
              </Box>
            </Box>

            <Box display='flex' gridGap={10} alignItems='center'>
              <Rating value={4} readOnly />
              <Typography variant='h5' className={classes_g.lightText}>
                {value.rating}
              </Typography>
            </Box>

            <Typography variant='body1' color='textPrimary'>
              {value.info}
            </Typography>

            <Typography variant='h4' sx={{ mt: 1, fontWeight: 500 }}>
              {value.name} : ${value.discountPrice}
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

          <Typography variant='body2'>
            {new Date(state.checkIn).toDateString()}
          </Typography>
          <Box
            display='flex'
            flexWrap='wrap'
            gridGap='15px'
            justifyContent='flex-start'
            style={{
              justifyContent: 'flex-start !important',
            }}
          >
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
