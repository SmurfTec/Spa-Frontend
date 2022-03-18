import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Box, Typography } from '@material-ui/core';

import AdsCarousel from 'components/Carousels/AdsCarousel';
import ProdServContent from './ProdServContent';

import { getVendor } from 'store/slices/vendors';

import globalStyles from 'styles/commonStyles';
import styles from 'styles/ProductsServiceStyles';

import StarIcon from '@material-ui/icons/Star';

const VendorProductsServices = () => {
  const classes = styles();
  const classes_g = globalStyles();

  const { vendorId, type } = useParams();
  const { vendor } = useSelector((state) => ({
    vendor: getVendor(state, vendorId),
  }));

  return (
    <div className={classes_g.componentSectionGap}>
      <div className={classes.vendorContainer}>
        <div>
          <img
            src={vendor.bannerImages[0]}
            alt={vendor.fullName}
            width='100px'
            height='100px'
          />
          <div>
            <Typography variant='h5'>{vendor.fullName}</Typography>
            <Typography variant='body2'>{vendor.info}</Typography>
          </div>
        </div>
        <div>
          <Box display='flex' gridColumnGap={5} alignItems='center'>
            <StarIcon />
            <Typography variant='h5'>4.6 (580)</Typography>
          </Box>
          {/* // ? Should it be NavLink or button */}
          <Typography variant='subtitle2' color='primary' align='center'>
            view Reviews
          </Typography>
        </div>
      </div>

      {/* // ^ Ads Carousel */}
      <AdsCarousel />

      <ProdServContent data={[]} type={type} />
    </div>
  );
};

export default VendorProductsServices;
