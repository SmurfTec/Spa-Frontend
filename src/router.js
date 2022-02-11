import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import CommonLayout from 'components/layouts/CommonLayout';
import HomePage from 'components/Home';
import ProductsServices from 'components/ProductsServices';
import Login from 'components/common/Login';
import SingleProdServ from 'components/SingleProdServ';
import Join from 'components/common/Join';
import Cart from 'components/Checkout';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<CommonLayout />}>
        {/* Common Routes / Public Routes */}
        <Route path='/' element={<HomePage />} />
        <Route
          path='products&services/:type/:_id'
          element={<SingleProdServ />}
        ></Route>
        <Route path='products&services' element={<ProductsServices />} />

        <Route path='cart' element={<Cart />} />
        <Route path='join' element={<Join />} />

        <Route path='login' element={<Login />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
};

export default Router;
