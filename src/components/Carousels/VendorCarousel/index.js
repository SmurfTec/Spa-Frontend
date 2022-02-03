import React from 'react';

import { vendors } from 'data';
import VendorCard from './VendorCard';
import CarouselLayout from '../Default/CarouselLayout';
import styles from 'styles/commonStyles';
import { responsive1 } from '../Default/settings';

const VendorCarousel = () => {
  const classes = styles();
  return (
    <CarouselLayout respSettings={responsive1}>
      {vendors &&
        vendors.length > 0 &&
        vendors.map((el) => (
          <div key={el._id} className={classes.carouselItem}>
            <VendorCard {...el} />
          </div>
        ))}
    </CarouselLayout>
  );
};

export default VendorCarousel;
