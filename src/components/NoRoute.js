import React from 'react';
import Search from 'components/common/Search/Search';
import { Box } from '@material-ui/core';

const NoRoute = () => {
  return (
    <>
      <Box>
        <Search placeholder='Where to?' />
      </Box>
      ;
    </>
  );
};

export default NoRoute;
