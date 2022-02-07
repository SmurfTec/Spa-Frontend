const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
  vendorContainer: {
    // width: '80%',
    // maxWidth: 850,
    // margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    gap: 15,

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      rowGap: 10,
    },

    '& > div': {
      display: 'flex',
      alignItems: 'center',
      columnGap: 15,
    },

    '& > div:last-child': {
      flexDirection: 'column',
      justifyContent: 'center',
      flexWrap: 'nowrap',
      flexShrink: 0,
      '& > .MuiTypography-subtitle2': {
        fontWeight: 600,
      },
      '& svg': {
        color: theme.palette.warning.main,
      },
      '& > :first-child': {
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          alignItems: 'center',
        },
      },
    },
  },
  tabButtons: {
    '& > .MuiButton-root': {
      minWidth: 120,
    },
  },
}));

export default styles;
