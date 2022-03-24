import { useContext, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { alpha } from '@material-ui/core/styles';
import {
  Box,
  Divider,
  Typography,
  Avatar,
  IconButton,
  makeStyles,
  MenuItem,
  ListItemIcon,
} from '@material-ui/core';
import MenuPopover from './MenuPopover';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { logout } from 'store/slices/Auth';
// import AccountBoxIcon from '@material-ui/icons/AccountBox';
// import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = makeStyles((theme) => ({
  iconButton: {
    '& .MuiIconButton-root': {
      padding: 0,
      color: '#fff',
    },
  },
}));

export default function AccountPopover() {
  const classes = styles();
  const { user } = useSelector((st) => st.auth);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  // const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    setOpen(false);
    dispatch(logout());
  };
  return (
    <>
      <div className={classes.iconButton}>
        <IconButton
          ref={anchorRef}
          onClick={handleOpen}
          sx={{
            width: 44,
            height: 44,
            ...(open && {
              '&:before': {
                zIndex: 1,
                content: "''",
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
          }}
        >
          <AccountCircleIcon fontSize='large' />
          {/* <Avatar src={AccountCircleIcon} alt='User' /> */}
        </IconButton>
      </div>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant='subtitle2' noWrap>
            {user.fullName.toUpperCase()}
            {/* {`${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}`} */}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <NavLink to='customer/profile' onClick={handleClose}>
          <MenuItem>
            <Typography variant='body2' color='textPrimary' noWrap>
              Profile
            </Typography>
          </MenuItem>
        </NavLink>
        <NavLink to='customer/orders' onClick={handleClose}>
          <MenuItem>
            <Typography variant='body2' color='textPrimary' noWrap>
              Current Orders
            </Typography>
          </MenuItem>
        </NavLink>
        <NavLink to='customer/orderhistory' onClick={handleClose}>
          <MenuItem>
            <Typography variant='body2' color='textPrimary' noWrap>
              Orders History
            </Typography>
          </MenuItem>
        </NavLink>
        <NavLink to='customer/wishlist' onClick={handleClose}>
          <MenuItem>
            <Typography variant='body2' color='textPrimary' noWrap>
              WishList
            </Typography>
          </MenuItem>
        </NavLink>

        <MenuItem id='logout' onClick={handleLogout}>
          <Typography variant='body2' color='textPrimary' noWrap>
            Logout
          </Typography>
          <ListItemIcon>
            <ExitToAppIcon fontSize='small' />
          </ListItemIcon>
        </MenuItem>
        {/* {error !== null &&
          toast.error(error, {
            position: toast.POSITION.TOP_CENTER,
          })} */}
      </MenuPopover>
    </>
  );
}
