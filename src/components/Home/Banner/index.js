import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import spa1 from 'assets/med.jpg';
import { bannerContent } from 'data';
import useStyles from 'styles/commonStyles';
import SimpleCarousel from './SimpleCarousel';

const styles = makeStyles(theme => ({
  root: {
    height: 500,
    // marginBottom: 40,
    backgroundImage: props => {
      console.log('props', props);
      return `url(${props.image})`;
    },
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative'
  },
  content: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    zIndex: 555
  },
  carouselItem: {
    display: 'flex',
    rowGap: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#0000006b',
    paddingInline: '4em',
    paddingBlock: '2em',
    minHeight: 250,
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      minHeight: 300
    }
    /* height: 100%; */
  }
}));

const Banner = ({ banners }) => {
  let bannerImg = banners?.find(el => el.name === 'Homepage Carousel') || '';
  const banner = banners?.find(el => el.name === 'Homepage Carousel') || '';

  const classes = styles({
    image: spa1 || ''
  });

  console.log('banner', banner);

  return (
    <section className={classes.root}>
      <div className={classes.content}>
        <div className={classes.content}>
          <SimpleCarousel>
            {bannerContent &&
              bannerContent.length > 0 &&
              bannerContent.map((el, index) => (
                <div key={el._id} className={classes.carouselItem}>
                  <Typography variant='h4'>{el.title}</Typography>
                  <Typography variant='subtitle1'>{el.description}</Typography>
                </div>
              ))}
          </SimpleCarousel>
        </div>
      </div>
    </section>
  );
};

export default Banner;
