import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ProdServContent from './ProdServContent';

import { allProducts, allServices, getFlashSales } from 'store/slices/getAll';

import globalStyles from 'styles/commonStyles';

const AllProductsServices = () => {
  const classes_g = globalStyles();
  const dispatch = useDispatch();

  const { products, services, fetching, flaseSales } = useSelector(
    (st) => st.getAll
  );

  useEffect(() => {
    if (!products) dispatch(allProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, products]);

  useEffect(() => {
    if (!services) dispatch(allServices());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, services]);

  // useEffect(() => {
  //   if (!flashSales) dispatch(getFlashSales());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dispatch, flashSales]);

  return (
    <div className={classes_g.componentSectionGap}>
      <ProdServContent
        fetching={fetching}
        products={products || []}
        services={services || []}
        flashSales={flaseSales || []}
        link='/'
      />
    </div>
  );
};

export default AllProductsServices;
