import { Box, Button, Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import styles from 'styles/HomeStyles';
import globalStyles from 'styles/commonStyles';
import spa2 from 'assets/spa2.jpg';
import Subscription from 'components/Subscription';

const Index = (offers = []) => {
  const classes = styles();
  const classes_g = globalStyles();

  return (
    <div
      className={clsx(classes_g.secBackImage, classes.homePromoBg)}
      style={{
        backgroundImage: `url(${offers?.offers[3]?.url})`,
      }}
      // className={`${classes_g.secBackImage} ${classes.homePromoBg}`}
    >
      <Grid container className={classes.offerWrapper}>
        <Grid item xs={12} sm={6}>
          <Box
            className={classes.divbackImg}
            style={{
              backgroundImage: `url(${offers?.offers[0]?.url})`,
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
            style={{
              backgroundImage: `url(${offers?.offers[1]?.url})`,
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
            style={{
              backgroundImage: `url(${offers?.offers[2]?.url})`,
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

export default Index;
