const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
  divbackImg: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    minHeight: 200,
    padding: '1em',
    position: 'relative',
  },
  offerWrapper: {
    flex: 2,

    '& > .MuiGrid-item:not(:first-child)': {
      [theme.breakpoints.up('sm')]: {
        paddingLeft: '1em',
      },
      [theme.breakpoints.between('sm', 'xs')]: {
        paddingLeft: '1em',
      },

      [theme.breakpoints.down('xs')]: {
        paddingTop: '1em',
      },
    },
  },
  // offerProduct: {
  //   background: '#00000026',
  //   width: 'fit-content',
  //   padding: '5px 10px',
  //   margin: '0 auto',
  //   marginTop: '4em',

  //   [theme.breakpoints.down('sm')]: {
  //     marginTop: 0,
  //   },
  //   color: '#fff',
  //   '& h4': {
  //     fontWeight: 500,
  //     // width: 'fit-content',
  //   },
  // },
  // offerCard: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   height: '100%',
  //   rowGap: 15,
  // },
  homePromoBg: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 15,
    padding: '1em',
  },
}));

export default styles;
