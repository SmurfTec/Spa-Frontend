import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  // backWrapper: {
  //   maxHeight: '100%',
  //   display: 'flex',
  //   position: 'relative',
  //   '& .overlay': {
  //     width: '100%',
  //     height: '100%',
  //     background: `url(${bgImg})`,
  //     backgroundSize: 'cover',
  //     backgroundRepeat: 'no-repeat',
  //     opacity: 0.3,
  //   },
  // },
  root: {
    borderRadius: 12,
    padding: '2em',
    display: 'flex',
    rowGap: '1em',
    textAlign: 'center',

    '& .MuiTypography-h5': { fontWeight: 500 },

    '& .MuiTypography-h3, .MuiTypography-h5': {
      fontWeight: 400,
    },

    '& a': {
      verticalAlign: 'unset',
      cursor: 'pointer',
      color: theme.palette.primary.main,

      '&:hover': {
        textDecoration: 'underline',
      },
    },
    '& .MuiCheckbox-root': {
      padding: '0',
    },
  },
  loginWrapper: {
    width: '80%',
    backgroundColor: '#fff',
    zIndex: 2,
    maxWidth: 490,
    margin: '0 auto',
    marginBlock: '6em',
    flexDirection: 'column',
    '& .MuiIconButton-colorPrimary': {
      boxShadow: 'none',
    },

    '& form': {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '1em',
    },

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  rememberMeWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: '1em',
    rowGap: '1em',
    [theme.breakpoints.down('xs')]: {
      columnGap: 15,
    },
  },
  faceBookBtn: {
    marginBottom: '0.3em',
    backgroundColor: theme.custom.customBlue,
    color: '#fff',
    '&:hover': {
      backgroundColor: `${theme.custom.customBlue}d4`,
    },
  },
  googleBtn: {
    backgroundColor: theme.custom.white,
    color: theme.custom.customYellow,
    '&:hover': {
      backgroundColor: `${theme.custom.customYellow}33`,
    },
  },

  //   ^ Join Form Styles
  joinWrapper: {
    width: '90%',
    maxWidth: 850,
    margin: '0 auto',
    marginBlock: '6em',
    display: 'flex',
    justifyContent: 'space-between',
    columnGap: '1em',
    padding: '2em 3em',
    backgroundColor: '#fff',
    zIndex: 2,
    '& .MuiIconButton-colorPrimary': {
      boxShadow: 'none',
    },

    '& > div': {
      flexBasis: '45%',
      display: 'flex',
      flexDirection: 'column',
      rowGap: '1em',

      '&:last-child': {
        // rowGap: '2em',
        rowGap: '1em',
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '70%',
      flexDirection: 'column',
      rowGap: '1em',
    },

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
}));
export default styles;
