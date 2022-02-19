import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import {
  Box,
  Typography,
  Checkbox,
  Input,
  IconButton,
  Button,
  CircularProgress,
} from '@material-ui/core';

import useManyInputs from 'hooks/useManyInputs';

import useStyles from 'styles/commonStyles';
import styles from 'styles/FormStyles';

import FaceIcon from '@material-ui/icons/Face';
import LockIcon from '@material-ui/icons/Lock';
import FacebookIcon from '@material-ui/icons/Facebook';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from 'store/slices/auth/extraReducers';
import { toast } from 'react-toastify';

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

  const initialState = {
    fullName: '',
    phoneNo: '',
    email: '',
    password: '',
    passwordConfirm: '',
    // address: '',
    termsConditions: false,
    rememberMe: false,
  };

  const [inputState, handleTxtChange, handleToggleChange, , , ,] =
    useManyInputs(initialState);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (inputState.password === inputState.passwordConfirm) {
      // setLoading((st) => !st);

      const { fullName, email, passwordConfirm, password } = inputState;
      dispatch(
        signUp({
          fullName,
          email,
          passwordConfirm,
          password,
        })
      );
    } else toast.error('Password & Confirm Password does not match');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className={classes_g.backWrapper}>
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

            <div className={classes_g.lightPinkInputField}>
              <FaceIcon />
              <Input
                name='fullName'
                value={inputState.fullName}
                onChange={handleTxtChange}
                placeholder='Full Name'
                autoFocus
              />
            </div>

            <div className={classes_g.lightPinkInputField}>
              <PhoneIcon />
              <Input
                name='phoneNo'
                value={inputState.phoneNo}
                type='number'
                onChange={handleTxtChange}
                fullWidth
                placeholder='Phone Number'
              />
            </div>

            {/* <div className={classes_g.lightPinkInputField}>
            <IconButton size='small' color='secondary'>
              <LocationOnIcon />
            </IconButton>
            <Input
              className={classes_g.lightPinkInputField}
              name='address'
              multiline={true}
              rows={4}
              value={inputState.address}
              onChange={handleTxtChange}
              placeholder='Address (Street Address & City)'
            />
          </div> */}

            <div className={classes_g.lightPinkInputField}>
              <EmailIcon />
              <Input
                // className={classes_g.lightPinkInputField}
                name='email'
                type='email'
                value={inputState.email}
                onChange={handleTxtChange}
                placeholder='Email'
              />
            </div>
            <div className={classes_g.lightPinkInputField}>
              <LockIcon />
              <Input
                // className={classes_g.lightPinkInputField}
                name='password'
                type='password'
                value={inputState.password}
                onChange={handleTxtChange}
                placeholder='Password'
              />
            </div>
            <div className={classes_g.lightPinkInputField}>
              <LockIcon />
              <Input
                // className={classes_g.lightPinkInputField}
                name='passwordConfirm'
                type='password'
                value={inputState.passwordConfirm}
                onChange={handleTxtChange}
                placeholder='Confirm Password'
              />
            </div>
          </div>
          <div>
            <Box sx={{ height: 60 }} />
            <Box display='flex' alignItems='start' sx={{ columnGap: 10 }}>
              <Checkbox
                color='primary'
                name='rememberMe'
                checked={inputState.rememberMe}
                onChange={(e) => handleToggleChange(e)}
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
              type='submit'
              disabled={loading}
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
              {/* <Box
          sx={{
            width: 'fit-content',
            marginLeft: 'auto',
          }}
        > */}
              <Typography variant='body1' color='textPrimary'>
                Already Have an Account?{' '}
              </Typography>
              <Typography variant='body1' color='textSecondary'>
                <NavLink to='/login'>Sign In</NavLink>
              </Typography>
              {/* </Box> */}
            </Box>
          </div>
        </div>
      </form>
    </>
  );
};

export default Join;
