import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Box, Tab, Tabs, Typography } from '@material-ui/core';

import Card from 'components/Carousels/ProductServiceCarousel/Card';

import { productsB, services } from 'data';

import globalStyles from 'styles/commonStyles';
import styles from './userInfoProps';

function TabPanel(props) {
  const { children, value, index, classes, ...other } = props;

  return (
    <div
      className='tabPanel'
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box mt={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  classes: PropTypes.any,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const Wishlist = () => {
  const classes_g = globalStyles();
  const classes = styles();
  const [tabValue, setTabValue] = React.useState(1);

  const handleTabChange = (event, newValue) => {
    // console.log('event.target.name', event.target.name);
    setTabValue(newValue);
  };

  useEffect(() => {}, []);

  return (
    <>
      <Box mb={2}>
        <Typography variant='h5' className={classes_g.fontWeight600}>
          WishList
        </Typography>
      </Box>
      <Box my={2}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor='primary'
          className={clsx(classes_g.tabs, classes.wishListTabs)}
        >
          <Tab label='Products' {...a11yProps(0)} />
          <Tab {...a11yProps(1)} label='Services' />
        </Tabs>
      </Box>

      {/* //^ Products Panel */}
      <TabPanel value={tabValue} index={0}>
        {productsB && productsB.length > 0 ? (
          <div
            className={clsx(
              classes_g.gridContainer,
              classes_g.gridContainerFill
            )}
          >
            {productsB.map((el) => (
              <div key={el._id} className={classes_g.gridElement}>
                <Card {...el} isPromo={false} />
              </div>
            ))}
          </div>
        ) : (
          <Typography variant='body1' align='center'>
            No Products in a wishlist
          </Typography>
        )}
      </TabPanel>

      {/* //^ Services Panel */}
      <TabPanel value={tabValue} index={1}>
        {services && services.length > 0 ? (
          <div
            className={clsx(
              classes_g.gridContainer,
              classes_g.gridContainerFill
            )}
          >
            {services.map((el) => (
              <div key={el._id} className={classes_g.gridElement}>
                <Card {...el} isPromo={false} />
              </div>
            ))}
          </div>
        ) : (
          <Typography variant='body1' align='center'>
            No Services in a Wishlist
          </Typography>
        )}
      </TabPanel>
    </>
  );
};

export default Wishlist;
