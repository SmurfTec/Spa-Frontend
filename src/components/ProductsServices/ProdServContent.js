import React, { memo, useEffect, useState, useMemo } from 'react';
import {
  useNavigate,
  useParams,
  useLocation,
} from 'react-router-dom';
import clsx from 'clsx';
import { Box, Button, Typography } from '@material-ui/core';
import { Pagination, Skeleton } from '@material-ui/lab';

import Card from 'components/Carousels/ProductServiceCarousel/Card';
import ProductServiceCarousel from 'components/Carousels/ProductServiceCarousel';
import Search from 'components/common/Search/Search';
import queryString from 'query-string';
import globalStyles from 'styles/commonStyles';

const ProdServContent = memo(
  ({ products, flashSales, services, fetching, link }) => {
    console.log('PRODUCTS', products);
    console.log('FLASHSALES', flashSales);
    console.log('SERVICES', services);

    const classes_g = globalStyles();
    const navigate = useNavigate();
    const location = useLocation();

    const { type } = useParams();
    const [data, setData] = useState([]);
    // * Pagination Stuff
    const [page, setPage] = React.useState(1);
    const [rowsPerPage] = React.useState(8);

    // * Filter by search
    const parsedQuery = useMemo(() => {
      return queryString.parse(location.search);
    }, [location.search]);

    useEffect(() => {
      if (
        !['all', 'products', 'services', 'flashSales'].includes(type)
      ) {
        return navigate(`/${link}/all`);
      }

      if (parsedQuery.search) {
        switch (type) {
          case 'products':
            setData(
              products.filter((product) =>
                product.name
                  .toLowerCase()
                  .includes(parsedQuery.search.toLowerCase())
              )
            );

            break;
          case 'services':
            setData(
              services.filter((service) =>
                service.name
                  .toLowerCase()
                  .includes(parsedQuery.search.toLowerCase())
              )
            );

            break;
          case 'flashSales':
            setData(
              flashSales.filter((flashSale) =>
                flashSale.name
                  .toLowerCase()
                  .includes(parsedQuery.search.toLowerCase())
              )
            );
            break;

          default:
            setData([...products, ...services, ...flashSales]);
            break;
        }
      } else {
        switch (type) {
          case 'products':
            setData(products);
            break;
          case 'services':
            setData(services);
            break;
          case 'flashSales':
            setData(flashSales);
            break;
          default:
            setData([...products, ...services, ...flashSales]);
            break;
        }
      }
    }, [type, products, services, flashSales, parsedQuery]);

    console.log('DATA', data);

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
      navigate(`/${link}/${tabname}`);
    };

    return (
      <>
        {/* // ^ Search Comp */}
        <Search placeholder='Product or Service Name ' />

        {/* // ^ Buttons (for Tabs layout) */}
        <div className={classes_g.tabButtons}>
          <Button
            data-tabname='all'
            variant='contained'
            color={type === 'all' ? 'primary' : 'default'}
            onClick={handleActive}
          >
            All
          </Button>
          <Button
            data-tabname='services'
            variant='contained'
            color={type === 'services' ? 'primary' : 'default'}
            onClick={handleActive}
          >
            Services
          </Button>
          <Button
            data-tabname='products'
            variant='contained'
            color={type === 'products' ? 'primary' : 'default'}
            onClick={handleActive}
          >
            Products
          </Button>
          <Button
            data-tabname='flashSales'
            variant='contained'
            color={type === 'flashSales' ? 'primary' : 'default'}
            onClick={handleActive}
          >
            Flash Sales
          </Button>
        </div>

        {/* // ^  New arrivals Carousel */}
        <Box mt={4}>
          <Typography variant='h4'>New Arrivals</Typography>
        </Box>

        <ProductServiceCarousel
          data={data}
          fetching={fetching}
          showVendor={false}
        />

        {/* // ^  Just For You Table  */}
        <Box mt={4}>
          <Typography variant='h4'>Just For You</Typography>
        </Box>

        {/* // ^ Table Layout */}
        <div className={classes_g.tableContainer}>
          {fetching ? (
            <>
              <div
                className={clsx(
                  classes_g.gridContainer,
                  classes_g.gridContainerFill
                )}
              >
                {Array(6)
                  .fill()
                  .map((_, idx) => (
                    <div key={idx} className={classes_g.gridElement}>
                      <Box
                        borderRadius={10}
                        overflow='hidden'
                        height='100%'
                        minHeight={200}
                        minWidth={50}
                      >
                        <Skeleton
                          animation='wave'
                          variant='rect'
                          width='100%'
                          height='100%'
                        />
                      </Box>
                    </div>
                  ))}
              </div>
            </>
          ) : data.length > 0 ? (
            <>
              <div
                className={clsx(
                  classes_g.gridContainer,
                  classes_g.gridContainerFill
                )}
              >
                {data
                  ?.slice(
                    (page - 1) * rowsPerPage,
                    (page - 1) * rowsPerPage + rowsPerPage
                  )
                  .map((el) => (
                    <div
                      key={el._id}
                      className={classes_g.gridElement}
                    >
                      <Card {...el} isPromo={false} />
                    </div>
                  ))}
              </div>
              <div className={classes_g.tablePagination}>
                <Typography variant='subtitle2'>
                  {calcNoOfItems(data)}
                </Typography>

                <Pagination
                  color='primary'
                  count={Math.ceil(data.length / rowsPerPage)}
                  page={page}
                  size='small'
                  onChange={handleChangePage}
                />
              </div>
            </>
          ) : (
            <Box mt={4}>
              <Typography variant='subtitle1' align='center'>
                Nothing to show
              </Typography>
            </Box>
          )}
        </div>
      </>
    );
  }
);

export default ProdServContent;
