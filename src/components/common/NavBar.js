import React, { useEffect, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  // ListItemIcon,
  // Icon,
  Badge,
} from '@material-ui/core';
import { Box, Button, Typography } from '@material-ui/core';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Logo from './Logo';
import FaceIcon from '@material-ui/icons/Face';
// import { AuthContext } from 'contexts/AuthContext';
import useStyles from 'styles/NavBarStyles';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import globalStyles from 'styles/commonStyles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import clsx from 'clsx';
import AccountPopover from 'components/common/AccountPopover';

const Navbar = (props) => {
  const classes = useStyles();
  const classes_g = globalStyles();
  const { isLoggedIn } = useSelector((st) => st.auth);
  // const classes_dr = drawerStyles();
  // const { isLoggedIn } = useContext(AuthContext);
  // console.log(`isLoggedIn`, isLoggedIn);

  const location = useLocation();

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const myRef = useRef(null);

  const toggleSideBar = () => {
    setOpen((prev) => !prev);
  };

  const handleCart = () => {
    navigate('/cart');
  };

  const scrollToSection = () => {
    // const currentLocation = location.pathname;
    // console.log('currentLocation', currentLocation);
    navigate('/#ourProducts');
  };

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.Appbar}>
        <Toolbar>
          <div
          // className={`${classes_g.flexAlignDisp} ${classes.navSearch}`}
          >
            <Box
              display='flex'
              alignItems='center'
              // className={classes_g.flexAlignDisp}
              sx={{ columnGap: 5 }}
            >
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label='show more'
                  // aria-controls={mobileMenuId}
                  aria-haspopup='true'
                  onClick={toggleSideBar}
                  style={{
                    marginLeft: 'auto',
                    color: '#dcd9d4',
                  }}
                >
                  <MenuOpenIcon fontSize='small' />
                </IconButton>
              </div>
              <Logo w={45} h={45} comp='nav' />
            </Box>
          </div>
          <div className={classes.sectionMobile}>
            {isLoggedIn && <AccountPopover />}
            <IconButton aria-label='cart' onClick={handleCart}>
              <Badge badgeContent='1'>
                <ShoppingCartIcon style={{ color: '#fff' }} fontSize='small' />
              </Badge>
            </IconButton>
          </div>

          <div className={classes.sectionDesktop}>
            {/* <Box
              display='flex'
              minWidth='200px'
              sx={{ alignItems: 'center', columnGap: '2.5em' }}
              className={classes_g.linkHover}
            > */}
            <Box
              display='flex'
              alignItems='center'
              sx={{ columnGap: 25 }}
              className={classes_g.linkHover}
            >
              <Typography variant='subtitle2' noWrap>
                <Link to='/'>Home </Link>
              </Typography>
              {/* <Typography
                variant='subtitle2'
                className={clsx(classes_g.linkHover1, classes_g.lightText)}
                onClick={scrollToSection}
              >
                Our Partners
              </Typography> */}

              <Typography variant='subtitle2' noWrap>
                <Link to='/#ourPartners'>Our Partners</Link>
              </Typography>
              <Typography variant='subtitle2' noWrap>
                <Link to='/#flashSales'>Flash Sales</Link>
              </Typography>
              <Typography variant='subtitle2' noWrap>
                <Link to='/#ourProducts'>Products</Link>
              </Typography>
              <Typography variant='subtitle2' noWrap>
                <Link to='/contact-us'>Contact Us</Link>
              </Typography>
            </Box>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              // gridColumnGap='20px'
              sx={{ columnGap: 10 }}
            >
              <Button
                variant='contained'
                color='secondary'
                size='small'
                style={{
                  minWidth: 80,
                  height: 'fit-content',
                }}
                onClick={() => navigate('/login')}
              >
                BOOK NOW
              </Button>
              {isLoggedIn ? (
                <AccountPopover />
              ) : (
                <Button
                  variant='contained'
                  color='default'
                  className={clsx(classes.customNavBtn, classes.navBtn)}
                  size='small'
                  endIcon={<FaceIcon />}
                  onClick={() => navigate('/login')}
                >
                  SIGN IN
                </Button>
              )}

              <IconButton aria-label='cart' onClick={handleCart}>
                <Badge badgeContent='1'>
                  <ShoppingCartIcon
                    style={{ color: '#fff' }}
                    fontSize='small'
                  />
                </Badge>
              </IconButton>
            </Box>
            {/* </Box> */}
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
        {/* <div className={classes_dr.drawerHeader}> */}
        <Box
          px={2}
          display='flex'
          alignItems='center'
          justifyContent='space-between'
        >
          <Logo w={45} h={45} comp='nav' />

          <IconButton onClick={toggleSideBar} size='small'>
            <NavigateBeforeIcon />
          </IconButton>
        </Box>
        <Box mx={2} sx={{ backgroundColor: '#fff' }}>
          <Divider />
        </Box>

        <Box mt={4} />

        <List className={classes.drawerList}>
          <Link to='/' className={classes_g.linkHover}>
            <ListItem button>
              {/* <ListItemIcon>
                <DonutLargeIcon fontSize='small' />
              </ListItemIcon> */}
              <Typography variant='subtitle1'>Home</Typography>
            </ListItem>
          </Link>
          <Link to='/#ourProducts' className={classes_g.linkHover}>
            <ListItem button>
              <Typography variant='subtitle1'>Products</Typography>
            </ListItem>
          </Link>
          <Link to='/#ourPartners' className={classes_g.linkHover}>
            <ListItem button>
              <Typography variant='subtitle1'>Our Partners</Typography>
            </ListItem>
          </Link>
          <Link to='/#flashSales' className={classes_g.linkHover}>
            <ListItem button>
              <Typography variant='subtitle1'>Flash Sales</Typography>
            </ListItem>
          </Link>
          <Link to='/contactus' className={classes_g.linkHover}>
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
            <Button variant='contained' color='secondary' fullWidth>
              BOOK NOW
            </Button>

            <Button
              variant='contained'
              color='default'
              className={clsx(classes.customNavBtn, classes.navBtn)}
              size='small'
              endIcon={<FaceIcon />}
              onClick={() => navigate('/login')}
              fullWidth
            >
              SIGN IN
            </Button>
          </Box>
        </List>
      </Drawer>
    </div>
  );
};
export default Navbar;
