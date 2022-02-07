import React from 'react';

import { decreaseBy, mixedProdServ } from 'data';
import Card from './Card';
import CarouselLayout from '../Default/CarouselLayout';
import styles from 'styles/commonStyles';
import { responsive2 } from '../Default/settings';

const ProductCarousel = (props) => {
  const classes = styles();
  return (
    <CarouselLayout respSettings={responsive2}>
      {mixedProdServ &&
        mixedProdServ.length > 0 &&
        mixedProdServ.map((el, index) => (
          <div key={el._id} className={classes.carouselItem}>
            <Card
              {...el}
              isPromo={props.isPromo}
              showDesc={props.showDesc}
              promoPrice={el.price.split('$')[1] - decreaseBy[index]}
            />
          </div>
        ))}
    </CarouselLayout>
  );
};

export default ProductCarousel;
