import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import clsx from 'clsx';
import {
  Box,
  Typography,
  Checkbox,
  Button,
  CircularProgress,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import * as yup from 'yup';
import { useFormik } from 'formik';

import FormTextField from './FormTextField';

import styles from 'styles/FormStyles';
import useStyles from 'styles/commonStyles';

import LockIcon from '@material-ui/icons/Lock';

import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from 'store/slices/Auth/extraReducers';

const ResetPassword = () => {
  const classes = styles();
  const classes_g = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, isLoggedIn } = useSelector((st) => st.auth);
  const { token } = useParams();

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn, navigate]);

  const formik = useFormik({
    initialValues: {
      password: '',
      passwordConfirm: '',
    },
    validationSchema: yup.object({
      password: yup
        .string('Enter your password')
        .required('Password is required'),
      passwordConfirm: yup
        .string()
        .oneOf(
          [yup.ref('password'), null],
          'Password & Confirm Password must match'
        )
        .required('Confirm password is required'),
    }),
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: (values) => {
      dispatch(
        resetPassword({
          token,
          pass: {
            ...values,
          },
        })
      );
    },
  });

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn, navigate]);

  return (
    <Box className={clsx(classes_g.backWrapper)} justifyContent='center'>
      <Box className='overlay' position='absolute' />
      <div className={clsx(classes.root, classes.loginWrapper)}>
        <Box>
          <Typography variant='h3' color='primary'>
            Reset Password
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            sx={{ textAlign: 'justify' }}
          >
            Create your new password so you can login to your account
          </Typography>
        </Box>

        <Box my={2} display='flex' flexDirection='column' gridGap={15}>
          <FormTextField
            name='password'
            type='password'
            placeholder='Password'
            inputIcon={<LockIcon color='secondary' />}
            {...formik}
          />
          <FormTextField
            name='passwordConfirm'
            type='password'
            placeholder='Confirm Password'
            inputIcon={<LockIcon color='secondary' />}
            {...formik}
          />
        </Box>

        <Button
          variant='contained'
          color='secondary'
          onClick={formik.handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={25} color='inherit' />
          ) : (
            'Update Password'
          )}
        </Button>
      </div>
    </Box>
  );
};

export default ResetPassword;
