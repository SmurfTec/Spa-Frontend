import React, { useEffect } from 'react';

// import { vendors } from 'data';
import VendorCard from './VendorCard';
import CarouselLayout from '../Default/CarouselLayout';
import styles from 'styles/commonStyles';
import { responsive1 } from '../Default/settings';
import { fetchVendors } from 'store/slices/vendors';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from '@material-ui/lab';
import { globalVendorsSelectors } from 'store/slices/vendors';

const VendorCarousel = () => {
  const classes = styles();
  const { loading, vendors } = useSelector((state) => ({
    loading: state.vendors.loading,
    vendors: globalVendorsSelectors.selectAll(state),
  }));

  return (
    <CarouselLayout respSettings={responsive1}>
      {loading
        ? Array(5)
            .fill()
            .map((_, idx) => (
              <div key={idx} className={classes.carouselItem}>
                <Skeleton varaint='rect' height='250px' width='100%' />
              </div>
            ))
        : vendors.map((el) => (
            <div key={el._id} className={classes.carouselItem}>
              <VendorCard {...el} />
            </div>
          ))}
    </CarouselLayout>
  );
};

export default VendorCarousel;
