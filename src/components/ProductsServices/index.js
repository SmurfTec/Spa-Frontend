import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { Box, Button, Typography } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import styles from 'styles/ProductsServiceStyles';
import globalStyles from 'styles/commonStyles';
import Search from 'components/common/Search/Search';
import { LoremIpsum, shortVersion, loremShort, loremlong } from 'data';

import StarIcon from '@material-ui/icons/Star';
import vendorLogo from 'assets/bambooSpa.svg';
import spa2 from 'assets/spa2.jpg';
import ProductCarousel from 'components/Carousels/ProductCarousel';

const ProductsServices = () => {
  const classes = styles();
  const classes_g = globalStyles();
  const [active, setActive] = useState('all');

  console.log('In Servides');
  return (
    <div className={classes_g.componentSectionGap}>
      <div>
        <div
          className={clsx(classes.vendorContainer, classes_g.sectHorAlignment)}
        >
          <div>
            <img
              src={vendorLogo}
              alt='Bamboo Spa'
              width='100px'
              height='100px'
            />
            <div>
              <Typography variant='h5'>
                Bamboo Spa Products & Services
              </Typography>

              <Typography variant='body2'>{loremShort}</Typography>
            </div>
          </div>
          <div>
            <Box display='flex' gridColumnGap={5} alignItems='center'>
              <StarIcon />
              <Typography variant='h5'>4.6 (580)</Typography>
            </Box>
            {/* // ? Should it be NavLink or button */}
            <Typography variant='subtitle1' color='primary'>
              view Reviews
            </Typography>
            <Box></Box>
          </div>
        </div>
      </div>

      {/* // ^ Carousel */}
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
          <img src={spa2} alt='Spa Vendor' />
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

      {/* // ^ Search Comp */}
      <div className={classes_g.sectHorAlignment}>
        <Search placeholder='Product or Service Name ' />
      </div>

      {/* // ^ Buttons (for Tabs layout) */}
      <Box mt={3} display='flex' gridColumnGap={15} justifyContent='center'>
        <Button
          id='all'
          variant='contained'
          color={active === 'all' ? 'primary' : 'default'}
        >
          All
        </Button>
        <Button
          id='services'
          variant='contained'
          color={active === 'services' ? 'primary' : 'default'}
        >
          Services
        </Button>
        <Button
          id='products'
          variant='contained'
          color={active === 'products' ? 'primary' : 'default'}
        >
          Products
        </Button>
        <Button
          id='sales'
          variant='contained'
          color={active === 'sales' ? 'primary' : 'default'}
        >
          Flash Sales
        </Button>
      </Box>

      {/* // ^  New arrivals Carousel */}
      <div className={classes_g.sectHorAlignment}>
        <Typography variant='h4'>New Arrivals</Typography>
      </div>

      <Box mt={3}>
        <Box className={classes_g.carouselDefaults}>
          <ProductCarousel isPromo={false} />
        </Box>

        <Box
          mt={2}
          className={clsx(classes_g.sectionLink, classes_g.linkUnderline)}
        >
          <NavLink to='/'>See More</NavLink>
        </Box>
      </Box>

      {/* // ^  Just For You Table  */}
      <div className={classes_g.sectHorAlignment}>
        <Typography variant='h4'>Just For You</Typography>
      </div>

      <Box mt={3}>
        <Box className={classes_g.carouselDefaults}>
          <ProductCarousel isPromo={false} />
        </Box>
      </Box>

      {/* // ^  Just For You carousel */}
    </div>
  );
};

export default ProductsServices;
