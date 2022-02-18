import {
  Box,
  Grid,
  TextField,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';
import { useManyInputs } from 'hooks';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from 'styles/commonStyles';

const Profile = () => {
  const classes_g = styles();
  const { user } = useSelector((st) => st.auth);
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    info: '',
    phoneNumber: 12312231111,
    shippingAddress: {
      street: '',
      city: '',
      country: '',
      postalCode: '',
    },
  };

  const [inputState, handleTxtChange, , , , setState] =
    useManyInputs(initialState);

  useEffect(() => {
    console.log('user', user);
    const { firstName, lastName, email, phoneNumber, info } = user;
    setState((st) => ({
      ...st,
      firstName,
      lastName,
      email,
      phoneNumber: phoneNumber || 123123123 * 1,
      info,
    }));
  }, [user, setState]);

  const handleProfile = () => {};
  const handleNewPassword = () => {};

  return (
    <>
      <Box mb={2}>
        <Typography variant='h5' className={classes_g.fontWeight600}>
          Personal Information
        </Typography>
      </Box>
      <form onSubmit={handleProfile}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              name='firstName'
              value={inputState.firstName}
              onChange={handleTxtChange}
              label='First Name'
              placeholder='first name'
              variant='outlined'
              margin='dense'
              fullWidth
              // autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name='lastName'
              value={inputState.lastName}
              onChange={handleTxtChange}
              label='Last Name'
              placeholder='last name'
              variant='outlined'
              margin='dense'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name='phoneNumber'
              value={inputState.phoneNumber}
              onChange={handleTxtChange}
              label='Phone Number'
              placeholder='phone number'
              type='number'
              variant='outlined'
              margin='dense'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              name='info'
              value={inputState.info}
              onChange={handleTxtChange}
              label='About'
              multiline
              rows={3}
              placeholder='about'
              variant='outlined'
              margin='dense'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={7} md={7} lg={6}>
            <TextField
              name='email'
              value={inputState.email}
              onChange={handleTxtChange}
              label='Email'
              placeholder='email'
              type='email'
              variant='outlined'
              margin='dense'
              fullWidth
              disabled
            />
          </Grid>
        </Grid>
        <Box mt={4} mb={2}>
          <Typography variant='h5' className={classes_g.fontWeight600}>
            Shipping Address
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name='street'
              value={inputState.shippingAddress.street}
              onChange={handleTxtChange}
              label='Street'
              placeholder='street'
              variant='outlined'
              margin='dense'
              fullWidth
              // autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              name='city'
              value={inputState.shippingAddress.city}
              onChange={handleTxtChange}
              label='City'
              placeholder='city'
              variant='outlined'
              margin='dense'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              name='country'
              value={inputState.shippingAddress.country}
              onChange={handleTxtChange}
              label='Country'
              placeholder='country'
              variant='outlined'
              margin='dense'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name='postalCode'
              value={inputState.shippingAddress.postalCode}
              onChange={handleTxtChange}
              label='Postal Code'
              placeholder='postal code'
              variant='outlined'
              margin='dense'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Box textAlign='right'>
              {/* <Button
                variant='contained'
                color='secondary'
                style={{ minWidth: '10em' }}
              >
                Update Profile Info
              </Button> */}

              <Button
                color='primary'
                style={{ minWidth: '10em' }}
                // endIcon={<SendIcon />}
              >
                Update Profile Info
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>

      <Box mt={1} mb={2}>
        <Typography variant='h5' className={classes_g.fontWeight600}>
          Update Password
        </Typography>
      </Box>

      <form onSubmit={handleNewPassword}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              name='currentPassword'
              value={inputState.currentPassword}
              onChange={handleTxtChange}
              label='Current Password'
              placeholder='current password'
              type='password'
              variant='outlined'
              margin='dense'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name='newPassword'
              value={inputState.newPassword}
              onChange={handleTxtChange}
              label='New Password'
              placeholder='new password'
              type='password'
              variant='outlined'
              margin='dense'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name='confirmNewPassword'
              value={inputState.confirmNewPassword}
              onChange={handleTxtChange}
              label='Confirm Password'
              placeholder='confirm new password'
              type='password'
              variant='outlined'
              margin='dense'
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Box textAlign='right' mt={2}>
            <Button
              variant='contained'
              color='secondary'
              style={{ minWidth: '10em', fontWeight: 600 }}
            >
              Update Password
            </Button>
          </Box>
        </Grid>
      </form>
    </>
  );
};

export default Profile;
