import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import {
  Box,
  Typography,
  Checkbox,
  Button,
  CircularProgress,
} from '@material-ui/core';

import { login, socialLogin } from 'store/slices/Auth/extraReducers';

import FaceIcon from '@material-ui/icons/Face';
import LockIcon from '@material-ui/icons/Lock';
import FacebookIcon from '@material-ui/icons/Facebook';

// import googleIcon from 'assets/googleIcon.svg';

import styles from 'styles/FormStyles';
import useStyles from 'styles/commonStyles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import FormTextField from './FormTextField';
import GoogleButton from './GoogleButton';
import FacebookButton from './FacebookButton';
import axios from 'axios';
import { API_BASE_URL, handleCatch } from 'utils/makeReq';

const Login = () => {
  const classes = styles();
  const classes_g = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const validationSchema = yup.object({
    email: yup.string('Enter your email').email().required('Email is required'),
    password: yup
      .string('Enter your password')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: (values) => {
      dispatch(login({ email: values.email, password: values.password }));
    },
  });

  const { isLoggedIn, loading } = useSelector((st) => st.auth);

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn, navigate]);

  const responseFacebook = async (response) => {
    console.log(response);

    if (response.error) return;

    const { name, email, picture } = response;

    console.log(`email`, email);

    dispatch(
      socialLogin({
        fullName: name,
        email,
        socialType: 'facebook',
      })
    );
  };

  const responseGoogle = async (response) => {
    console.log(response);
    if (response.error) return;
    const { name, email, imageUrl } = response.profileObj;
    console.log(`email`, email);
    dispatch(
      socialLogin({
        fullName: name,
        email,
        socialType: 'google',
        photo: imageUrl,
      })
    );
  };

  // const handleFormikChange = (e) => {
  //   handleChange(e);
  //   handleBlur(e);
  // };

  return (
    <Box className={clsx(classes_g.backWrapper)} justifyContent='center'>
      <Box className='overlay' position='absolute' />
      <div className={clsx(classes.root, classes.loginWrapper)}>
        <Box>
          <Typography variant='h3' color='primary'>
            Sign In
          </Typography>
          <Typography variant='h5' color='textSecondary'>
            To sign in enter your details
          </Typography>
        </Box>

        <FormTextField
          name='email'
          type='email'
          placeholder='Email'
          inputIcon={<FaceIcon color='secondary' />}
          {...formik}
        />
        <FormTextField
          name='password'
          type='password'
          placeholder='Password'
          inputIcon={<LockIcon color='secondary' />}
          {...formik}
        />

        <div className={classes.rememberMeWrapper}>
          <Box display='flex' alignItems='center' sx={{ columnGap: 10 }}>
            <Checkbox
              color='primary'
              name='rememberMe'
              checked={formik.values.rememberMe}
              onChange={formik.handleChange}
            />
            <Typography variant='subtitle2'>Remember Me</Typography>
          </Box>
          <div className={classes_g.linkHover}>
            <Typography variant='body2' color='textSecondary'>
              <NavLink to='/forgotPassword'>Forgot password ?</NavLink>
            </Typography>
          </div>
        </div>

        <Button
          variant='contained'
          color='secondary'
          onClick={formik.handleSubmit}
          disabled={loading}
        >
          {loading ? <CircularProgress size={25} color='inherit' /> : 'Sign In'}
        </Button>
        <Typography variant='subtitle1' color='textSecondary'>
          Or
        </Typography>
        <Button
          variant='contained'
          color='default'
          startIcon={<FacebookIcon />}
          className={classes.faceBookBtn}
        >
          Facebook
          <FacebookButton responseFacebook={responseFacebook} />
        </Button>

        <GoogleButton classes={classes} responseGoogle={responseGoogle} />

        <Box
          mt={1}
          display='flex'
          justifyContent='center'
          sx={{ columnGap: '1em' }}
        >
          <Typography variant='body1' color='textPrimary'>
            Don't Have an Account?{' '}
          </Typography>
          <Typography variant='body1' color='textSecondary'>
            <NavLink to='/join'>Sign Up</NavLink>
          </Typography>
        </Box>
      </div>
    </Box>
  );
};

export default Login;
