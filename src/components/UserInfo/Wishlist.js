import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Box, Tab, Tabs, Typography } from '@material-ui/core';

import Card from 'components/Carousels/ProductServiceCarousel/Card';

import { productsB, services } from 'data';

import globalStyles from 'styles/commonStyles';
import styles from './userInfoProps';
import { useSelector } from 'react-redux';

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
  const { user } = useSelector((st) => st.auth);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {}, []);

  return (
    <Box style={{ minHeight: 745 }}>
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
        {user.productFavourites.length > 0 ? (
          <div
            className={clsx(
              classes_g.gridContainer,
              classes_g.gridContainerFill
            )}
          >
            {user.productFavourites.map((el) => (
              <div key={el._id} className={classes_g.gridElement}>
                <Card item={el} isPromo={false} />
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
        {user.serviceFavourites.length > 0 ? (
          <div
            className={clsx(
              classes_g.gridContainer,
              classes_g.gridContainerFill
            )}
          >
            {user.serviceFavourites.map((el) => (
              <div key={el._id} className={classes_g.gridElement}>
                <Card item={el} isPromo={false} />
              </div>
            ))}
          </div>
        ) : (
          <Typography variant='body1' align='center'>
            No Services in a Wishlist
          </Typography>
        )}
      </TabPanel>
    </Box>
  );
};

export default Wishlist;
