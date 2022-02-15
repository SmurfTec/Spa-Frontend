import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  Box,
  Typography,
  Checkbox,
  Input,
  IconButton,
  Button,
} from '@material-ui/core';

import useManyInputs from 'hooks/useManyInputs';

import FaceIcon from '@material-ui/icons/Face';
import LockIcon from '@material-ui/icons/Lock';
import FacebookIcon from '@material-ui/icons/Facebook';
// import googleIcon from 'assets/googleIcon.svg';

import styles from 'styles/FormStyles';
import useStyles from 'styles/commonStyles';

const Login = () => {
  const classes = styles();
  const classes_g = useStyles();

  // const { isLoggedIn, signInUser } = useContext(AuthContext);

  const initialState = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const [inputState, handleTxtChange, handleToggleChange, , , ,] =
    useManyInputs(initialState);

  const handleSubmit = () => {
    // console.log('Login Form Submitted');
  };

  return (
    <Box className={classes.backWrapper}>
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
        <form id='loginForm' onSubmit={handleSubmit}>
          <div className={classes_g.lightPinkInputField}>
            <IconButton size='small' color='secondary'>
              <FaceIcon />
            </IconButton>
            <Input
              name='email'
              value={inputState.email}
              type='email'
              onChange={handleTxtChange}
              placeholder='Username'
            />
          </div>
          <div className={classes_g.lightPinkInputField}>
            <IconButton size='small' color='secondary'>
              <LockIcon />
            </IconButton>
            <Input
              name='password'
              value={inputState.password}
              type='password'
              onChange={handleTxtChange}
              fullWidth
              placeholder='Password'
            />
          </div>
        </form>

        <div className={classes.rememberMeWrapper}>
          <Box display='flex' alignItems='center' sx={{ columnGap: 10 }}>
            <Checkbox
              color='primary'
              name='rememberMe'
              checked={inputState.rememberMe}
              onChange={(e) => handleToggleChange(e)}
            />
            <Typography variant='subtitle2'>Remember Me</Typography>
          </Box>
          <div className={classes_g.linkHover}>
            <Typography variant='body1' color='textSecondary'>
              <NavLink to='/forgotpassword'>Forgot password ?</NavLink>
            </Typography>
          </div>
        </div>

        <Button
          variant='contained'
          color='secondary'
          type='submit'
          form='loginForm'
        >
          Sign In
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
        </Button>

        <Button
          className={classes.googleBtn}
          variant='contained'
          color='default'
        >
          Google
        </Button>
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
