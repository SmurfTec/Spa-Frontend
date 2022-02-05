const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // marginTop: '1rem',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    columnGap: 15,
    color: '#fff',
  },

  wrapper: {
    width: '80%',
    margin: '0 auto',
    paddingBlock: '1em',

    '& h5': {
      [theme.breakpoints.down('xs')]: {
        textDecoration: 'underline',
      },
    },
  },
  contentWrapper: {
    display: 'flex',
    columnGap: 10,

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },

    [theme.breakpoints.up('xs')]: {
      '& .contentLeft': {
        paddingRight: '1em',
        borderRight: '2px solid #fff',
        flexBasis: '35%',
      },

      '& .contentRight': {
        flexBasis: '65%',
        marginLeft: '1em',
        position: 'relative',
      },
    },
  },
  copyright: {
    padding: '1em',
    color: '#fff',
    backgroundColor: '#00000063',
  },
  brandsImg: {
    display: 'flex',
    flexWrap: 'nowrap',
    columnGap: 15,
    paddingTop: '0.5em',
    '& .MuiAvatar-colorDefault': {
      backgroundColor: 'transparent',

      '& svg': {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
    },
  },
  menuDiv: {
    width: '100%',
    display: 'flex',
    rowGap: 25,
    flexWrap: 'wrap',
    columnGap: 25,
    justifyContent: 'space-between',

    [theme.breakpoints.up('xs')]: {
      position: 'absolute',
      transform: 'translateY(-50%)',
      top: '50%',
    },
  },
  contactSecMobile: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: 15,
      // alignItems: 'center',
      marginTop: '2em',
      // '& > div': {
      //   display: 'flex',
      //   flexDirection: 'column',
      //   alignItems: 'center',
      // },
    },
  },
  contactSecDesktop: {
    display: 'inline-block',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  collaborators: {
    marginTop: '2em',
    display: 'flex',
    justifyContent: 'space-between',
    columnGap: 15,
    rowGap: 15,
    flexWrap: 'wrap',
  },
}));

export default styles;
