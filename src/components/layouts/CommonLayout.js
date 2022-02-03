import React from 'react';
// import { Outlet } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import Footer from 'components/common/Footer';
import Navbar from 'components/common/NavBar';

const CommonLayout = (props) => {
  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        // justifyContent='space-between'
        sx={{
          minHeight: '100vh',
        }}
      >
        <Navbar />
        {/* <Outlet /> */}
        {props.children}
        <Footer />
      </Box>
    </>
  );
};

export default CommonLayout;
