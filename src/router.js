import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Loading from 'components/common/Loading';

const CommonLayout = lazy(() => import('components/layouts/CommonLayout'));
const HomePage = lazy(() => import('components/Home'));
const VendorProdServ = lazy(() => import('components/ProductsServices'));
const AllProductsServices = lazy(() =>
  import('components/ProductsServices/AllProductsServices')
);
const Login = lazy(() => import('components/common/Login'));
const SingleProdServ = lazy(() => import('components/SingleProdServ'));
const Join = lazy(() => import('components/common/Join'));
const Cart = lazy(() => import('components/Checkout'));

const Router = () => {
  return (
    <Routes>
      <Route path='/loading' element={<Loading />} />
      <Route
        path='/'
        element={
          <Suspense fallback={<Loading />}>
            <CommonLayout />
          </Suspense>
        }
      >
        {/* Common Routes / Public Routes */}
        <Route
          path='/'
          element={
            <Suspense fallback={<Loading />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path='products&services/:type/:_id'
          element={
            <Suspense fallback={<Loading />}>
              <SingleProdServ />
            </Suspense>
          }
        />
        <Route
          path='products&services/:type'
          element={
            <Suspense fallback={<Loading />}>
              <AllProductsServices />
            </Suspense>
          }
        />

        <Route
          // path='products&services'
          path='vendors/:vendorId'
          element={
            <Suspense fallback={<Loading />}>
              <VendorProdServ />
            </Suspense>
          }
        />

        <Route
          path='cart'
          element={
            <Suspense fallback={<Loading />}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path='join'
          element={
            <Suspense fallback={<Loading />}>
              <Join />
            </Suspense>
          }
        />

        <Route
          path='login'
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
};

export default Router;
