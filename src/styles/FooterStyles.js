import { makeStyles } from '@material-ui/core';
import bgImg from 'assets/bg1.svg';

const styles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // marginTop: '1rem',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    columnGap: 15,
    color: '#fff',
    position: 'relative',
  },
  overlay: {
    zIndex: 2,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.1,
  },

  wrapper: {
    width: '80%',
    margin: '0 auto',
    paddingBlock: '1em',

    // '& h5': {
    //   [theme.breakpoints.down('xs')]: {
    //     textDecoration: 'underline',
    //     textAlign: 'left',
    //   },
    // },
  },
  contentWrapper: {
    display: 'flex',
    columnGap: 10,

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },

    '& .contentLeft': {
      textAlign: 'center',
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
        [theme.breakpoints.down('xs')]: {
          width: theme.spacing(4),
          height: theme.spacing(4),
        },
      },
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  avatar: {
    backgroundColor: 'transparent',
    '&.MuiAvatar-root': {
      width: 100,
      height: 70,
      '& img': {
        width: '100%',
        height: '100%',
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
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'unset',
    },

    [theme.breakpoints.up('xs')]: {
      position: 'absolute',
      transform: 'translateY(-50%)',
      top: '50%',
    },

    [theme.breakpoints.down('xs')]: {
      marginBlock: '1.5em',
    },

    // to resolve the slight mobile responsive issue
    // [theme.breakpoints.down('xs')]: {
    //   marginBlock: '1.5em',
    //   position: 'relative',
    //   transform: 'translateY(0%)',
    //   top: 0,
    // },
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
    '& hr': {
      backgroundColor: theme.custom.white,
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
    justifyContent: 'space-around',
    columnGap: '2em',
    rowGap: '2em',
    flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',

      rowGap: '2.5em',
      columnGap: '1em',
    },
  },
}));

export default styles;
