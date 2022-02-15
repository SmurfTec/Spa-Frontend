import React from 'react';
import {
  Box,
  Avatar,
  makeStyles,
  Typography,
  Divider,
} from '@material-ui/core';
import userImg from 'assets/user.jpg';
import { Rating } from '@material-ui/lab';
import { getMuiDateFormat } from 'utils/constants';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    gridGap: '1em',
    border: `1px solid ${theme.custom.bordersColor}`,
    borderRadius: 10,
    padding: '2em',

    '&:not(:last-child)': {
      marginBottom: '1.5em',
    },
  },
  userImage: {
    width: '3.5rem',
    height: '3.5rem',
  },
}));

const Review = ({ user, comment, rating, createdAt }) => {
  const classes = styles();

  console.log('user,comment, rating', user, comment, rating, createdAt);

  return (
    <div className={classes.root}>
      {/* //^ user and commment section */}
      <Box
        flex={1}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        gridGap={15}
      >
        {/* //^ Users box */}
        <Box width='100%' display='flex' gridGap={15} alignItems='center'>
          <Avatar
            alt={user.name}
            src={user.image}
            className={classes.userImage}
          />
          <Box display='flex' flexDirection='column'>
            <Typography variant='subtitle1' component='span'>
              {user.name}
            </Typography>
            <Typography
              variant='subtitle2'
              color='textSecondary'
              component='span'
            >
              {getMuiDateFormat(createdAt)}
            </Typography>
          </Box>
        </Box>
        {/* //^ Rating Box */}
        <Box>
          <Rating value={rating} readOnly />
        </Box>
      </Box>
      <Divider />
      <Typography variant='body1' color='textPrimary'>
        {comment}
      </Typography>
    </div>
  );
};

export default Review;
