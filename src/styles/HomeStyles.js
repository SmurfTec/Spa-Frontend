const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
  divbackImg: {
    backgroundOrigin: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
    padding: '1em',
    position: 'relative',
  },
  offerCard: {
    flex: 2,
    // height: '100%',
    // '& .MuiGrid-item': {
    //   paddingBlock: '1em',
    // },
    '& .MuiGrid-item:not(last-child)': {
      paddingLeft: '1em',
    },
    '& .MuiGrid-item:last-child': {
      paddingRight: '1em',
    },
  },
  offerProduct: {
    background: '#00000026',
    width: 'fit-content',
    padding: '5px 10px',
    margin: '0 auto',
    marginTop: '4em',
    color: '#fff',
    '& h4': {
      fontWeight: 500,
      // width: 'fit-content',
    },
  },
  homePromoBg: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 15,
    paddingBlock: '1em',
  },
  linkUnderline: {
    '& a': {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
}));

export default styles;
