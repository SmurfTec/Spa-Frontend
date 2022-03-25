import React, { useEffect, useMemo, useState } from 'react';

// import { vendors } from 'data';
import VendorCard from './VendorCard';
import CarouselLayout from '../Default/CarouselLayout';
import styles from 'styles/commonStyles';
import { responsive1 } from '../Default/settings';
import { fetchVendors } from 'store/slices/vendors';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Skeleton } from '@material-ui/lab';
import { globalVendorsSelectors } from 'store/slices/vendors';
import queryString from 'query-string';

const VendorCarousel = () => {
  const classes = styles();
  const location = useLocation();
  const [data, setData] = useState([]);

  const { loading, vendors } = useSelector((state) => ({
    loading: state.vendors.loading,
    vendors: globalVendorsSelectors.selectAll(state),
  }));

  const parsedQuery = useMemo(() => {
    return queryString.parse(location.search);
  }, [location.search]);

  useEffect(() => {
    if (!vendors) return;
    if (parsedQuery.search) {
      setData(
        vendors.filter((vendor) =>
          vendor.fullName
            .toLowerCase()
            .includes(parsedQuery.search.toLowerCase())
        )
      );
    } else {
      setData(vendors);
    }
  }, [vendors, parsedQuery]);

  return (
    <CarouselLayout respSettings={responsive1}>
      {loading
        ? Array(5)
            .fill()
            .map((_, idx) => (
              <div key={idx} className={classes.carouselItem}>
                <Skeleton
                  varaint='rect'
                  height='250px'
                  width='100%'
                />
              </div>
            ))
        : data.map((el) => (
            <div key={el._id} className={classes.carouselItem}>
              <VendorCard {...el} />
            </div>
          ))}
    </CarouselLayout>
  );
};

export default VendorCarousel;
