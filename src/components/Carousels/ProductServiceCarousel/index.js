import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import CarouselLayout from '../Default/CarouselLayout';
import Card from './Card';

import styles from 'styles/commonStyles';
import { responsive2 } from '../Default/settings';

const ProdServCarousel = (props) => {
  const classes = styles();
  const { data, fetching } = props;

  return (
    <CarouselLayout respSettings={responsive2}>
      {fetching ? (
        Array(6)
          .fill()
          .map((_, idx) => (
            <div key={idx} className={classes.carouselItem}>
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
          ))
      ) : data.length > 0 ? (
        data.map((el, index) => (
          <div key={el._id} className={classes.carouselItem}>
            <Card item={el} showVendor={props.showVendor} />
          </div>
        ))
      ) : (
        <Box mt={4}>
          <Typography variant='subtitle1' align='center' fullWidth>
            Nothing to show
          </Typography>
        </Box>
      )}
    </CarouselLayout>
  );
};

export default ProdServCarousel;
