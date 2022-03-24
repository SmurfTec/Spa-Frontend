import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Box,
  Grid,
  Typography,
  Divider,
  Button,
  CircularProgress,
  InputAdornment,
  IconButton,
} from '@material-ui/core';

import { updateMe, updatePassword } from 'store/slices/Auth/extraReducers';
import CustomTextField from './CustomTextField';

import styles from 'styles/commonStyles';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const Profile = () => {
  const classes_g = styles();
  const { user, loading } = useSelector((st) => st.auth);
  const dispatch = useDispatch();
  const [passUpdating, setPassUpdating] = useState(false);
  const [profileUpdating, setProfileUpdating] = useState(false);
  const [showPassword, setshowPassword] = useState(false);

  const initialValues = {
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

  const validationSchema = yup.object({
    fullName: yup
      .string()
      .required('Full name is required')
      .min(4, 'Fullname must be atleast 3 characters long'),
    newPassword: yup
      .string()
      .min(8, 'Password should be atleast 8 characters long'),
    confirmNewPassword: yup
      .string()
      .oneOf(
        [yup.ref('newPassword'), null],
        'Confirm New Password must match with New Password'
      ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validate: true,
  });

  useEffect(() => {
    if (user) {
      const { fullName, email, phoneNumber, info, shippingAddress } = user;
      formik.setValues({ fullName, email, phoneNumber, info, shippingAddress });
    }
  }, [user]);

  const updateProfile = (e) => {
    setProfileUpdating(true);
    e.preventDefault();
    console.log('In Profile');
    const { fullName, phoneNumber, info, shippingAddress } = formik.values;
    dispatch(updateMe({ fullName, phoneNumber, info, shippingAddress })).then(
      () => setProfileUpdating(false)
    );
  };

  const handleNewPassword = (e) => {
    console.log('In Pasword');

    e.preventDefault();
    setPassUpdating(true);
    const { newPassword, confirmNewPassword, currentPassword } = formik.values;
    dispatch(
      updatePassword({
        password: newPassword,
        passwordConfirm: confirmNewPassword,
        passwordCurrent: currentPassword,
      })
    ).then(() => setPassUpdating(false));
  };

  const handleClickShowPassword = () => {
    setshowPassword((st) => !st);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box mb={2}>
        <Typography variant='h5' className={classes_g.fontWeight600}>
          Personal Information
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            name='fullName'
            placeholder='Full Name'
            {...formik}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CustomTextField
            name='phoneNumber'
            placeholder='Phone Number'
            type='number'
            {...formik}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CustomTextField
            name='info'
            placeholder='About'
            extras={{ multiline: true, minRows: 3 }}
            {...formik}
          />
        </Grid>
        <Grid item xs={12} sm={7} md={7} lg={6}>
          <CustomTextField
            name='email'
            placeholder='Email'
            type='email'
            extras={{ disabled: true }}
            {...formik}
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
          <CustomTextField name='street' placeholder='Street' {...formik} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CustomTextField name='city' placeholder='City' {...formik} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CustomTextField name='country' placeholder='Country' {...formik} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            name='postalCode'
            placeholder='Postal Code'
            type='number'
            {...formik}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Box textAlign='right'>
            <Button
              color='primary'
              style={{ minWidth: '10em' }}
              disabled={profileUpdating}
              onClick={updateProfile}
            >
              {profileUpdating ? (
                <CircularProgress size={20} color='inherit' />
              ) : (
                'Update Profile Info'
              )}
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box mt={1} mb={2}>
        <Typography variant='h5' className={classes_g.fontWeight600}>
          Update Password
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            name='currentPassword'
            placeholder='Current Password'
            type='password'
            extras={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...formik}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            name='newPassword'
            placeholder='New Password'
            type='password'
            {...formik}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            name='confirmNewPassword'
            placeholder='Confirm New Password'
            type='password'
            {...formik}
          />
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Box textAlign='right' mt={2}>
          <Button
            variant='contained'
            color='secondary'
            style={{ minWidth: '10em', fontWeight: 600 }}
            disabled={passUpdating}
            onClick={handleNewPassword}
          >
            {passUpdating ? (
              <CircularProgress size={20} color='inherit' />
            ) : (
              'Update Password'
            )}
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default Profile;
