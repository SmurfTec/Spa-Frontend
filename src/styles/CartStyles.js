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
  editBtns: {
    '& .MuiIconButton-root': {
      boxShadow:
        '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    },
    '& .doneBtn svg': {
      color: theme.palette.success.main,
    },
    '& .cancelBtn svg': {
      color: theme.palette.error.main,
    },
  },
}));

export default styles;
