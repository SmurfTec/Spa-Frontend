import React from 'react';
import { Box, Typography } from '@material-ui/core';

// import { useTheme } from '@material-ui/styles';
import { BallTriangle } from 'react-loader-spinner';

const Loading = ({ noTitle }) => {
  // const theme = useTheme();

  return (
    <Box
      position='absolute'
      style={{
        minWidth: 'fit-content',
        transform: 'translate(-50%,-50%)',
        top: '50%',
        left: '50%',
        zIndex: 2222,
      }}
      display='flex'
      alignItems='center'
      flexDirection='column'
      gridGap={15}
    >
      <BallTriangle
        heigth='100'
        width='100'
        color='#ff679b'
        ariaLabel='loading-indicator'
      />

      {!noTitle && (
        <Box>
          <Typography variant='h3' color='primary' component='span'>
            Royal Thai{' '}
          </Typography>
          <Typography variant='h3' color='secondary' component='span'>
            Spa
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Loading;
