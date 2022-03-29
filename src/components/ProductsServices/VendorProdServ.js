import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import AdsCarousel from 'components/Carousels/AdsCarousel';
import ProdServContent from './ProdServContent';
import { getVendor } from 'store/slices/vendors';
import globalStyles from 'styles/commonStyles';
import styles from 'styles/ProductsServiceStyles';
import Loading from 'components/common/Loading';
import StarIcon from '@material-ui/icons/Star';
import useFetch from 'hooks/useFetch';
import { API_BASE_URL } from 'utils/makeReq';

const VendorProductsServices = () => {
  const classes = styles();
  const classes_g = globalStyles();
  const { vendorId, type } = useParams();

  const { vendor } = useSelector((state) => ({
    vendor: getVendor(state, vendorId),
  }));
  // console.log('ID', vendorId);
  let {
    error,
    loading,
    value,
    setValue: setProdServ,
  } = useFetch(
    `${API_BASE_URL}/users/details/${vendorId}`,
    {},
    [vendorId],
    'user'
  );

  if (loading) {
    return <Loading />;
  }
  // console.log('value', error, loading, value);
  const { user, products, services, flashSales } = value;

  return (
    <div className={classes_g.componentSectionGap}>
      <div className={classes.vendorContainer}>
        <div>
          <img
            src={user?.bannerImages[0]}
            alt={user?.fullName}
            width='100px'
            height='100px'
          />
          <div>
            <Typography variant='h5'>{user?.fullName}</Typography>
            <Typography variant='body2'>{user?.info}</Typography>
          </div>
        </div>
        <div>
          <Box display='flex' gridColumnGap={5} alignItems='center'>
            <StarIcon />
            <Typography variant='h5'>
              {vendor.rating}({vendor.ratingsQuantity || 0})
            </Typography>
          </Box>
          {/* // ? Should it be NavLink or button */}
          <Typography variant='subtitle2' color='primary' align='center'>
            view Reviews
          </Typography>
        </div>
      </div>

      {/* // ^ Ads Carousel */}
      <AdsCarousel images={user.bannerImages} />

      {/* <ProdServContent data={[]} type={type} /> */}
      <ProdServContent
        products={products || []}
        services={services || []}
        flashSales={flashSales || []}
        link={`vendors/${vendorId}`}
      />
    </div>
  );
};

export default VendorProductsServices;
