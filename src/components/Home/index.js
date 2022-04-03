import React, { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';

import Search from 'components/common/Search/Search';
import VendorCarousel from 'components/Carousels/VendorCarousel';
import ProductServiceCarousel from 'components/Carousels/ProductServiceCarousel';
import AdsCarousel from 'components/Carousels/AdsCarousel';
import Banner from './Banner';
import Offers from './Offers';

import { loremShort, loremlong } from 'data';

import globalStyles from 'styles/commonStyles';
import styles from 'styles/HomeStyles';
import spa1 from 'assets/med.jpg';
import spa2 from 'assets/spa2.jpg';
import Blog from 'components/Blog';
import Loading from 'components/common/Loading';
import { getBanners } from 'store/slices/banners/extraReducers';
import { BatteryUnknownRounded } from '@material-ui/icons';
import queryString from 'query-string';

const Home = () => {
  const classes = styles();
  const classes_g = globalStyles();
  const { banners } = useSelector((st) => st.banners);
  const location = useLocation();
  const dispatch = useDispatch();
  const { sales, topSelling } = useSelector((st) => st.products);

  const navigate = useNavigate();
  const [filteredTopSelling, setFilteredTopSelling] = useState([]);
  const [partnersImages, setPartnersImages] = useState([]);
  const [newsletter1, setNewsletter1] = useState([]);
  const [newsletter2, setNewsletter2] = useState([]);
  const [productsImages, setProductsImages] = useState([]);
  const [salesImages, setSalesImages] = useState([]);

  const parsedQuery = useMemo(() => {
    return queryString.parse(location.products);
  }, [location.products]);

  useEffect(() => {
    if (!topSelling) return;
    if (parsedQuery.products) {
      setFilteredTopSelling(
        topSelling.filter((el) =>
          el.className
            .toLowerCase()
            .includes(parsedQuery.products.toLowerCase())
        )
      );
    } else {
      setFilteredTopSelling(topSelling);
    }
  }, [topSelling, parsedQuery]);

  const patnerSearch = (value) => {
    navigate(`?search=${value}`);
  };

  const productsSearch = (value) => {
    navigate(`?products=${value}`);
  };

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    console.log('banners', banners);
    if (!banners) return dispatch(getBanners());

    let p1 = banners.find((el) => el.name === 'Partners Carousel');
    let p2 = banners.find((el) => el.name === 'Sales Carousel');
    let p3 = banners.find((el) => el.name === 'Products Carousel');
    let p4 = banners.find((el) => el.name === 'Newsletter1');
    let p5 = banners.find((el) => el.name === 'Newsletter2');

    setPartnersImages(p1.images);
    setNewsletter1(p4.images);
    setNewsletter2(p5.images);
    setProductsImages(p3.images);
    setSalesImages(p2.images);
  }, [banners]);

  if (!banners) return <Loading noTitle />;

  return (
    <>
      {/* // ^ Banner */}
      <Banner banners={banners} />

      {/* // ^ Partners section*/}
      <section id='ourPartners' className={classes_g.backWrapper}>
        <Box className='overlay' position='absolute' />
        <Box py={5} zIndex={2} width='100%' className={classes_g.sectionFlex}>
          <div className={classes_g.sectHorAlignment}>
            <Search placeholder='Where to ?' submitForm={patnerSearch} />
          </div>
          <div className={classes_g.sectHorAlignment}>
            <Typography variant='h2' align='center'>
              Our Partners
            </Typography>
            <Typography
              variant='subtitle1'
              align='center'
              className={classes_g.subHeading}
            >
              {loremShort}
            </Typography>
          </div>

          <Carousel
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
            className={`${classes_g.Carousel} ${classes_g.aboutCarousel}`}
          >
            <div>
              <img src={partnersImages[0]?.url} alt='' />
              <div className={classes_g.overlay} />
              <Box className='legend'>
                <div className={classes_g.contentContainer}>
                  <div>
                    <Typography variant='h5'>ABOUT</Typography>
                    <Typography variant='body2'>{loremlong}</Typography>
                  </div>

                  <Box mt={2}>
                    <NavLink to='/'>See More</NavLink>
                  </Box>
                </div>
              </Box>
            </div>
            <div>
              <img src={partnersImages[1]?.url} alt='' />
              <div className={classes_g.overlay} />
              <Box className='legend'>
                <div className={classes_g.contentContainer}>
                  <div>
                    <Typography variant='h5'>ABOUT</Typography>
                    <Typography variant='body2'>{loremlong}</Typography>
                  </div>

                  <Box mt={2}>
                    <NavLink to='/'>See More</NavLink>
                  </Box>
                </div>
              </Box>
            </div>
          </Carousel>

          <Box className={classes_g.carouselDefaults}>
            <VendorCarousel />
          </Box>
        </Box>
      </section>

      {/* // ^ Offers Section */}
      <section>
        <Offers />
      </section>

      {/* // ^ Flash Sales Section */}
      <section id='flashSales' className={classes_g.backWrapper}>
        <Box className='overlay' position='absolute' />
        <Box py={5} zIndex={2} width='100%' className={classes_g.sectionFlex}>
          <div className={classes_g.sectHorAlignment}>
            <Typography variant='h2' align='center'>
              Flash Sales
            </Typography>
            <Typography
              variant='subtitle1'
              align='center'
              className={classes_g.subHeading}
            >
              {loremShort}
            </Typography>
          </div>
          <Carousel
            showArrows={false}
            showThumbs={false}
            animationHandler='fade'
            swipeable={false}
            showStatus={false}
            interval={4000}
            autoPlay={true}
            infiniteLoop={true}
            className={classes_g.Carousel}
          >
            <div>
              <img src={salesImages[0]?.url} alt='' />
              <div className={classes_g.overlay} />
              <Box className='legend'>
                <div className={classes_g.contentContainer}>
                  <div>
                    <Typography variant='h5'>ABOUT</Typography>
                    <Typography variant='body2'>{loremlong}</Typography>
                  </div>

                  <Box mt={2}>
                    <NavLink to='/'>See More</NavLink>
                  </Box>
                </div>
              </Box>
            </div>
            <div>
              <img src={salesImages[1]?.url} alt='' />
              <div className={classes_g.overlay} />
              <Box className='legend'>
                <div className={classes_g.contentContainer}>
                  <div>
                    <Typography variant='h5'>ABOUT</Typography>
                    <Typography variant='body2'>{loremlong}</Typography>
                  </div>

                  <Box mt={2}>
                    <NavLink to='/'>See More</NavLink>
                  </Box>
                </div>
              </Box>
            </div>
          </Carousel>

          {/* // ^ Ads Carousel */}
          <AdsCarousel />

          <Box className={classes_g.carouselDefaults}>
            <ProductServiceCarousel data={sales} showVendor={true} />
          </Box>
          <Box
            mt={2}
            className={clsx(classes_g.sectionLink, classes_g.linkUnderline)}
          >
            <NavLink to='/products&services/flashSales'>See More</NavLink>
          </Box>
        </Box>
      </section>

      {/* // ^ Flash Sales Banner Section */}
      <section>
        <div className={clsx(classes_g.secBackImage, classes.homePromoBg)}>
          <Grid container className={classes.offerWrapper}>
            <Grid item xs={12} sm={3}>
              <Box
                className={classes.divbackImg}
                sx={{
                  backgroundImage: `url(${newsletter1?.[0]?.url})`,
                }}
              >
                <Box
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                  sx={{ height: '100%' }}
                >
                  <Box sx={{ width: '50%', flex: 1 }} />

                  <Box>
                    <Button color='secondary' variant='contained'>
                      Explore
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box
                className={classes.divbackImg}
                sx={{
                  backgroundImage: `url(${newsletter2?.[2]?.url})`,
                }}
              >
                <Box
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                  sx={{ height: '100%' }}
                >
                  <Box sx={{ flex: 1 }} />
                  <Box>
                    <Button color='secondary' variant='contained'>
                      Explore
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box>
            <Carousel
              showArrows={false}
              showThumbs={false}
              animationHandler='fade'
              swipeable={false}
              showStatus={false}
              interval={4000}
              autoPlay={true}
              infiniteLoop={true}
              className={classes_g.Carousel}
            >
              <div className='carouselMini'>
                <img src={productsImages?.[0]?.url} alt='' />
                <div className={classes_g.overlay} />
                <Box className='legend'>
                  <div className={classes_g.contentContainer}>
                    <div>
                      <Typography variant='h5'>ABOUT</Typography>
                      <Typography variant='body2'>{loremlong}</Typography>
                    </div>

                    <Box mt={2}>
                      <Button color='secondary' variant='contained'>
                        Explore
                      </Button>
                    </Box>
                  </div>
                </Box>
              </div>
              <div className='carouselMini'>
                <img src={productsImages?.[1]?.url} alt='' />
                <div className={classes_g.overlay} />
                <Box className='legend'>
                  <div className={classes_g.contentContainer}>
                    <div>
                      <Typography variant='h5'>ABOUT</Typography>
                      <Typography variant='body2'>{loremlong}</Typography>
                    </div>

                    <Box mt={2}>
                      <Button color='secondary' variant='contained'>
                        Explore
                      </Button>
                    </Box>
                  </div>
                </Box>
              </div>
            </Carousel>
          </Box>
        </div>
      </section>

      {/* // ^ Products Banner Section */}
      <section id='ourProducts' className={classes_g.backWrapper}>
        <Box className='overlay' position='absolute' />
        <Box py={5} zIndex={2} width='100%' className={classes_g.sectionFlex}>
          <div className={classes_g.sectHorAlignment}>
            <Search placeholder='Product name' submitForm={productsSearch} />
          </div>

          <div className={classes_g.sectHorAlignment}>
            <Typography variant='h2' align='center'>
              Our Products
            </Typography>
            <Typography
              variant='subtitle1'
              align='center'
              className={classes_g.subHeading}
            >
              {loremShort}
            </Typography>
          </div>

          <Box className={classes_g.carouselDefaults}>
            <ProductServiceCarousel data={topSelling} showVendor={true} />
          </Box>

          <Box
            mt={2}
            className={clsx(classes_g.sectionLink, classes_g.linkUnderline)}
            // className={`${classes_g.sectionLink} ${classes.linkUnderline}`}
          >
            <NavLink to='/products&services/products'>See More</NavLink>
          </Box>
        </Box>
      </section>

      {/* //^ Blog Section */}

      <section
        id='blog'
        className={clsx(
          classes_g.sectionGap,
          classes_g.sectionFlex,
          classes_g.homesectionGap
        )}
      >
        <div className={classes_g.sectHorAlignment}>
          <Typography variant='h2' align='center'>
            Our Blog
          </Typography>
          <Typography
            variant='subtitle1'
            align='center'
            className={classes_g.subHeading}
          >
            {loremShort}
          </Typography>
          <Blog />

          <Box
            mt={3}
            className={clsx(classes_g.sectionLink, classes_g.linkUnderline)}
          >
            <NavLink to='/blog'>See More</NavLink>
          </Box>
        </div>
      </section>
    </>
  );
};

export default Home;
