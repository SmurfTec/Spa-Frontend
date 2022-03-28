import React, { useEffect, useState } from 'react';
import {
  Link,
  useNavigate,
  useLocation,
  NavLink,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  Badge,
} from '@material-ui/core';
import { Box, Button, Typography } from '@material-ui/core';
import AccountPopover from 'components/common/AccountPopover';
import Logo from './Logo';

import {
  Face,
  MenuOpen,
  NavigateBefore,
  ShoppingCart,
} from '@material-ui/icons';

import useStyles from 'styles/NavBarStyles';
import globalStyles from 'styles/commonStyles';

const Navbar = (props) => {
  const classes_g = globalStyles();
  const { isLoggedIn } = useSelector((st) => st.auth);
  const { products } = useSelector((st) => st.cart);

  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [locHash, setLocHash] = useState('');
  const classes = useStyles();

  useEffect(() => {
    setLocHash(location.hash);
  }, [location.hash]);

  const toggleSideBar = () => {
    setOpen((prev) => !prev);
  };
  const handleCart = () => {
    navigate('/cart');
  };

  const handleSignIn = () => {
    toggleSideBar();
    navigate('/login');
  };

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.Appbar}>
        <Toolbar>
          <div>
            <Box
              display='flex'
              alignItems='center'
              sx={{ columnGap: 5 }}
            >
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label='show more'
                  aria-haspopup='true'
                  onClick={toggleSideBar}
                  style={{
                    marginLeft: 'auto',
                    color: '#dcd9d4',
                  }}
                >
                  <MenuOpen fontSize='small' />
                </IconButton>
              </div>
              <Logo w={45} h={45} comp='nav' />
            </Box>
          </div>
          <div className={classes.sectionMobile}>
            {isLoggedIn && <AccountPopover />}
            <IconButton aria-label='cart' onClick={handleCart}>
              <Badge badgeContent={`${products?.length || 0}`}>
                <ShoppingCart
                  style={{ color: '#fff' }}
                  fontSize='small'
                />
              </Badge>
            </IconButton>
          </div>

          <div className={classes.sectionDesktop}>
            <Box className={classes.link}>
              <Typography variant='subtitle2' noWrap>
                <Link
                  to='/'
                  className={
                    locHash === '' && location.pathname === '/'
                      ? 'active'
                      : undefined
                  }
                >
                  Home
                </Link>
              </Typography>
              <Typography variant='subtitle2' noWrap>
                <Link
                  to='/#ourPartners'
                  className={
                    locHash === '#ourPartners' ? 'active' : undefined
                  }
                >
                  Our Partners
                </Link>
              </Typography>
              <Typography variant='subtitle2' noWrap>
                <Link
                  to='/#flashSales'
                  className={
                    locHash === '#flashSales' ? 'active' : undefined
                  }
                >
                  Flash Sales
                </Link>
              </Typography>
              <Typography variant='subtitle2' noWrap>
                <Link
                  to='/#ourProducts'
                  className={
                    locHash === '#ourProducts' ? 'active' : undefined
                  }
                >
                  Products
                </Link>
              </Typography>
              <Typography variant='subtitle2' noWrap>
                <Link
                  to='/#blog'
                  className={
                    locHash === '#blog' ? 'active' : undefined
                  }
                >
                  Blog
                </Link>
              </Typography>
              <Typography variant='subtitle2' noWrap>
                <Link to='/contact-us'>Contact Us</Link>
              </Typography>
            </Box>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              sx={{ columnGap: 10 }}
            >
              <Button
                variant='contained'
                color='secondary'
                size='small'
                className={classes.navBtn}
                onClick={() =>
                  navigate('/products&services/products')
                }
              >
                BOOK NOW
              </Button>
              {isLoggedIn ? (
                <AccountPopover />
              ) : (
                <Button
                  variant='contained'
                  color='default'
                  className={clsx(
                    classes.customNavBtn,
                    classes.navBtn
                  )}
                  size='small'
                  endIcon={<Face />}
                  onClick={() => navigate('/login')}
                >
                  SIGN IN
                </Button>
              )}
              <IconButton aria-label='cart' onClick={handleCart}>
                <Badge badgeContent={`${products?.length || 0}`}>
                  <ShoppingCart
                    style={{ color: '#fff' }}
                    fontSize='small'
                  />
                </Badge>
              </IconButton>
            </Box>
          </div>
        </Toolbar>
      </AppBar>

      <div className={classes.navFixed} />

      <Drawer
        anchor='left'
        className={classes.drawer}
        onClose={toggleSideBar}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Box
          px={2}
          display='flex'
          alignItems='center'
          justifyContent='space-between'
        >
          <Logo w={45} h={45} comp='nav' />
          <IconButton onClick={toggleSideBar} size='small'>
            <NavigateBefore />
          </IconButton>
        </Box>
        <Box mx={2} sx={{ backgroundColor: '#fff' }}>
          <Divider />
        </Box>

        <Box mt={4} />

        <List className={classes.drawerList}>
          <Link
            to='/'
            className={classes_g.linkHover}
            onClick={toggleSideBar}
          >
            <ListItem button>
              <Typography variant='subtitle1'>Home</Typography>
            </ListItem>
          </Link>
          <Link
            to='/#ourProducts'
            className={classes_g.linkHover}
            onClick={toggleSideBar}
          >
            <ListItem button>
              <Typography variant='subtitle1'>Products</Typography>
            </ListItem>
          </Link>
          <Link
            to='/#ourPartners'
            className={classes_g.linkHover}
            onClick={toggleSideBar}
          >
            <ListItem button>
              <Typography variant='subtitle1'>
                Our Partners
              </Typography>
            </ListItem>
          </Link>
          <Link
            to='/#flashSales'
            className={classes_g.linkHover}
            onClick={toggleSideBar}
          >
            <ListItem button>
              <Typography variant='subtitle1'>Flash Sales</Typography>
            </ListItem>
          </Link>
          <Link
            to='/#blog'
            className={classes_g.linkHover}
            onClick={toggleSideBar}
          >
            <ListItem button>
              <Typography variant='subtitle1'>Blog</Typography>
            </ListItem>
          </Link>
          <Link
            to='/contactus'
            className={classes_g.linkHover}
            onClick={toggleSideBar}
          >
            <ListItem button>
              <Typography variant='subtitle1'>Contact Us</Typography>
            </ListItem>
          </Link>
        </List>

        <Box my={2} mx={2}>
          <Divider />
        </Box>

        <List className={classes.drawerList}>
          <Box
            my={2}
            mx={2}
            display='flex'
            flexDirection='column'
            gridRowGap={15}
          >
            <Button
              variant='contained'
              color='secondary'
              fullWidth
              onClick={() => navigate('/products&services/products')}
            >
              BOOK NOW
            </Button>
            {!isLoggedIn && (
              <Button
                variant='contained'
                color='default'
                className={clsx(classes.customNavBtn, classes.navBtn)}
                size='small'
                endIcon={<Face />}
                onClick={handleSignIn}
                fullWidth
              >
                SIGN IN
              </Button>
            )}
          </Box>
        </List>
      </Drawer>
    </div>
  );
};
export default Navbar;
