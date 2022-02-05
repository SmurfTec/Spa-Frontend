import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Icon,
  Badge,
} from '@material-ui/core';
import { Box, Button, Typography } from '@material-ui/core';
import { useLocation, useNavigate } from 'react-router-dom';
// import AccountPopover from './AccountPopover';
import Logo from './Logo';
import FaceIcon from '@material-ui/icons/Face';
// import { AuthContext } from 'contexts/AuthContext';
import { NavLink } from 'react-router-dom';
// import MHidden from 'components/layouts/DrawerLayout/MHidden';
// import globalStyles from 'styles/commonStyles';
// import drawerStyles from 'styles/DrawerStyles';
import useStyles from 'styles/NavBarStyles';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import HomeIcon from '@material-ui/icons/Home';
import globalStyles from 'styles/commonStyles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import clsx from 'clsx';

const Navbar = (props) => {
  const classes = useStyles();
  const classes_g = globalStyles();
  // const classes_dr = drawerStyles();
  // const { isLoggedIn } = useContext(AuthContext);
  // console.log(`isLoggedIn`, isLoggedIn);

  const location = useLocation();

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const toggleSideBar = () => {
    setOpen((prev) => !prev);
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
                <NavLink to='/'>Home </NavLink>
              </Typography>
              <Typography variant='subtitle2' noWrap>
                <NavLink to='/ourpartners'>Our Partners</NavLink>
              </Typography>
              <Typography variant='subtitle2' noWrap>
                <NavLink to='/flashsales'>Flash Sales</NavLink>
              </Typography>
              <Typography variant='subtitle2' noWrap>
                <NavLink to='/products&services'>Products</NavLink>
              </Typography>
              <Typography variant='subtitle2' noWrap>
                <NavLink to='/contact-us'>Contact Us</NavLink>
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
              <Button
                variant='contained'
                color='default'
                className={clsx(classes.customNavBtn, classes.navBtn)}
                size='small'
                endIcon={<FaceIcon />}
                onClick={() => navigate('/register')}
              >
                SIGN IN
              </Button>
              <IconButton aria-label='delete'>
                <Badge badgeContent='0'>
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
        <div>
          <Logo w={45} h={45} comp='nav' />

          <IconButton onClick={toggleSideBar}>
            <NavigateBeforeIcon />
          </IconButton>
        </div>

        <Box mt={4} />

        {/* <List className={classes_dr.list}> */}
        <List>
          <NavLink to='/'>
            <ListItem button>
              <ListItemIcon style={{ minWidth: 40 }}>
                <HomeIcon />
              </ListItemIcon>
              <Typography variant='subtitle1'>Home</Typography>
            </ListItem>
          </NavLink>
        </List>

        <Box my={3}>
          <Divider />
        </Box>
      </Drawer>
    </div>
  );
};
export default Navbar;
