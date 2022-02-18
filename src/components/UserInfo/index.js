import React, { useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

import {
  Card,
  CardContent,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';

import globalStyles from 'styles/commonStyles';
import styles from './userInfoProps';

// import LocalMallIcon from '@material-ui/icons/LocalMall';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ProfileIcon from '@material-ui/icons/PermContactCalendar';
import RateReviewIcon from '@material-ui/icons/RateReview';

const menuItems = [
  { label: 'Profile', url: 'profile', icon: <ProfileIcon /> },
  { label: 'Orders', url: 'orders', icon: <ShoppingBasketIcon /> },
  { label: 'Order History', url: 'orderhistory', icon: <RateReviewIcon /> },
  { label: 'WishList', url: 'wishlist', icon: <FavoriteIcon /> },
];

const UserInfo = () => {
  const classes_g = globalStyles();
  const classes = styles();
  //   const navigate = useNavigate();
  //   const { user, isLoggedIn } = useSelector((st) => st.auth);

  //   useEffect(() => {
  //     if (!isLoggedIn) navigate('/login');
  //   }, [isLoggedIn, navigate]);

  return (
    <div
      className={clsx(classes_g.componentSectionGap, classes_g.smallOutletGap)}
    >
      {/* <Typography variant='h4' className={classes_g.fontWeight600}>
        My Account
      </Typography> */}
      <div className={classes.contentWrapper}>
        <Card className={classes_g.customBoxShadow}>
          <CardContent className={classes.cardContent}>
            <List className={classes.list}>
              {menuItems.map((item, index) => (
                <React.Fragment key={item.url}>
                  <NavLink to={`/customer/${item.url}`}>
                    <ListItem button key={item.url}>
                      <ListItemIcon style={{ minWidth: 40 }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.label} />
                    </ListItem>
                  </NavLink>
                  {index < menuItems.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </CardContent>
        </Card>
        <Card className={classes_g.customBoxShadow}>
          <CardContent>
            <Outlet />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserInfo;

// {
//   /* <Box mb={3}>
//                 <Typography
//                   variant='subtitle1'
//                   align='center'
//                   style={{ textTransform: 'capitalize', fontWeight: 500 }}
//                   //   className={classes_g.lightText}
//                 >
//                   Hi, {user.fullName}
//                 </Typography>
//               </Box> */
// }
