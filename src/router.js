import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Loading from 'components/common/Loading';
// import UserInfo from 'components/UserInfo';
// import OrderHistory from 'components/UserInfo/OrderHistory';
// import ResetPassword from 'components/common/Form/ResetPassword';

const UserInfo = lazy(() => import('components/UserInfo'));
const Orders = lazy(() => import('components/UserInfo/Orders'));
const OrderHistory = lazy(() => import('components/UserInfo/OrderHistory'));
const ForgotPassword = lazy(() =>
  import('components/common/Form/ForgotPassword')
);
const ConfirmMail = lazy(() => import('components/common/Form/ConfirmMail'));
const ResetPassword = lazy(() =>
  import('components/common/Form/ResetPassword')
);
const CommonLayout = lazy(() => import('components/layouts/CommonLayout'));

const HomePage = lazy(() => import('components/Home'));
const VendorProdServ = lazy(() =>
  import('components/ProductsServices/VendorProdServ')
);
const AllProductsServices = lazy(() =>
  import('components/ProductsServices/AllProductsServices')
);
const Login = lazy(() => import('components/common/Form/Login'));
const SingleProdServ = lazy(() => import('components/DetailsView'));
const ProductView = lazy(() => import('components/DetailsView/ProductDetails'));
const LazyAbout = lazy(() => import('components/About'));
const Join = lazy(() => import('components/common/Form/Join'));
const Cart = lazy(() => import('components/Checkout'));
const Profile = lazy(() => import('components/UserInfo/Profile'));
const OrderDetails = lazy(() => import('components/UserInfo/OrderDetails'));
const OrderDetails2 = lazy(() => import('components/Checkout/OrderDetails'));
const Wishlist = lazy(() => import('components/UserInfo/Wishlist'));
// const Reviews = lazy(() => import('components/UserInfo/Reviews'));
const PaymentDetails = lazy(() =>
  import('components/PaymentandDetails/PaymentDetails')
);
const Contact = lazy(() => import('components/ContactUs'));

const Router = () => {
  const { authenticating } = useSelector((st) => st.auth);

  return (
    <Routes>
      {authenticating ? (
        <Route path='*' element={<Loading />} />
      ) : (
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
            path='/contact'
            element={
              <Suspense fallback={<Loading />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path='products/:id'
            element={
              <Suspense fallback={<Loading />}>
                <ProductView />
              </Suspense>
            }
          />
          <Route
            path='/about-us'
            element={
              <Suspense fallback={<Loading />}>
                <LazyAbout />
              </Suspense>
            }
          />
          <Route
            path='services/:id'
            element={
              <Suspense fallback={<Loading />}>
                <SingleProdServ type='service' />
              </Suspense>
            }
          />
          {/* <Route
            path='products&services/:type/:id'
            element={
              <Suspense fallback={<Loading />}>
                <SingleProdServ />
              </Suspense>
            }
          /> */}
          <Route
            path='products&services/:type'
            element={
              <Suspense fallback={<Loading />}>
                <AllProductsServices />
              </Suspense>
            }
          />

          <Route
            path='vendors/:vendorId/:type'
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
            path='paymentDetails/:orderid'
            element={
              <Suspense fallback={<Loading />}>
                <PaymentDetails />
              </Suspense>
            }
          />
          <Route
            path='customer'
            element={
              <Suspense fallback={<Loading />}>
                <UserInfo />
              </Suspense>
            }
          >
            <Route
              path='profile'
              element={
                <Suspense fallback={<Loading />}>
                  <Profile />
                </Suspense>
              }
            />
            <Route
              path='orders'
              element={
                <Suspense fallback={<Loading />}>
                  <Orders />
                </Suspense>
              }
            />

            <Route
              path='orders/:orderid'
              element={
                <Suspense fallback={<Loading />}>
                  {/* <OrderDetails /> */}
                  <OrderDetails2 />
                </Suspense>
              }
            />
            <Route
              path='orderhistory'
              element={
                <Suspense fallback={<Loading />}>
                  <OrderHistory />
                </Suspense>
              }
            />
            <Route
              path='wishlist'
              element={
                <Suspense fallback={<Loading />}>
                  <Wishlist />
                </Suspense>
              }
            />
            {/* <Route
            path='reviews'
            element={
              <Suspense fallback={<Loading />}>
                <Account />
              </Suspense>
            }
          /> */}
          </Route>
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
          <Route
            path='forgotPassword'
            element={
              <Suspense fallback={<Loading />}>
                <ForgotPassword />
              </Suspense>
            }
          />
          <Route
            path='resetPassword/:token'
            element={
              <Suspense fallback={<Loading />}>
                <ResetPassword />
              </Suspense>
            }
          />
          <Route
            path='confirmMail/:token'
            element={
              <Suspense fallback={<Loading />}>
                <ConfirmMail />
              </Suspense>
            }
          />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      )}
    </Routes>
  );
};

export default Router;
