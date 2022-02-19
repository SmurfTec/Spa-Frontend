import React from 'react';
import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { useTextInput } from 'hooks';
import SendIcon from '@material-ui/icons/Send';
import globalStyles from 'styles/commonStyles';
import clsx from 'clsx';
import patternImg from 'assets/bg1.svg';

const styles = makeStyles((theme) => ({
  root: {
    background: theme.custom.white,
    paddingBlock: 10,
    borderRadius: 10,
    margin: '0 auto',
    position: 'relative',

    '& .MuiButton-root': {
      backgroundColor: '#fff',
    },

    '& .overlay': {
      width: '100%',
      height: '100%',
      background: `url(${patternImg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity: 0.1,
      left: 0,
      top: 0,
    },

    [theme.breakpoints.up('sm')]: {
      paddingInline: '7em',
      width: '80%',
      // maxWidth: 700,
    },
    [theme.breakpoints.down('sm')]: {
      // width: '100%',
      paddingInline: '1em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  subs: {
    '& span': {
      color: theme.palette.secondary.main,
      fontWeight: 700,
    },
  },
  subscribeForm: {
    display: 'flex',
    columnGap: 15,
    marginTop: '1em',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      rowGap: 15,
    },
  },
}));
const Subscription = () => {
  const classes = styles();
  const classes_g = globalStyles();
  const [state, handleChange, ,] = useTextInput('');

  const handleSubmit = () => {};
  return (
    <div className={classes.root}>
      <Box className='overlay' position='absolute' />
      <Typography variant='h5' color='primary' align='center'>
        Sign up & get latest offers
      </Typography>

      <Typography
        variant='subtitle2'
        color='primary'
        align='center'
        className={classes.subs}
      >
        <span>5% off</span>
        {` `} to all our newsletter subscribers
      </Typography>
      <form onSubmit={handleSubmit}>
        <div className={classes.subscribeForm}>
          <TextField
            name='subscriberEmail'
            value={state}
            placeholder='Email Adddress'
            type='email'
            required
            variant='outlined'
            size='small'
            onChange={handleChange}
            style={{ flex: 2, background: '#fff' }}
          />
          <Button color='secondary' endIcon={<SendIcon />}>
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Subscription;
