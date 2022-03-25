import {
  Box,
  Button,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const styles = makeStyles((theme) => ({
  root: {
    zIndex: 9999,
    position: 'absolute',
    bottom: 20,
    right: 20,
    '& > .MuiButton-contained': {
      borderRadius: '50%',
      height: '40px !important',
      minWidth: 'unset',
      width: '40px !important',
      '& span': {
        margin: 0,
      },
    },
  },
}));

const ScrollTop = () => {
  const classes = styles();
  const handleScroll = () => {
    document.getElementById('root').scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={classes.root}>
      <Button
        variant='contained'
        color='secondary'
        onClick={handleScroll}
        startIcon={<ArrowUpwardIcon />}
      />
    </div>
  );
};

export default ScrollTop;
