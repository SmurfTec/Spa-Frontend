import { Box, Button, Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import styles from 'styles/HomeStyles';
import globalStyles from 'styles/commonStyles';
import spa2 from 'assets/spa2.jpg';
import Subscription from 'components/Subscription';

const index = () => {
  const classes = styles();
  const classes_g = globalStyles();

  return (
    <div
      className={clsx(classes_g.secBackImage, classes.homePromoBg)}
      // className={`${classes_g.secBackImage} ${classes.homePromoBg}`}
    >
      <Grid container className={classes.offerWrapper}>
        <Grid item xs={12} sm={6}>
          <Box
            className={classes.divbackImg}
            sx={{
              backgroundImage: `url(https://images.unsplash.com/photo-1453834190665-46ff0a1fbd5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80)`,
            }}
          >
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              sx={{ height: '100%' }}
            >
              <Box sx={{ width: '50%', flex: 1 }} />

              <Box>
                <Button color='secondary' variant='contained'>
                  Explore
                </Button>
              </Box>
            </Box>
            {/* <div className={classes.offerCard}>
              <Box sx={{ width: '50%', flex: 1 }}>
                <Typography variant='h4'>
                  Free Gift. Energise 9 Piece Set
                </Typography>
                <Typography variant='subtitle1'>Weekly upto Rs 4000</Typography>
                <Typography variant='subtitle1'>Use Coupon</Typography>
                <Typography variant='subtitle1' component='span'>
                  ENERGISE
                </Typography>
              </Box>

              <Box>
                <Button color='secondary' variant='contained'>
                  Explore
                </Button>
              </Box>
            </div> */}
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box
            className={classes.divbackImg}
            sx={{
              backgroundImage: `url(https://images.unsplash.com/photo-1631730486572-226d1f595b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=475&q=80)`,
            }}
          >
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              sx={{ height: '100%' }}
            >
              <Box sx={{ width: '50%', flex: 1 }} />

              <Box>
                <Button color='secondary' variant='contained'>
                  Explore
                </Button>
              </Box>
            </Box>
            {/* <div className={classes.offerCard}>
              <Box sx={{ flex: 1 }}>
                <div className={classes.offerProduct}>
                  <Typography variant='h4' align='center'>
                    BEAUTY PACK
                  </Typography>
                </div>
              </Box>

              <Box>
                <Button color='secondary' variant='contained'>
                  Explore
                </Button>
              </Box>
            </div> */}
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box
            className={classes.divbackImg}
            sx={{
              backgroundImage: `url(${spa2})`,
            }}
          >
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              sx={{ height: '100%' }}
            >
              <Box sx={{ width: '50%', flex: 1 }} />

              <Box>
                <Button color='secondary' variant='contained'>
                  Explore
                </Button>
              </Box>
            </Box>
            {/* <div className={classes.offerCard}>
              <Box sx={{ flex: 1 }}>
                <div className={classes.offerProduct}>
                  <Typography variant='h4' align='center'>
                    BEAUTY PACK
                  </Typography>
                  <Typography variant='subtitle1'>Body & Hair</Typography>
                </div>
              </Box>

              <Box>
                <Button color='secondary' variant='contained'>
                  Explore
                </Button>
              </Box>
            </div> */}
          </Box>
        </Grid>
      </Grid>
      {/* <Box
            sx={{
              margin: '0 auto',
              // width: '75%',
            }}
          > */}
      <Subscription />
      {/* </Box> */}
    </div>
  );
};

export default index;
