import React, { useState, useEffect } from 'react';
import {
  Link,
  Navigate,
  withRouter,
  useParams,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

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

import {
  products,
  services,
  productsB,
  dropDownNumbers,
  reviews,
} from 'data';
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

const SingleProdServ = (props) => {
  const classes_g = globalStyles();
  const classes = styles();
  const status = 'In Stock';

  const initialState = {
    prodServ: {},
    quantity: 1,
    checkIn: getMuiDateFormat(),
    guests: 1,
  };

  const [state, handleTxtChange, , changeInput, , setState] =
    useManyInputs(initialState);

  // const [isOpen, toggleOpen] = useToggleInput(false); // done
  const [tabValue, setTabValue] = React.useState(1);
  // const [checkIn, setCheckIn] = React.useState(getMuiDateFormat());

  // const { addItemToCart, userOrders } = useContext(StoreContext);

  const { id, type } = useParams();

  // let {
  //   value: auction,
  //   loading,
  //   error,
  //   setValue: setAuction,
  // } = useFetch(
  //   `${API_BASE_URL}/products/${id}`,
  //   {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   },
  //   [id],
  //   'product'
  // );
  let {
    error,
    loading,
    value,
    setValue: setProdServ,
  } = useFetch(
    `${API_BASE_URL}/${props.type}s/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
    [id],
    'product'
  );

  console.log('value', error, loading, value);

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

  return (
    <div
      className={clsx(
        classes_g.componentSectionGap,
        classes_g.smallOutletGap,
        classes.root
      )}
    >
      {/* {state.prodServ && isOpen && (
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

      {state.prodServ ? (
        <>
          <div
            className={
              type === 'product'
                ? classes.prodViewWrapper
                : classes.servViewWrapper
            }
          >
            {/* //^ Product View  */}
            {type === 'product' ? (
              <>
                <div>
                  <Grid container spacing={2}>
                    <Grid item xs={8} sm={12}>
                      <Card
                        sx={{ boxShadow: 'none', borderRadius: 1 }}
                      >
                        <CardMedia
                          className={classes.cardMedia}
                          image={prod2}
                          data-image={state.prodServ?.image}
                          onClick={handleImageClick}
                        />
                      </Card>
                      {/* <Box
                  display='flex'
                  justify-content='center'
                  sx={{
                    webkitBoxPack: 'center',
                  }}
                >
                  <span className={classes.prodImgWrapper}>
                    <img
                      src={prod4}
                      alt={state?.prodServ?.title}
                      height='100%'
                      width='100%'
                    />
                  </span>
                </Box> */}
                    </Grid>
                    <Grid item xs={8} sm={12}>
                      <Grid container spacing={2}>
                        {[...Array(3)].map((_, index) => (
                          <Grid item xs={4} sm={4} key={index}>
                            <Card
                              sx={{
                                boxShadow: 'none',
                                borderRadius: 1,
                              }}
                            >
                              <CardMedia
                                className={classes.cardMediaSm}
                                image={`${prod2}`}
                                data-image={state.prodServ.image}
                                onClick={handleImageClick}
                              />
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  {state.prodServ ? (
                    state.prodServ === 404 ? (
                      <Navigate to='/' />
                    ) : (
                      <>
                        <Box
                          width='100%'
                          display='flex'
                          flexDirection='column'
                        >
                          <Box
                            display='flex'
                            flexDirection='column'
                            gridGap='0.5em'
                          >
                            <Box
                              display='flex'
                              alignItems='center'
                              gridGap='2em'
                            >
                              <Typography
                                variant='h5'
                                component='span'
                                className={classes_g.lightText}
                              >
                                {state.prodServ.title}
                              </Typography>
                              <Typography
                                variant='subtitle1'
                                component='span'
                                color='textSecondary'
                                className={classes_g.lightText}
                              >
                                (100ml)
                              </Typography>
                            </Box>
                            <Box
                              display='flex'
                              gridGap={10}
                              alignItems='center'
                            >
                              <Rating
                                value={4}
                                readOnly
                                size='small'
                              />
                              <Typography
                                variant='subtitle1'
                                className={classes_g.lightText}
                              >
                                {state.prodServ.rating}
                              </Typography>
                            </Box>
                            <Typography variant='h5' sx={{ mt: 1 }}>
                              {state.prodServ.price}
                            </Typography>
                          </Box>

                          <Typography variant='body2' sx={{ mt: 1 }}>
                            {faker.lorem.sentences(2)}
                          </Typography>
                          <Box
                            my={2}
                            display='flex'
                            gridGap='1em'
                            justifyContent='space-between'
                            alignItems='center'
                          >
                            <div className={classes.quantBtnWrapper}>
                              <IconButton
                                color='primary'
                                disabled={state.quantity <= 1}
                                onClick={decreaseNoOfItems}
                              >
                                <RemoveRounded />
                              </IconButton>
                              <Typography
                                variant='subtitle1'
                                style={{ fontWeight: 600 }}
                                sx={{ userSelect: 'none' }}
                              >
                                {state.quantity}
                              </Typography>
                              <IconButton
                                color='primary'
                                onClick={increaseNoOfItems}
                                disabled={state.quantity >= 10}
                              >
                                <Addrounded />
                              </IconButton>
                            </div>
                            <Box sx={{ flexShrink: 0 }}>
                              <Typography
                                variant='subtitle1'
                                component='span'
                                className={classes_g.lightText}
                                sx={{ userSelect: 'none' }}
                              >
                                Status :
                              </Typography>{' '}
                              <Typography
                                variant='subtitle1'
                                component='span'
                                className={clsx(
                                  classes_g.lightText,
                                  classes.statusLabel
                                )}
                                sx={{ userSelect: 'none' }}
                              >
                                {status}
                              </Typography>
                            </Box>
                          </Box>
                          <Box>
                            <Button
                              variant='contained'
                              color='secondary'
                              sx={{ mt: 3 }}
                              onClick={handleAddToCart}
                              endIcon={<ShoppingCartIcon />}
                            >
                              ADD TO CART
                            </Button>
                          </Box>
                        </Box>
                        <Box mt={2}>
                          <Tabs
                            value={tabValue}
                            onChange={handleTabChange}
                            indicatorColor='primary'
                            className={classes_g.tabs}
                          >
                            <Tab label='Review' {...a11yProps(0)} />
                            <Tab
                              {...a11yProps(1)}
                              label='Related Products'
                            />
                          </Tabs>
                        </Box>
                      </>
                    )
                  ) : (
                    <div>
                      <Typography variant='h3'>
                        <Skeleton variant='text' />
                      </Typography>
                      <Typography
                        variant='h4'
                        color='textSecondary'
                        sx={{ mt: 1 }}
                      >
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
                  )}
                </div>
              </>
            ) : (
              //^ Service View
              <>
                <div>
                  <div className={classes.serviceImg}>
                    <div
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
                          src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjM1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
                        />
                      </div>
                      <img
                        alt={state.prodServ.title}
                        srcSet={`${prod1}`}
                        src={`${prod1}`}
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
                    </div>
                  </div>
                </div>
                <div>
                  {state.prodServ ? (
                    state.prodServ === 404 ? (
                      <Navigate to='/' />
                    ) : (
                      <>
                        <Box
                          display='flex'
                          flexDirection='column'
                          gridGap='0.5em'
                        >
                          <Typography
                            variant='h4'
                            className={classes_g.lightText}
                          >
                            {state.prodServ.title}
                          </Typography>

                          <Box
                            display='flex'
                            gridGap={10}
                            alignItems='center'
                          >
                            <Rating value={4} readOnly />
                            <Typography
                              variant='h5'
                              className={classes_g.lightText}
                            >
                              {state.prodServ.rating}
                            </Typography>
                          </Box>

                          <Typography
                            variant='body1'
                            color='textPrimary'
                          >
                            {state.prodServ.oneHourRate}
                          </Typography>

                          <Typography
                            variant='h4'
                            sx={{ mt: 1, fontWeight: 600 }}
                          >
                            For one Person : {state.prodServ.price}
                          </Typography>
                        </Box>

                        <Typography variant='body1' sx={{ mt: 1 }}>
                          {faker.lorem.sentences(2)}
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

                        <Box>
                          <Button
                            color='primary'
                            sx={{ mt: 3 }}
                            onClick={handleAddToCart}
                            endIcon={<BookIcon />}
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
                      </>
                    )
                  ) : (
                    <div>
                      <Typography variant='h3'>
                        <Skeleton variant='text' />
                      </Typography>
                      <Typography
                        variant='h4'
                        color='textSecondary'
                        sx={{ mt: 1 }}
                      >
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
                  )}
                </div>
              </>
            )}
          </div>
          <TabPanel
            className={classes.TabPanel}
            value={tabValue}
            index={0}
          >
            {reviews && reviews.length > 0 ? (
              reviews.map((el) => (
                <Review {...el} key={el.user._id} />
              ))
            ) : (
              <Typography variant='body1' align='center'>
                No Reviews
              </Typography>
            )}
          </TabPanel>
          <TabPanel
            className={classes.TabPanel}
            value={tabValue}
            index={1}
          >
            <Box>
              <Box my={3}>
                <Typography variant='h4' fullWidth align='center'>
                  Related{' '}
                  {type === 'product' ? ' Products' : 'Services'}
                </Typography>
              </Box>
              {type === 'product' ? (
                products && products.length > 0 ? (
                  <CarouselLayout respSettings={responsive2}>
                    {products.map((el) => (
                      <div
                        key={el._id}
                        className={classes_g.carouselItem}
                      >
                        <ProdServCard item={el} isPromo={false} />
                      </div>
                    ))}
                  </CarouselLayout>
                ) : (
                  <Typography variant='body1' align='center'>
                    'No Results'
                  </Typography>
                )
              ) : services && services.length > 0 ? (
                <CarouselLayout respSettings={responsive2}>
                  {services.map((el) => (
                    <div
                      key={el._id}
                      className={classes_g.carouselItem}
                    >
                      <ProdServCard item={el} isPromo={false} />
                    </div>
                  ))}
                </CarouselLayout>
              ) : (
                <Typography variant='body1' align='center'>
                  'No Results'
                </Typography>
              )}
            </Box>
          </TabPanel>
        </>
      ) : (
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
                          <Skeleton
                            variant='rect'
                            width={'100%'}
                            height={50}
                          />
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
              <Typography
                variant='h4'
                color='textSecondary'
                sx={{ mt: 1 }}
              >
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
      {/* </div> */}
    </div>
  );
};

export default SingleProdServ;
