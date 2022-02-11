const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
  stepIcon: {
    '& .MuiIconButton-sizeSmall': {
      padding: 6,
    },
  },
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

    '& > div:last-child': {
      paddingInline: 0,
      textAlign: 'right',
    },
  },
  listDivider: {
    '&:not(:nth-last-child(2))': {
      borderBottom: `1px solid #707070`,
    },
  },
  customTextField: {
    '& .MuiOutlinedInput-input': {
      backgroundColor: theme.custom.backLightGrey,
      color: '#000',
    },
  },
  dispFlex: {
    width: '100%',
    display: 'flex',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconColor: {
    '& svg': {
      color: theme.palette.secondary.light,
    },
  },
}));

export default styles;
