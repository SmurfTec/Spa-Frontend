import { Box, Button, Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import styles from 'styles/HomeStyles';
import globalStyles from 'styles/commonStyles';
import { Carousel } from 'react-responsive-carousel';
import clsx from 'clsx';
import spa1 from 'assets/med.jpg';
import spa2 from 'assets/spa2.jpg';
import Search from 'components/common/Search/Search';
import { LoremIpsum, shortVersion, vendors, loremShort, loremlong } from 'data';
import { NavLink } from 'react-router-dom';
import VendorCarousel from 'components/Carousels/VendorCarousel';
import Subscription from 'components/Subscription';
import ProductCarousel from 'components/Carousels/ProductCarousel';
import Footer from 'components/common/Footer';
import Banner from './Banner';
import Offers from './Offers';
const Home = () => {
  const classes = styles();
  const classes_g = globalStyles();

  const patnerSearch = () => {};
  return (
    <>
      {/* // ^ Banner */}
      <Banner />
      {/* // ^ Partners*/}
      <section className={clsx(classes_g.sectionGap, classes_g.sectionFlex)}>
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
          animationHandler='fade'
          swipeable={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          className={classes_g.Carousel}
        >
          <div>
            <img src={spa2} alt='' />
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
        <Box mt={2} className={classes_g.sectionLink}>
          <NavLink to='/'>See More</NavLink>
        </Box>
      </section>
      {/* // ^ Offers Section */}
      <section className={classes_g.sectionGap}>
        <Offers />
      </section>
      {/* // ^ Promotions Section */}
      <section className={clsx(classes_g.sectionGap, classes_g.sectionFlex)}>
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
          showArrows={true}
          showThumbs={false}
          animationHandler='fade'
          swipeable={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          className={classes_g.Carousel}
        >
          <div className='rndCornCarsl'>
            <img src={spa2} alt='' />
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
          <ProductCarousel isPromo={true} />
        </Box>
        <Box
          mt={2}
          className={clsx(classes_g.sectionLink, classes_g.linkUnderline)}
        >
          <NavLink to='/'>See More</NavLink>
        </Box>
      </section>
      {/* // ^ Promotions Banner Section */}
      <section className={classes_g.sectionGap}>
        <div className={clsx(classes_g.secBackImage, classes.homePromoBg)}>
          <Grid container className={classes.offerWrapper}>
            <Grid item xs={12} sm={3}>
              <Box
                className={classes.divbackImg}
                sx={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1453834190665-46ff0a1fbd5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80)`,
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
                  backgroundImage: `url(https://images.unsplash.com/photo-1631730486572-226d1f595b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=475&q=80)`,
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

          <Box sx={{ zIndex: 2 }}>
            <Carousel
              showArrows={false}
              showThumbs={false}
              animationHandler='fade'
              swipeable={false}
              showStatus={false}
              autoPlay={true}
              infiniteLoop={true}
              className={classes_g.Carousel}
            >
              <div className='carouselMini'>
                <img src={spa2} alt='' />
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
                <img src={spa1} alt='' />
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
      <section className={clsx(classes_g.sectionGap, classes_g.sectionFlex)}>
        <div className={classes_g.sectHorAlignment}>
          <Search placeholder='Product name' submitForm={patnerSearch} />
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
          <ProductCarousel isPromo={false} />
        </Box>

        <Box
          mt={2}
          className={clsx(classes_g.sectionLink, classes_g.linkUnderline)}
          // className={`${classes_g.sectionLink} ${classes.linkUnderline}`}
        >
          <NavLink to='/'>See More</NavLink>
        </Box>
      </section>
    </>
  );
};

export default Home;
