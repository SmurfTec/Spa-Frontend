import React from 'react';

import { products, decreaseBy } from 'data';
import ProductCard from './ProductCard';
import CarouselLayout from '../Default/CarouselLayout';
import styles from 'styles/commonStyles';
import { responsive2 } from '../Default/settings';

const ProductCarousel = (props) => {
  const classes = styles();
  return (
    <CarouselLayout respSettings={responsive2}>
      {products &&
        products.length > 0 &&
        products.map((el, index) => (
          <div key={el._id} className={classes.carouselItem}>
            <ProductCard
              {...el}
              type='product'
              isPromo={props.isPromo}
              promoPrice={el.price.split('$')[1] - decreaseBy[index]}
            />
          </div>
        ))}
    </CarouselLayout>
  );
};

export default ProductCarousel;
