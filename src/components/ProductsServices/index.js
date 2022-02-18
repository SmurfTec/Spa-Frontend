import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import clsx from 'clsx';
import { Box, Button, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { Carousel } from 'react-responsive-carousel';

import { useToggleInput } from 'hooks';
import Card from 'components/Carousels/ProductServiceCarousel/Card';
import ProductServiceCarousel from 'components/Carousels/ProductServiceCarousel';
import Search from 'components/common/Search/Search';
import AdsCarousel from 'components/Carousels/AdsCarousel';
import { loremShort, loremlong, products, mixedProdServ } from 'data';

import globalStyles from 'styles/commonStyles';
import styles from 'styles/ProductsServiceStyles';

import StarIcon from '@material-ui/icons/Star';
import vendorLogo from 'assets/bambooSpa.svg';
import spa2 from 'assets/spa2.jpg';
import spa1 from 'assets/med.jpg';

const VendorProductsServices = () => {
  const classes = styles();
  const classes_g = globalStyles();
  const [active, setActive] = useState('all');
  const [loading, setLoading] = useToggleInput(false);

  const { vendorId } = useParams();

  // * Pagination Stuff
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    console.log('vendorId', vendorId);
  }, []);

  const calcNoOfItems = (arr) => {
    let st = (page - 1) * rowsPerPage + 1;
    let end = (page - 1) * rowsPerPage + rowsPerPage;

    return `Showing ${st} to ${end} of ${arr.length} Entries`;
  };

  const handleActive = (e) => {
    const { tabname } = e.currentTarget.dataset;
    console.log(tabname);
    setActive(tabname);
  };

  return (
    <div className={classes_g.componentSectionGap}>
      <div className={classes.vendorContainer}>
        <div>
          <img src={vendorLogo} alt='Bamboo Spa' width='100px' height='100px' />
          <div>
            <Typography variant='h5'>Bamboo Spa Products & Services</Typography>

            <Typography variant='body2'>{loremShort}</Typography>
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
          <Box></Box>
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

      {/* <div className={classes_g.carouselDefaults}> */}
      <ProductServiceCarousel isPromo={false} showDesc={false} />
      {/* </div> */}

      {/* <div className={clsx(classes_g.sectionLink, classes_g.linkUnderline)}>
        <NavLink to='/'>See More</NavLink>
      </div> */}

      {/* // ^  Just For You Table  */}
      {/* <div className={classes_g.sectHorAlignment}> */}
      <Box mt={4}>
        <Typography variant='h4'>Just For You</Typography>
      </Box>
      {/* </div> */}
      {/* // ^ Table Layout */}
      {/* <div className={classes_g.sectHorAlignment}> */}
      <div className={classes_g.tableContainer}>
        {mixedProdServ.length > 0 ? (
          <>
            <div
              className={clsx(
                classes_g.gridContainer,
                classes_g.gridContainerFill
              )}
              // class='grid-container grid-container--fit'
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
                // variant='outlined'

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
      {/* </div> */}

      {/* // ^ Table flex Layout
      <div className={classes_g.sectHorAlignment}>
        <Box my={2}>
          <Typography varaint='subtitle1'>FlexBox</Typography>
        </Box>
        <div className={classes_g.tableContainer}>
          {products.length > 0 ? (
            <>
              <div className={classes_g.tableCardsWrapper}>
                {products
                  ?.slice(
                    (page - 1) * rowsPerPage,
                    (page - 1) * rowsPerPage + rowsPerPage
                  )
                  .map((prod, index) => (
                    // <div key={prod._id} className={classes_g.tableCardContainer}>
                    <Card
                      key={prod._id}
                      {...prod}
                      isPromo={false}
                      type='product'
                      showDesc={false}
                    />

                    // </div>
                  ))}
              </div>
              <Pagination
                color='primary'
                count={Math.ceil(products.length / rowsPerPage)}
                page={page}
                onChange={handleChangePage}
              />
            </>
          ) : (
            <Box mt={4}>
              <Typography variant='subtitle1'>No Record found</Typography>
            </Box>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default VendorProductsServices;
