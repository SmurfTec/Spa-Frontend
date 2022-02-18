import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    '& .tabPanel': {
      marginTop: '2em',
    },
  },
  cardMedia: {
    position: 'relative',
    height: 350,
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      //   height: 100,
      maxHeight: 300,
    },
    [theme.breakpoints.down('xs')]: {
      //   height: 100,
      maxHeight: 300,
    },
  },
  cardMediaSm: {
    position: 'relative',
    height: 80,
    [theme.breakpoints.up('md')]: {
      height: 100,
    },
    [theme.breakpoints.down('sm')]: {
      //   height: 100,
      maxHeight: 60,
    },
    [theme.breakpoints.down('xs')]: {
      height: 60,
    },
  },
  prodViewWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: '1.5em',

    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.down('sm')]: {
      gap: '1.4em',
    },

    [theme.breakpoints.down('xs')]: {
      gap: '2.5em',
    },

    '& > div:first-child': {
      flexBasis: '40%',
      [theme.breakpoints.down('md')]: {
        flexBasis: '50%',
      },
      [theme.breakpoints.down('xs')]: {
        '& .MuiGrid-container': {
          justifyContent: 'center',
        },
      },
      '& .serviceWrapper': {
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
      },
    },
    '& > div:last-child': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      // alignItems: 'center',
      webkitBoxPack: 'center',
      flexBasis: '55%',
      [theme.breakpoints.down('md')]: {
        flexBasis: '45%',
      },

      '& > .MuiBox-root': {
        rowGap: '1em',
        justifyContent: 'space-between',
      },
    },
  },
  servViewWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1.5em',

    '& > div:first-child': {
      flexBasis: '45%',
    },
    '& > div:last-child': {
      flexBasis: '55%',

      width: '70%',
      margin: '0 auto',

      display: 'flex',
      gap: '2em',
      flexDirection: 'column',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  quantBtnWrapper: {
    display: 'flex',
    alignItems: 'center',
    gridGap: '2em',
    width: '100%',
    '& .MuiIconButton-root': {
      backgroundColor: '#fff',
      border: `1px solid ${theme.palette.primary.main}`,
      padding: 2,
    },
  },
  statusLabel: {
    color: theme.palette.success.main,
  },

  prodImgWrapper: {
    boxSizing: 'border-box',
    display: 'inline-block',
    width: 'initial',
    height: 'initial',
    maxWidth: '100%',

    '& img': {
      display: 'block',
      maxWidth: '100%',
      //   width: 'initial',
      //   height: 'initial',
      maxHeight: 600,
      backgroundSize: 'contain',
    },
  },
  serviceImg: {
    display: 'flex',
    justifyContent: 'center',
  },
  servOptions: {
    '& > *': {
      flex: 1,
      maxWidth: 250,
      minWidth: 180,
    },
  },

  reviewWrapper: {
    display: 'flex',
    border: `1px solid #eee`,
    padding: '2em',
  },
}));

export default styles;
