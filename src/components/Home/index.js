import { Box, Button, Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import styles from 'styles/HomeStyles';
import globalStyles from 'styles/commonStyles';
import { Carousel } from 'react-responsive-carousel';
import spa1 from 'assets/med.jpg';
import spa2 from 'assets/spa2.jpg';
import Search from 'components/common/Search/Search';
import { LoremIpsum, shortVersion, vendors, loremShort } from 'data';
import { NavLink } from 'react-router-dom';
import VendorCarousel from 'components/Carousels/VendorCarousel';
import Subscription from 'components/Subscription';
import ProductCarousel from 'components/Carousels/ProductCarousel';
import Footer from 'components/common/Footer';
import Banner from './Banner';

const Home = () => {
  const classes = styles();
  const classes_g = globalStyles();

  const patnerSearch = () => {};
  return (
    <>
      {/* // ^ Banner */}
      <section className={classes_g.sectionGap}>
        <Banner />
      </section>
      {/* // ^ Partners*/}
      <section className={`${classes_g.sectionGap} ${classes_g.sectionFlex}`}>
        <Search placeholder='Where to ?' submitForm={patnerSearch} />
        <Box>
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
        </Box>
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
                <Box sx={{ flexBasis: '45%' }}>
                  <Typography variant='h5'>ABOUT</Typography>
                  <Typography variant='body2'>{LoremIpsum}</Typography>

                  <Box mt={2}>
                    <NavLink to='/'>See More</NavLink>
                  </Box>
                </Box>
                <Box sx={{ flexBasis: '25%' }}>
                  <Typography variant='h3'>Bamboo Sea</Typography>
                  <Typography variant='body2'>{shortVersion}</Typography>
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
        <div className={`${classes_g.secBackImage} ${classes.homePromoBg}`}>
          <Grid container className={classes.offerCard}>
            <Grid item xs={12} sm={6}>
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
                  <Box sx={{ width: '50%', flex: 1 }}>
                    {/* <Box
                      display='flex'
                      flexDirection='column'
                      justifyContent='center'
                      sx={{ height: '100%' }}
                    > */}
                    <Typography variant='h4'>
                      Free Gift. Energise 9 Piece Set
                    </Typography>
                    <Typography variant='subtitle1'>
                      Weekly upto Rs 4000
                    </Typography>
                    <Typography variant='subtitle1'>Use Coupon</Typography>
                    <Typography variant='subtitle1' component='span'>
                      ENERGISE
                    </Typography>
                  </Box>
                  {/* </Box> */}

                  <Box>
                    <Button color='secondary' variant='contained'>
                      Explore
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
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
                  <Box sx={{ flex: 1 }}>
                    <div className={classes.offerProduct}>
                      <Typography variant='h4' align='center'>
                        BEAUTY PACK
                      </Typography>
                    </div>
                  </Box>
                  {/* </Box> */}

                  <Box>
                    <Button color='secondary' variant='contained'>
                      Explore
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                className={classes.divbackImg}
                sx={{
                  backgroundImage: `url(${spa2})`,
                }}
              >
                <Box
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                  sx={{ height: '100%' }}
                >
                  <Box sx={{ flex: 1 }}>
                    <div className={classes.offerProduct}>
                      <Typography variant='h4' align='center'>
                        BEAUTY PACK
                      </Typography>
                      <Typography variant='subtitle1'>Body & Hair</Typography>
                    </div>
                  </Box>
                  {/* </Box> */}

                  <Box>
                    <Button color='secondary' variant='contained'>
                      Explore
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {/* <Grid xs={12} sm={12}></Grid> */}
          </Grid>
          <Box
            sx={{
              margin: '0 auto',
              width: '75%',
            }}
          >
            <Subscription />
          </Box>
        </div>
      </section>
      {/* // ^ Promotions Section */}
      <section className={`${classes_g.sectionGap} ${classes_g.sectionFlex}`}>
        <Box>
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
        </Box>
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
          <div>
            <img src={spa2} alt='' />
            <div className={classes_g.overlay} />
            <Box className='legend'>
              <div className={classes_g.contentContainer}>
                <Box
                  sx={{ flexBasis: '45%', height: '100%' }}
                  display='flex'
                  flexDirection='column'
                  justifyContent='space-between'
                >
                  <div>
                    <Typography variant='h5'>ABOUT</Typography>
                    <Typography variant='body2'>{LoremIpsum}</Typography>
                  </div>

                  <div>
                    <Button color='secondary' variant='contained'>
                      Explore
                    </Button>
                  </div>
                </Box>
                <Box sx={{ flexBasis: '25%' }} />
              </div>
            </Box>
          </div>
        </Carousel>

        <Box className={classes_g.carouselDefaults}>
          <ProductCarousel isPromo={true} />
        </Box>
        <Box
          mt={2}
          className={`${classes_g.sectionLink} ${classes.linkUnderline}`}
        >
          <NavLink to='/'>See More</NavLink>
        </Box>
      </section>
      {/* // ^ Promotions Banner Section */}
      <section className={classes_g.sectionGap}>
        <div className={`${classes_g.secBackImage} ${classes.homePromoBg}`}>
          <Grid container className={classes.offerCard}>
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
              <div>
                <img src={spa2} alt='' />
                <div className={classes_g.overlay} />
                <Box className='legend'>
                  <div className={classes_g.contentContainer}>
                    <Box
                      sx={{ flexBasis: '45%', height: '100%' }}
                      display='flex'
                      flexDirection='column'
                      justifyContent='space-between'
                    >
                      <div>
                        <Typography variant='h5'>ABOUT</Typography>
                        <Typography variant='body2'>{LoremIpsum}</Typography>
                      </div>

                      <div>
                        <Button color='secondary' variant='contained'>
                          Explore
                        </Button>
                      </div>
                    </Box>
                    <Box sx={{ flexBasis: '25%' }} />
                  </div>
                </Box>
              </div>
              <div>
                <img src={spa1} alt='' />
                <div className={classes_g.overlay} />
                <Box className='legend'>
                  <div className={classes_g.contentContainer}>
                    <Box
                      sx={{ flexBasis: '45%', height: '100%' }}
                      display='flex'
                      flexDirection='column'
                      justifyContent='space-between'
                    >
                      <div>
                        <Typography variant='h5'>ABOUT</Typography>
                        <Typography variant='body2'>{LoremIpsum}</Typography>
                      </div>

                      <div>
                        <Button color='secondary' variant='contained'>
                          Explore
                        </Button>
                      </div>
                    </Box>
                    <Box sx={{ flexBasis: '25%' }} />
                  </div>
                </Box>
              </div>
            </Carousel>
          </Box>
        </div>
      </section>

      {/* // ^ Products Banner Section */}
      <section className={`${classes_g.sectionGap} ${classes_g.sectionFlex}`}>
        <Search placeholder='Where to ?' submitForm={patnerSearch} />
        <Box>
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
        </Box>

        <Box className={classes_g.carouselDefaults}>
          <ProductCarousel isPromo={false} />
        </Box>

        <Box
          mt={2}
          className={`${classes_g.sectionLink} ${classes.linkUnderline}`}
        >
          <NavLink to='/'>See More</NavLink>
        </Box>
      </section>
    </>
  );
};

export default Home;
