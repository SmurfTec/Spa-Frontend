import React from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { Box, Typography } from '@material-ui/core';
import styles from 'styles/commonStyles';

import { loremlong } from 'data';

const AdsCarousel = ({ images }) => {
  const classes_g = styles();
  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      interval={4000}
      // animationHandler='fade'
      swipeable={false}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      className={classes_g.Carousel}
    >
      {images &&
        images.map((image, ind) => (
          <div className='rndCornCarsl' key={ind}>
            <img src={image} alt='Spa Vendor' />
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
        ))}
    </Carousel>
  );
};

export default AdsCarousel;
