const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '8rem',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    columnGap: 15,
    color: '#fff',
  },

  wrapper: {
    width: '70%',
    margin: '0 auto',
    paddingBlock: '1em',
  },
  contentWrapper: {
    display: 'flex',
    columnGap: 10,

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
  },
  menuDiv: {
    top: '50%',
    width: '100%',
    display: 'flex',
    rowGap: 25,
    position: 'absolute',
    flexWrap: 'wrap',
    transform: 'translateY(-50%)',
    columnGap: 25,
    justifyContent: 'space-between',
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
