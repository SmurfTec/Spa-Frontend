import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, useFormik } from 'formik';
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
  TextField,
} from '@material-ui/core';

import { updateMe, updatePassword } from 'store/slices/Auth/extraReducers';
import CustomTextField from './CustomTextField';

import styles from 'styles/commonStyles';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { removeEmptyNullProps, clearEmptiesObj } from 'utils/constants';

const Profile = () => {
  const classes_g = styles();
  const dispatch = useDispatch();
  const { user, loading, authenticating } = useSelector((st) => st.auth);
  const [passUpdating, setPassUpdating] = useState(false);
  const [profileUpdating, setProfileUpdating] = useState(false);
  const [showPassword, setshowPassword] = useState(false);

  const profileInfoFormik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      info: '',
      phoneNumber: 112231111,
      shippingAddress: {
        street: '',
        city: '',
        country: '',
        postalCode: '',
      },
    },
    validationSchema: yup.object({
      fullName: yup
        .string()
        .min(3, 'Fullname must be atleast 3 characters long')
        .required('Enter your fullname'),
    }),
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values) => {
      setProfileUpdating(true);
      console.log('values', values);
      const remEmpValues = removeEmptyNullProps(values);
      dispatch(updateMe(clearEmptiesObj(remEmpValues))).then(() =>
        setProfileUpdating(false)
      );
    },
  });

  const passFormik = useFormik({
    initialValues: {
      passwordCurrent: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: yup.object({
      passwordCurrent: yup
        .string()
        .min(8, 'Password should be atleast 8 characters long')
        .required('Enter current password'),
      password: yup
        .string()
        .min(8, 'Password should be atleast 8 characters long')
        .when('passwordCurrent', {
          is: (passwordCurrent) => passwordCurrent && passwordCurrent !== '',
          then: yup.string().required('Enter new Password'),
        }),
      passwordConfirm: yup
        .string()
        .oneOf(
          [yup.ref('password'), null],
          'Confirm New Password must match with New Password'
        ),
    }),
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values) => {
      setPassUpdating(true);
      dispatch(updatePassword(values)).then(() => {
        setPassUpdating(false);
        return passFormik.resetForm();
      });
    },
  });

  useEffect(() => {
    if (user) {
      const { fullName, email } = user;
      console.log('user', user);
      profileInfoFormik.setValues({
        fullName,
        email,
        phoneNumber: user.phoneNumber || '',
        info: user.info || '',
        shippingAddress: {
          street: user?.shippingAddress?.street || '',
          city: user?.shippingAddress?.city || '',
          country: user?.shippingAddress?.country || '',
          postalCode: user?.shippingAddress?.postalCode || '',
        },
      });
    }
  }, [user]);

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
            {...profileInfoFormik}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CustomTextField
            name='phoneNumber'
            placeholder='Phone Number'
            type='number'
            {...profileInfoFormik}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CustomTextField
            name='info'
            placeholder='About'
            extras={{ multiline: true, minRows: 3 }}
            {...profileInfoFormik}
          />
        </Grid>
        <Grid item xs={12} sm={7} md={7} lg={6}>
          <CustomTextField
            name='email'
            placeholder='Email'
            type='email'
            extras={{ disabled: true }}
            {...profileInfoFormik}
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
          <CustomTextField
            name='shippingAddress.street'
            value={profileInfoFormik?.values['shippingAddress']?.street}
            placeholder='Street'
            {...profileInfoFormik}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CustomTextField
            name='shippingAddress.city'
            placeholder='City'
            value={profileInfoFormik?.values['shippingAddress']?.city}
            {...profileInfoFormik}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CustomTextField
            name='shippingAddress.country'
            value={profileInfoFormik?.values['shippingAddress']?.country}
            placeholder='Country'
            {...profileInfoFormik}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            name='shippingAddress.postalCode'
            value={profileInfoFormik?.values['shippingAddress']?.postalCode}
            placeholder='Postal Code'
            {...profileInfoFormik}
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
              onClick={profileInfoFormik.handleSubmit}
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
            name='passwordCurrent'
            placeholder='Current Password'
            type='password'
            extras={{
              endadornment: (
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
            {...passFormik}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            name='password'
            placeholder='New Password'
            type='password'
            {...passFormik}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            name='passwordConfirm'
            placeholder='Confirm New Password'
            type='password'
            {...passFormik}
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
            onClick={passFormik.handleSubmit}
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
