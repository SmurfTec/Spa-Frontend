import { Avatar, Box, Typography } from '@material-ui/core';
import React from 'react';
import styles from 'styles/FooterStyles';
import Logo from './Logo';
import faker from 'faker';
import brand1 from 'assets/brand3.png';
import brand2 from 'assets/brand2.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const menu = [
  {
    item: 'OUR PARTNERS',
    url: '/',
    subMenus: [
      { item: 'Beauty SPA', url: '/' },
      { item: 'Paradise', url: '/' },
      { item: 'Reel SPA', url: '/' },
    ],
  },
  {
    item: 'FLASH SALES',
    url: '/',
    subMenus: [
      { item: 'Beauty SPA', url: '/' },
      { item: 'Paradise', url: '/' },
      { item: 'Reel SPA', url: '/' },
    ],
  },
  {
    item: 'OUR PRODUCTS',
    url: '/',
    subMenus: [
      { item: 'Beauty SPA', url: '/' },
      { item: 'Paradise', url: '/' },
      { item: 'Reel SPA', url: '/' },
    ],
  },
  {
    item: 'OUR SERVICES',
    url: '/',
    subMenus: [
      { item: 'Body and Head Massage', url: '/' },
      { item: 'Reel Spa', url: '/' },
    ],
  },
];

const Footer = () => {
  const classes = styles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <div className={classes.contentWrapper}>
            <div className='contentLeft'>
              <Logo />
              <Box mt={2}>
                <Typography variant='subtitle1'>
                  {faker.lorem.paragraph(1)}
                </Typography>
              </Box>
              <Box mt={2}>
                <Typography variant='h5'>CONTACT US</Typography>
                <Typography variant='subtitle1'>
                  Mon - Fri : 11AM - 10PM
                </Typography>
                <Typography variant='subtitle1'>
                  Weekends : 3PM - 9PM
                </Typography>
              </Box>
              <Box mt={2}>
                <Typography variant='h5'>CALL US</Typography>
                <Typography variant='subtitle1'>+11 123 123 44</Typography>
                <Typography variant='subtitle1'>+13 123 123 44</Typography>
              </Box>
            </div>
            <div className='contentRight'>
              <div className={classes.menuDiv}>
                {menu &&
                  menu.map((el) => (
                    <Box>
                      <Typography variant='subtitle1'>{el.item}</Typography>
                      {el.subMenus.map((e) => (
                        <Typography variant='subtitle2'>- {e.item}</Typography>
                      ))}
                    </Box>
                  ))}
              </div>
            </div>
          </div>
          <div className={classes.collaborators}>
            <Box>
              <Typography variant='h5' align='center'>
                OUR AWARDS
              </Typography>
              <div className={classes.brandsImg}>
                <img src={brand1} alt='brand1' height='60px' width='90px' />
                <img src={brand2} alt='brand2' height='60px' width='90px' />
              </div>
            </Box>
            <Box>
              <Typography variant='h5' align='center'>
                OUR PARTNERS
              </Typography>
              <div className={classes.brandsImg}>
                <img src={brand1} alt='brand1' height='60px' width='90px' />
                <img src={brand2} alt='brand2' height='60px' width='90px' />
              </div>
            </Box>
            <Box>
              <Typography variant='h5' align='center'>
                FIND US ON
              </Typography>
              <div className={classes.brandsImg}>
                <Avatar variant='rounded'>
                  <FacebookIcon />
                </Avatar>
                <Avatar variant='rounded'>
                  <InstagramIcon />
                </Avatar>
                <Avatar variant='rounded'>
                  <YouTubeIcon />
                </Avatar>
              </div>
            </Box>
          </div>
        </div>
        <div className={classes.copyright}>
          <Typography variant='subtitle2' align='center'>
            Copyright @{new Date().getFullYear()} Royal Thai Spa - All rights
            reserved
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Footer;
