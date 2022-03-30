import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  contentWrapper: {
    width: '100%',
    display: 'flex',
    gap: '2em',
    justifyContent: 'left',

    '& > div:first-child': {
      minWidth: 200,
      height: 'fit-content',

      [theme.breakpoints.up('lg')]: {
        width: '25%',
      },
    },
    '& > div:last-child': {
      flex: 1,
      // maxWidth: 700,
    },

    [theme.breakpoints.up('lg')]: {
      gap: '3em',
    },
    [theme.breakpoints.down(1000)]: {
      flexDirection: 'column',
      gap: '2em',
      width: '100%',
    },
  },
  cardContent: {
    padding: 0,
    '& > ul': {
      [theme.breakpoints.down(1000)]: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        '& > *': {
          flex: 1,
        },
        '& hr': {
          display: 'none',
        },
        '& > a > .MuiListItem-button': {
          flexDirection: 'column',
          alignItems: 'center',
          '& .MuiListItemIcon-root': {
            minWidth: 'unset !important',
            width: 'fit-content',
          },
        },
      },
    },
    '&.MuiCardContent-root:last-child': {
      paddingBottom: 0,
    },
  },
  list: {
    padding: 0,
    '& a': {
      color: theme.palette.text.secondary,
      minWidth: 80,
      //   '& svg': {
      //     color: theme.custom.svg,
      //   },

      // [theme.breakpoints.down('sm')]: {
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   '& > .MuiListItem-button': {
      //     height: '100%',
      //   },
      // },

      '& *': {
        fontWeight: 500,
        [theme.breakpoints.down('sm')]: {
          textAlign: 'center',
        },
      },

      '&.active': {
        color: theme.palette.primary.main,
        '& .MuiListItem-button': {
          backgroundColor: `${theme.palette.primary.main}1a`,
          boxShadow: 'rgb(4 17 29 / 5%) 0px 0px 8px 0px',
        },
        '& svg': {
          color: theme.palette.primary.main,
        },
        '& *': {
          fontWeight: 600,
        },
      },
      //   '&.hover': {
      //     '& .MuiListItem-button': {
      //       backgroundColor: theme.custom.borders,
      //       boxShadow: 'rgb(4 17 29 / 5%) 0px 0px 8px 0px',
      //     },
      //     '& svg': {
      //       color: theme.palette.primary.main,
      //     },
      //   },
    },
  },
  wishListTabs: {
    '& .MuiTabs-flexContainer': {
      justifyContent: 'center',
    },
  },
  ordersWrapper: {
    border: `1px solid ${theme.custom.backLightGrey}`,
    borderRadius: 10,
    padding: '1.5em',
    '&:not(:last-child)': {
      marginBottom: '1.5em',
    },
  },

  // ^ Table Properties
  tableHeadRow: {
    '& .MuiTableCell-head': {
      color: theme.palette.text.secondary,
      fontSize: '1rem',
    },
  },
  tableBodyRow: {
    '&.MuiTableRow-root.MuiTableRow-hover:hover': {
      cursor: 'pointer',
      backgroundColor: `${theme.palette.primary.main}0f`,
    },
  },
  chipCell: {
    '& .MuiChip-root': {
      minWidth: 100,
    },
  },
  orderItems: {
    display: 'flex',
    alignItems: 'center',
    margin: 6,
  },
  orderItemImage: {
    '&.MuiAvatar-root': {
      backgroundColor: 'transparent',
      width: 60,
      height: 60,
    },
  },
}));

export default styles;
