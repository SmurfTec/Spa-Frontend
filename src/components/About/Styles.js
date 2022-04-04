import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    justifyContent: 'start',
    marginBottom: '4rem',
    minHeight: '85vh',
    padding: '1rem 5rem 1rem',
    '& div': {
      marginTop: '1rem',
    },
    '& h6': {
      color: '#4F4E4D',
      fontSize: '23px',
      fontWeight: 600,
    },
    '& p': {
      color: '#4F4E4D',
      fontWeight: 500,
    },
    [theme.breakpoints.up('lg')]: {
      padding: '1rem 4rem 1rem',
      '& p': {
        fontSize: '19px',
      },
      '& div': {
        marginTop: '2rem',
      },
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 3rem 1rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1rem 2rem 1rem',
      '& p': {
        fontSize: '12px',
      },
      '& div': {
        marginTop: '0.75rem',
      },
    },
  },
  // grayBox: {
  //   height: '110px',
  //   width: '200px',
  //   backgroundColor: '#E6E6E6',
  //   [theme.breakpoints.up('lg')]: {
  //     height: '170px',
  //     width: '290px',
  //   },
  // },
  // flexb: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   marginTop: '2rem',
  // },
  // flexs: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'start',
  //   columnGap: 50,
  //   marginTop: '1.2rem',
  // },
}));

export default styles;
