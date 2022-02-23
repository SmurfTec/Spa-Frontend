import React from 'react';

import { decreaseBy, mixedProdServ } from 'data';
import Card from './Card';
import CarouselLayout from '../Default/CarouselLayout';
import styles from 'styles/commonStyles';
import { responsive2 } from '../Default/settings';

const ProdServCarousel = (props) => {
  const classes = styles();
  const { data } = props;
  return (
    <CarouselLayout respSettings={responsive2}>
      {data.length > 0 &&
        data.map((el, index) => (
          <div key={el._id} className={classes.carouselItem}>
            <Card {...el} showVendor={props.showVendor} />
          </div>
        ))}
    </CarouselLayout>
  );
};

export default ProdServCarousel;
