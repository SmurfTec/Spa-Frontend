import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  Box,
  Typography,
  Checkbox,
  Input,
  IconButton,
  Button,
  CircularProgress,
  TextField,
  InputAdornment,
} from '@material-ui/core';

import { signUp } from 'store/slices/Auth/extraReducers';
import useManyInputs from 'hooks/useManyInputs';

import useStyles from 'styles/commonStyles';
import styles from 'styles/FormStyles';

import FaceIcon from '@material-ui/icons/Face';
import LockIcon from '@material-ui/icons/Lock';
import FacebookIcon from '@material-ui/icons/Facebook';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FormTextField from './FormTextField';

const Join = () => {
  const classes = styles();
  const classes_g = useStyles();

  const { isLoggedIn, loading } = useSelector((st) => st.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn, navigate]);

  const initialValues = {
    fullName: '',
    phoneNo: '',
    email: '',
    password: '',
    passwordConfirm: '',
    // address: '',
    termsConditions: false,
  };

  const validationSchema = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required').min(6),
    passwordConfirm: yup
      .string()
      .oneOf(
        [yup.ref('password'), null],
        'Password & Confirm Password must match'
      )
      .required('Confirm password is required'),
    fullName: yup.string().required('Full Name is required').min(4),
    phoneNo: yup
      .string()
      .required('Phone number is required')
      .min(6, 'phone number must be valid'),
  });

  const formik = useFormik({
    validateOnBlur: false,
    validateOnChange: true,
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const { fullName, email, password, passwordConfirm } = values;
      dispatch(
        signUp({
          fullName,
          email,
          password,
          passwordConfirm,
        })
      );
    },
  });

  return (
    <div className={classes_g.backWrapper}>
      <Box className='overlay' position='absolute' />
      <div className={clsx(classes.root, classes.joinWrapper)}>
        <div>
          <Box>
            <Typography variant='h3' color='primary'>
              Sign Up
            </Typography>
            <Typography variant='h5' color='textSecondary'>
              To register enter your details
            </Typography>
          </Box>
          <FormTextField
            name='fullName'
            placeholder='Full Name'
            type='email'
            size='small'
            inputIcon={<FaceIcon color='secondary' />}
            {...formik}
          />
          <FormTextField
            name='phoneNo'
            placeholder='Phone Number'
            type='number'
            size='small'
            inputIcon={<PhoneIcon color='secondary' />}
            {...formik}
          />
          <FormTextField
            name='email'
            placeholder='Email'
            type='email'
            size='small'
            inputIcon={<EmailIcon color='secondary' />}
            {...formik}
          />
          <FormTextField
            name='password'
            type='password'
            placeholder='Password'
            size='small'
            inputIcon={<LockIcon color='secondary' />}
            {...formik}
          />
          <FormTextField
            name='passwordConfirm'
            type='password'
            placeholder='Confirm Password'
            size='small'
            inputIcon={<LockIcon color='secondary' />}
            {...formik}
          />
        </div>
        <div>
          <Box sx={{ height: 60 }} />
          <Box display='flex' alignItems='start' sx={{ columnGap: 10 }}>
            <Checkbox
              color='primary'
              name='termsConditions'
              checked={formik.values.termsConditions}
              onChange={formik.handleChange}
              required
            />
            <Typography variant='subtitle2' align='left'>
              Terms and conditions Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.{' '}
            </Typography>
          </Box>

          <Button
            variant='contained'
            color='secondary'
            fullWidth
            onClick={formik.handleSubmit}
            disabled={loading || !formik.values.termsConditions}
          >
            {loading ? (
              <CircularProgress size={25} color='inherit' />
            ) : (
              'Sign Up'
            )}
          </Button>

          <Typography variant='subtitle1' color='textSecondary'>
            Or
          </Typography>

          <Box display='flex' flexDirection='column' sx={{ rowGap: 10 }}>
            <Button
              variant='contained'
              color='default'
              startIcon={<FacebookIcon />}
              className={classes.faceBookBtn}
              fullWidth
            >
              Facebook
            </Button>

            <Button
              className={classes.googleBtn}
              variant='contained'
              color='default'
              fullWidth
            >
              Google
            </Button>
          </Box>
          <Box
            mt={1}
            display='flex'
            justifyContent='center'
            sx={{ columnGap: '1em' }}
          >
            <Typography variant='body1' color='textPrimary'>
              Already Have an Account?{' '}
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              <NavLink to='/login'>Sign In</NavLink>
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Join;
