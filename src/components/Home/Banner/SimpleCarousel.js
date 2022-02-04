import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import { IconButton, makeStyles } from '@material-ui/core';
import PreviousIcon from '@material-ui/icons/NavigateBefore';
import NextIcon from '@material-ui/icons/NavigateNext';

const styles = makeStyles((theme) => ({
  root: {
    width: '80%',
    // height: '100%',
    margin: '0 auto',
    borderRadius: 15,
    position: 'relative',
  },
  swipeButtons: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    borderRadius: '50%',
    backgroundColor: theme.custom.white,
    '& .MuiIconButton-root': {
      color: theme.palette.secondary.main,
      padding: 0,
      '& svg': {
        fontSize: '2.5rem',
      },
    },
  },
  left: {
    left: '-2em',
  },
  right: {
    right: '-2em',
  },
}));

const SimpleCarousel = ({ children }) => {
  let reactSwipeEl;
  const classes = styles();

  return (
    <div className={classes.root}>
      <ReactSwipe
        className='carousel'
        swipeOptions={{ continuous: true, auto: 2000 }}
        ref={(el) => (reactSwipeEl = el)}
      >
        {children}
      </ReactSwipe>
      <div className={`${classes.swipeButtons} ${classes.right}`}>
        <IconButton onClick={() => reactSwipeEl.next()}>
          <NextIcon />
        </IconButton>
      </div>
      <div className={`${classes.swipeButtons} ${classes.left}`}>
        <IconButton onClick={() => reactSwipeEl.prev()}>
          <PreviousIcon />
        </IconButton>
      </div>

      {/* <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button> */}
    </div>
  );
};

export default SimpleCarousel;
