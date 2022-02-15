import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Footer from 'components/common/Footer';
import Navbar from 'components/common/NavBar';
import ScrollTop from 'components/common/ScrollTop';

const CommonLayout = (props) => {
  const location = useLocation();
  const root = document.getElementById('root');

  useEffect(() => {
    if (location.hash !== '') {
      setTimeout(() => {
        const id = location.hash.split('#').pop();
        console.log('id', id);
        const targetCard = document.getElementById(id);

        console.log('Target', targetCard.offsetTop);
        console.log('Above Height', targetCard.offsetTop - 80);
        if (!root || !targetCard) return;
        root.scroll({
          top: targetCard.offsetTop - 80,
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
        <Box width='100%' minHeight='70vh'>
          <Outlet />
        </Box>
        <Footer />
        <ScrollTop />
      </Box>
    </>
  );
};

export default CommonLayout;
