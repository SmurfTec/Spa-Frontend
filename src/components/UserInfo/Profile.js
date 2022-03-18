import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Grid,
  TextField,
  Typography,
  Divider,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { useManyInputs } from 'hooks';
import { updateMe } from 'store/slices/Auth/extraReducers';
import styles from 'styles/commonStyles';

const Profile = () => {
  const classes_g = styles();
  const { user, loading } = useSelector((st) => st.auth);
  const dispatch = useDispatch();

  const initialState = {
    fullName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    info: '',
    phoneNumber: 112231111,
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
    const { fullName, email, phoneNumber, info, shippingAddress } = user;
    setState((st) => ({
      ...st,
      fullName,
      email,
      phoneNumber: (phoneNumber || 123123123) * 1,
      info,
      shippingAddress: shippingAddress || st.shippingAddress,
    }));
  }, [user, setState]);

  const handleShippingState = (e) => {
    setState((st) => ({
      ...st,
      shippingAddress: {
        ...st.shippingAddress,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const updateProfile = (e) => {
    e.preventDefault();
    const { fullName, phoneNumber, info, shippingAddress } = inputState;
    dispatch(updateMe({ fullName, phoneNumber, info, shippingAddress }));
  };
  const handleNewPassword = () => {};

  return (
    <>
      <Box mb={2}>
        <Typography variant='h5' className={classes_g.fontWeight600}>
          Personal Information
        </Typography>
      </Box>
      <form onSubmit={updateProfile}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name='fullName'
              value={inputState.fullName}
              onChange={handleTxtChange}
              label='Full Name'
              placeholder='full name'
              variant='outlined'
              margin='dense'
              fullWidth
              autoFocus
            />
          </Grid>

          <Grid item xs={12} sm={6}>
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
              onChange={handleShippingState}
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
              onChange={handleShippingState}
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
              onChange={handleShippingState}
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
              onChange={handleShippingState}
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
                type='submit'
                // endIcon={<SendIcon />}
              >
                {loading ? (
                  <CircularProgress size={20} color='inherit' />
                ) : (
                  'Update Profile Info'
                )}
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
