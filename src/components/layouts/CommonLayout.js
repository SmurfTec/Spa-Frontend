import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Footer from 'components/common/Footer';
import Navbar from 'components/common/NavBar';
import ScrollTop from 'components/common/ScrollTop';
import { useSelector } from 'react-redux';

const CommonLayout = (props) => {
  const location = useLocation();
  const root = document.getElementById('root');

  useEffect(() => {
    if (location.hash !== '') {
      setTimeout(() => {
        const id = location.hash.split('#').pop();
        const targetCard = document.getElementById(id);

        if (!root || !targetCard) return;
        root.scroll({
          top: targetCard.offsetTop - 65,
          behavior: 'smooth',
        });
      }, 0);
    } else {
      root.scroll({
        top: 0,
        behavior: 'smooth',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash, location.pathname]);

  // useEffect(() => {
  //   root.scroll({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location.pathname]);

  return (
    <>
      <Box
        display='flex'
        justifyContent='space-between'
        flexDirection='column'
        sx={{
          minHeight: '100vh',
        }}
      >
        <Navbar />
        <Box
          style={{
            width: '100%',
            minHeight: '100vh',
          }}
        >
          <Outlet />
        </Box>
        <Footer />
        <ScrollTop />
      </Box>
    </>
  );
};

export default CommonLayout;
