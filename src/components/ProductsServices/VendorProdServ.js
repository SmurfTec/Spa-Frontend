import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { Box, Button, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

import Card from 'components/Carousels/ProductServiceCarousel/Card';
import ProductServiceCarousel from 'components/Carousels/ProductServiceCarousel';
import Search from 'components/common/Search/Search';
import AdsCarousel from 'components/Carousels/AdsCarousel';

import { getVendor } from 'store/slices/vendors';
import { mixedProdServ } from 'data';

import globalStyles from 'styles/commonStyles';
import styles from 'styles/ProductsServiceStyles';

import StarIcon from '@material-ui/icons/Star';

const VendorProductsServices = () => {
  const classes = styles();
  const classes_g = globalStyles();
  const [active, setActive] = useState('all');
  // const [vendor, setvendor] = useState(null);
  const { vendorId } = useParams();

  const { vendor } = useSelector((state) => ({
    vendor: getVendor(state, vendorId),
  }));

  console.log('vendor', vendor);

  // useEffect(() => {
  //   setvendor(vendorDetails);
  // }, [loading, vendorDetails]);

  // * Pagination Stuff
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const calcNoOfItems = (arr) => {
    let st = (page - 1) * rowsPerPage + 1;
    let end = (page - 1) * rowsPerPage + rowsPerPage;

    return `Showing ${st} to ${end} of ${arr.length} Entries`;
  };

  const handleActive = (e) => {
    const { tabname } = e.currentTarget.dataset;
    setActive(tabname);
  };

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

      {/* // ^ Search Comp */}
      <Search placeholder='Product or Service Name ' />

      {/* // ^ Buttons (for Tabs layout) */}
      <div className={classes_g.tabButtons}>
        <Button
          data-tabname='all'
          variant='contained'
          color={active === 'all' ? 'primary' : 'default'}
          onClick={handleActive}
        >
          All
        </Button>
        <Button
          data-tabname='services'
          variant='contained'
          color={active === 'services' ? 'primary' : 'default'}
          onClick={handleActive}
        >
          Services
        </Button>
        <Button
          data-tabname='products'
          variant='contained'
          color={active === 'products' ? 'primary' : 'default'}
          onClick={handleActive}
        >
          Products
        </Button>
        <Button
          data-tabname='flashSales'
          variant='contained'
          color={active === 'flashSales' ? 'primary' : 'default'}
          onClick={handleActive}
        >
          Flash Sales
        </Button>
      </div>
      {/* // ^  New arrivals Carousel */}
      <Box mt={4}>
        <Typography variant='h4'>New Arrivals</Typography>
      </Box>
      <ProductServiceCarousel data={mixedProdServ} showVendor={false} />

      {/* // ^  Just For You Table  */}
      <Box mt={4}>
        <Typography variant='h4'>Just For You</Typography>
      </Box>

      {/* // ^ Table Layout */}
      <div className={classes_g.tableContainer}>
        {mixedProdServ.length > 0 ? (
          <>
            <div
              className={clsx(
                classes_g.gridContainer,
                classes_g.gridContainerFill
              )}
            >
              {mixedProdServ
                ?.slice(
                  (page - 1) * rowsPerPage,
                  (page - 1) * rowsPerPage + rowsPerPage
                )
                .map((el) => (
                  <div key={el._id} className={classes_g.gridElement}>
                    <Card {...el} isPromo={false} />
                  </div>
                ))}
            </div>
            <div className={classes_g.tablePagination}>
              <Typography variant='subtitle2'>
                {calcNoOfItems(mixedProdServ)}
              </Typography>

              <Pagination
                color='primary'
                count={Math.ceil(mixedProdServ.length / rowsPerPage)}
                page={page}
                size='small'
                onChange={handleChangePage}
              />
            </div>
          </>
        ) : (
          <Box mt={4}>
            <Typography variant='subtitle1'>No Record found</Typography>
          </Box>
        )}
      </div>
    </div>
  );
};

export default VendorProductsServices;
