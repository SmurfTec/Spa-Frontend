const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
  vendorContainer: {
    // width: '80%',
    // maxWidth: 850,
    // margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    columnGap: 15,

    '& > div': {
      display: 'flex',
      alignItems: 'center',
      columnGap: 15,
    },

    '& div:last-child': {
      flexDirection: 'column',
      justifyContent: 'center',
      flexWrap: 'nowrap',
      '& > .MuiTypography-subtitle1': {
        fontWeight: 600,
      },
      '& svg': {
        color: theme.palette.warning.main,
      },
    },
  },
}));

export default styles;
