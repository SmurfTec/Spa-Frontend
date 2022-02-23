import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Grid,
  makeStyles,
  Typography,
  Button,
  Avatar,
} from '@material-ui/core';
import { blogs } from 'data';
import bigImg from 'assets/med.jpg';
import cardImg from 'assets/prod3.jpg';
import clsx from 'clsx';

const styles = makeStyles((theme) => ({
  root: {
    marginTop: '1em',
  },
  fullImgContainer: {
    backgroundSize: 'cover',
    color: '#fff',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#212B36',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '1.5em',
    overflow: 'hidden',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '0.5em',
    },
  },
  overlayDark: {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '1em',
    padding: '0.5em',

    borderRadius: 4,
    backgroundColor: '#00000073',
    '& a': {
      color: '#fff',
      fontWeight: 700,
    },
  },

  doubleBigImg: {
    [theme.breakpoints.up(900)]: {
      height: 210,
    },
    [theme.breakpoints.down('sm')]: {
      height: 163,
    },
  },
  singleImg: {
    [theme.breakpoints.up(900)]: {
      height: 140,
    },
    [theme.breakpoints.down('sm')]: {
      height: 125,
    },
  },

  avatar: {
    '&.MuiAvatar-root': {
      background: 'transparent',

      [theme.breakpoints.up(900)]: {
        width: 110,
        height: 110,
      },
      [theme.breakpoints.down('sm')]: {
        width: 90,
        height: 90,
      },
      [theme.breakpoints.down('xs')]: {
        width: 110,
        height: 110,
      },
    },
  },
  link: {
    '& a': {
      color: theme.palette.primary.main,
      fontWeight: 600,
    },
  },
}));

const Blog = () => {
  const classes = styles();

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} sm={7}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Box
              className={clsx(classes.fullImgContainer, classes.doubleBigImg)}
              sx={{ backgroundImage: `url(${bigImg})` }}
            >
              <Box height='80%' className={classes.overlayDark}>
                <div>
                  <Typography variant='h5'>
                    Ayurveda WonderHerbs Infusions
                  </Typography>
                  <Typography variant='subtitle2'>
                    For Complete Natural Wellness
                  </Typography>
                </div>
                <Link to='/'>Read More</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              className={clsx(classes.fullImgContainer, classes.singleImg)}
              sx={{
                backgroundImage: `url(${bigImg})`,
                padding: '1em !important',
              }}
            >
              <Box height='100%' className={classes.overlayDark}>
                <Typography variant='subtitle2'>
                  Good products you need to use
                </Typography>

                <Link to='/'>Read More</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              className={clsx(classes.fullImgContainer, classes.singleImg)}
              sx={{
                backgroundImage: `url(${bigImg})`,
                padding: '1em !important',
              }}
            >
              <Box height='100%' className={classes.overlayDark}>
                <Typography variant='subtitle2'>
                  Good products you need to use
                </Typography>

                <Link to='/'>Read More</Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Box display='flex' flexDirection='column' gridGap={17} height='100%'>
          <Box sx={{ flex: 1 }}>
            <Box display='flex' gridGap={10}>
              <Avatar className={classes.avatar} variant='square'>
                <img src={cardImg} alt='Blog1' height='100%' />
              </Avatar>

              <Box
                display='flex'
                flexDirection='column'
                gridGap={10}
                className={classes.link}
              >
                <Typography variant='caption'>
                  Why Is It Important To Moisturise Your Face?
                </Typography>
                <Link to='/'>Read More</Link>
              </Box>
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box display='flex' gridGap={10}>
              <Avatar className={classes.avatar} variant='square'>
                <img src={cardImg} alt='Blog1' height='100%' />
              </Avatar>

              <Box
                display='flex'
                flexDirection='column'
                gridGap={10}
                className={classes.link}
              >
                <Typography variant='caption'>
                  Why Is It Important To Moisturise Your Face?
                </Typography>
                <Link to='/'>Read More</Link>
              </Box>
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box display='flex' gridGap={10}>
              <Avatar className={classes.avatar} variant='square'>
                <img src={cardImg} alt='Blog1' height='100%' />
              </Avatar>

              <Box
                display='flex'
                flexDirection='column'
                gridGap={10}
                className={classes.link}
              >
                <Typography variant='caption'>
                  Why Is It Important To Moisturise Your Face?
                </Typography>
                <Link to='/'>Read More</Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Blog;
