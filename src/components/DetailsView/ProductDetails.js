import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

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
} from '@material-ui/core';
import { Rating, Skeleton } from '@material-ui/lab';
// import Lightbox from 'react-image-lightbox';

import ProdServCard from 'components/Carousels/ProductServiceCarousel/Card';
import CarouselLayout from 'components/Carousels/Default/CarouselLayout';
import { responsive2 } from 'components/Carousels/Default/settings';
import Review from 'components/common/Review';
import TabPanel, { a11yProps } from './TabPanel';
import { useManyInputs, useToggleInput, useFetch } from 'hooks';
import { productsB } from 'data';
import { API_BASE_URL } from 'utils/makeReq';
import { capitalizeFirstLetter } from 'utils/constants';
import prod2 from 'assets/prod2.jpg';
import globalStyles from 'styles/commonStyles';
import styles from './Styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveRounded from '@material-ui/icons/RemoveRounded';
import Addrounded from '@material-ui/icons/AddRounded';
import { addToCart } from 'store/slices/cart';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts } from 'store/slices/getAll/extraReducers';

const ProductDetails = (props) => {
  const classes_g = globalStyles();
  const classes = styles();
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [relatedProduct, setRelatedProduct] = useState([]);

  const [tabValue, setTabValue] = React.useState(1);
  const { products: Products, loading: productLoading } = useSelector(
    (st) => st.getAll
  );
  useEffect(() => {
    if (productLoading || !Products) {
      dispatch(allProducts());
    }
  }, [dispatch, productLoading]);

  // console.log('PRODUCTS', Products);
  // console.log('PRODUCT', product);

  const { id } = useParams();
  let { error, loading, value } = useFetch(
    `${API_BASE_URL}/products/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
    [id],
    'product'
  );

  useEffect(() => {
    if (!value) return;
    setProduct(value);
  }, [value]);

  //* set Related Proucts
  useEffect(() => {
    setRelatedProduct(
      Products?.filter((el) => {
        return el?.category?.name === product?.category?.name;
      })
    );
  }, [product, Products]);

  const increaseNoOfItems = () => {
    setQuantity(quantity + 1);
  };
  const decreaseNoOfItems = () => {
    setQuantity(quantity - 1);
  };

  const handleImageClick = (e) => {
    const { image } = e.currentTarget.dataset;
    // toggleOpen();
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (error) {
    console.log('error', error);
    return <Navigate to='/' />;
  }

  return (
    <div
      className={clsx(
        classes_g.componentSectionGap,
        classes_g.smallOutletGap,
        classes.root
      )}
    >
      {loading ? (
        // ^ Skeleton
        <>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Skeleton
                variant='rect'
                animation='wave'
                width={'100%'}
                height={330}
              />
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
                              animation='wave'
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
                  <Skeleton animation='wave' variant='text' />
                </Typography>
                <Typography
                  variant='h4'
                  color='textSecondary'
                  sx={{ mt: 1 }}
                >
                  <Skeleton animation='wave' variant='text' />
                </Typography>
                <Typography variant='h5' sx={{ mt: 1 }}>
                  <Skeleton animation='wave' variant='text' />
                </Typography>
                <Typography variant='body1' sx={{ mt: 3 }}>
                  <Skeleton animation='wave' variant='text' />
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
                  <Skeleton animation='wave' variant='rect' />
                </Box>
                <Skeleton animation='wave' variant='text' />
              </div>
            </Grid>
          </Grid>

          <Box mt={4} width='100%'>
            <Skeleton
              animation='wave'
              variant='text'
              width='100%'
              height={50}
            />
            <CarouselLayout respSettings={responsive2}>
              {Array(6)
                .fill()
                .map((_, idx) => (
                  <div key={idx} className={classes_g.carouselItem}>
                    <Box
                      borderRadius={10}
                      overflow='hidden'
                      height='100%'
                      minHeight={225}
                    >
                      <Skeleton
                        animation='wave'
                        variant='rect'
                        width='100%'
                        height='100%'
                      />
                    </Box>
                  </div>
                ))}
            </CarouselLayout>
          </Box>
        </>
      ) : (
        // ^ Actual Data
        <>
          <div className={classes.prodViewWrapper}>
            {/* //^ Product Images  */}
            <div>
              <Grid container spacing={2}>
                <Grid item xs={8} sm={12}>
                  <Card sx={{ boxShadow: 'none', borderRadius: 1 }}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={product.images[0] || prod2}
                      data-image={product.images[0]}
                      onClick={handleImageClick}
                    />
                  </Card>
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
                            data-image={product.images[0]}
                            onClick={handleImageClick}
                          />
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </div>
            {/* //^ Product Info */}
            <div>
              <Box width='100%' display='flex' flexDirection='column'>
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
                      {capitalizeFirstLetter(product.name)}
                    </Typography>
                    <Typography
                      variant='subtitle1'
                      component='span'
                      color='textSecondary'
                      className={classes_g.lightText}
                    >
                      ({capitalizeFirstLetter(product.info)})
                    </Typography>
                  </Box>
                  <Box
                    display='flex'
                    gridGap={10}
                    alignItems='center'
                  >
                    <Rating value={4} readOnly size='small' />
                    <Typography
                      variant='subtitle1'
                      className={classes_g.lightText}
                    >
                      {product.rating}
                    </Typography>
                  </Box>
                  <Typography variant='h5' sx={{ mt: 1 }}>
                    ${Math.floor(product.price)}
                  </Typography>
                </Box>

                <Typography variant='body2' sx={{ mt: 1 }}>
                  {capitalizeFirstLetter(product.description)}
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
                      disabled={quantity <= 1}
                      onClick={decreaseNoOfItems}
                    >
                      <RemoveRounded />
                    </IconButton>
                    <Typography
                      variant='subtitle1'
                      style={{ fontWeight: 600 }}
                      sx={{ userSelect: 'none' }}
                    >
                      {quantity}
                    </Typography>
                    <IconButton
                      color='primary'
                      onClick={increaseNoOfItems}
                      disabled={quantity >= 10}
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
                      className={clsx(classes_g.lightText, {
                        [classes.statusSuccess]:
                          product.countInStock > 0,
                        [classes.statusFail]:
                          product.countInStock <= 0,
                      })}
                      sx={{ userSelect: 'none' }}
                    >
                      {product.countInStock > 0
                        ? 'In Stock'
                        : 'Out of Stock'}
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
                  <Tab label='Reviews' {...a11yProps(0)} />
                  <Tab {...a11yProps(1)} label='Related Products' />
                </Tabs>
              </Box>
            </div>
          </div>

          {/* //^ Product Option Panel */}
          {/* //^ Product Reviews */}
          <TabPanel
            className={classes.TabPanel}
            value={tabValue}
            index={0}
          >
            {product.reviews.length > 0 ? (
              product.reviews.map((el) => (
                <Review {...el} key={el.user._id} />
              ))
            ) : (
              <Typography variant='body1' align='center'>
                No Reviews
              </Typography>
            )}
          </TabPanel>
          {/* //^ Related Products */}
          <TabPanel
            className={classes.TabPanel}
            value={tabValue}
            index={1}
          >
            <Box>
              <Box my={3}>
                <Typography variant='h4' align='center'>
                  Related Products
                </Typography>
              </Box>
              {relatedProduct && relatedProduct.length > 0 ? (
                <CarouselLayout respSettings={responsive2}>
                  {relatedProduct.map((el) => (
                    <div
                      key={el._id}
                      className={classes_g.carouselItem}
                    >
                      <ProdServCard {...el} isPromo={false} />
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
      )}
    </div>
  );
};

export default ProductDetails;
