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

const styles = makeStyles((theme) => ({
  root: {
    background: theme.custom.white,
    paddingInline: '7em',
    paddingBlock: 10,
    borderRadius: 10,
  },
  subs: {
    '& span': {
      color: theme.palette.secondary.main,
      fontWeight: 700,
    },
  },
}));
const Subscription = () => {
  const classes = styles();
  const [state, handleChange, ,] = useTextInput('');

  const handleSubmit = () => {};
  return (
    <div className={classes.root}>
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
        <Box display='flex' mt={2} sx={{ columnGap: 15 }}>
          <TextField
            name='subscriberEmail'
            value={state}
            placeholder='Email Adddress'
            type='email'
            required
            variant='outlined'
            size='small'
            onChange={handleChange}
            style={{ flex: 2 }}
          />
          <Button color='secondary' endIcon={<SendIcon />}>
            Subscribe
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Subscription;
