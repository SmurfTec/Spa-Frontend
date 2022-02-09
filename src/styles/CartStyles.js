const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
  tableWrapper: {
    backgroundColor: '#fff',
    '& .MuiTableRow-root > :first-child': {
      '& svg': {
        color: theme.palette.error.main,
      },
    },
  },

  tableHeader: {
    backgroundColor: theme.palette.secondary.light,
    '& .MuiTableCell-head': {
      color: '#fff',
      fontWeight: 600,
    },
  },
  tableBody: {
    '&.MuiTableCell-body': {
      color: '#000',
    },
    '& svg': {
      color: theme.palette.error.main,
    },
  },

  cartTotalInfo: {
    display: 'flex',
    flexDirection: 'column',
    '& > div': {
      padding: '10px 15px',
    },
    '& > div:nth-last-child(3)': {
      borderBottom: `1px solid #707070`,
    },
    '& > div:nth-last-child(2)': {
      marginTop: '3em',
    },
    '& > div:last-child': {
      paddingInline: 0,
      textAlign: 'right',
    },
  },
  customTextField: {
    '& .MuiOutlinedInput-input': {
      backgroundColor: theme.custom.backLightGrey,
      color: '#000',
    },
  },
}));

export default styles;
