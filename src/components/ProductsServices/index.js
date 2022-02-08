import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { Box, Button, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { Carousel } from 'react-responsive-carousel';

import { useToggleInput } from 'hooks';
import ProductCard from 'components/Carousels/ProductCarousel/ProductCard';
import ProductCarousel from 'components/Carousels/ProductCarousel';
import Search from 'components/common/Search/Search';
import AdsCarousel from 'components/Carousels/AdsCarousel';
import { loremShort, loremlong, products } from 'data';

import globalStyles from 'styles/commonStyles';
import styles from 'styles/ProductsServiceStyles';

import StarIcon from '@material-ui/icons/Star';
import vendorLogo from 'assets/bambooSpa.svg';
import spa2 from 'assets/spa2.jpg';
import spa1 from 'assets/med.jpg';

const ProductsServices = () => {
  const classes = styles();
  const classes_g = globalStyles();
  const [active, setActive] = useState('all');
  const [loading, setLoading] = useToggleInput(false);

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
    setActive(e.target.name);
  };

  return (
    <div className={classes_g.componentSectionGap}>
      {console.log('active', active)}
      <div>
        <div
          className={clsx(classes.vendorContainer, classes_g.sectHorAlignment)}
        >
          <div>
            <img
              src={vendorLogo}
              alt='Bamboo Spa'
              width='100px'
              height='100px'
            />
            <div>
              <Typography variant='h5'>
                Bamboo Spa Products & Services
              </Typography>

              <Typography variant='body2'>{loremShort}</Typography>
            </div>
          </div>
          <div>
            <Box display='flex' gridColumnGap={5} alignItems='center'>
              <StarIcon />
              <Typography variant='h5'>4.6 (580)</Typography>
            </Box>
            {/* // ? Should it be NavLink or button */}
            <Typography variant='subtitle1' color='primary'>
              view Reviews
            </Typography>
            <Box></Box>
          </div>
        </div>
      </div>
      {/* // ^ Ads Carousel */}
      <AdsCarousel />

      {/* // ^ Search Comp */}
      <div className={classes_g.sectHorAlignment}>
        <Search placeholder='Product or Service Name ' />
      </div>
      {/* // ^ Buttons (for Tabs layout) */}
      <Box mt={3} display='flex' gridColumnGap={15} justifyContent='center'>
        <Button
          name='all'
          variant='contained'
          color={active === 'all' ? 'primary' : 'default'}
          onClick={handleActive}
        >
          All
        </Button>
        <Button
          name='services'
          variant='contained'
          color={active === 'services' ? 'primary' : 'default'}
          onClick={handleActive}
        >
          Services
        </Button>
        <Button
          name='products'
          variant='contained'
          color={active === 'products' ? 'primary' : 'default'}
          onClick={handleActive}
        >
          Products
        </Button>
        <Button
          name='sales'
          variant='contained'
          color={active === 'sales' ? 'primary' : 'default'}
          onClick={handleActive}
        >
          Flash Sales
        </Button>
      </Box>
      {/* // ^  New arrivals Carousel */}

      <div className={classes_g.sectHorAlignment}>
        <Typography variant='h4'>New Arrivals</Typography>
      </div>
      <Box mt={3}>
        <Box className={classes_g.carouselDefaults}>
          <ProductCarousel isPromo={false} />
        </Box>

        <Box
          mt={2}
          className={clsx(classes_g.sectionLink, classes_g.linkUnderline)}
        >
          <NavLink to='/'>See More</NavLink>
        </Box>
      </Box>
      {/* // ^  Just For You Table  */}
      <div className={classes_g.sectHorAlignment}>
        <Typography variant='h4'>Just For You</Typography>
      </div>

      {/* // ^ Table Layout */}
      <div className={classes_g.sectHorAlignment}>
        <div className={classes_g.tableContainer}>
          {products.length > 0 ? (
            <>
              <div
                className={clsx(
                  classes_g.gridContainer,
                  classes_g.gridContainerFill
                )}
                // class='grid-container grid-container--fit'
              >
                {products
                  ?.slice(
                    (page - 1) * rowsPerPage,
                    (page - 1) * rowsPerPage + rowsPerPage
                  )
                  .map((el) => (
                    <div key={el._id} className={classes_g.gridElement}>
                      <ProductCard {...el} isPromo={false} type='product' />
                    </div>
                  ))}
              </div>
              <div className={classes_g.tablePagination}>
                <Typography variant='subtitle2'>
                  {calcNoOfItems(products)}
                </Typography>

                <Pagination
                  color='primary'
                  count={Math.ceil(products.length / rowsPerPage)}
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
      </div>

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
                    <ProductCard
                      isPromo={false}
                      type='product'
                      key={prod._id}
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

export default ProductsServices;
