import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Footer from 'components/common/Footer';
import Navbar from 'components/common/NavBar';

const CommonLayout = (props) => {
  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        sx={{
          minHeight: '100vh',
        }}
      >
        <Navbar />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
};

export default CommonLayout;
