import { makeStyles } from '@material-ui/styles';

const styles = makeStyles((theme) => ({
  productCard: {
    position: 'relative',
    borderRadius: 18,

    [theme.breakpoints.down('sm')]: {
      maxWidth: 265,
      margin: '0 auto',
    },

    // [theme.breakpoints.down('xs')]: {
    //   maxWidth: 265,
    //   margin: '0 auto',
    // },
    // '&:hover': {
    '& .MuiCardMedia-root': {
      borderBottomRightRadius: 19,
      borderBottomLeftRadius: 19,
      // transition: 'all 0.25s ease-in-out',
    },
    // },

    '& .MuiCardActionArea-root': {
      height: '100%',
    },
    '& .MuiCardContent-root': {
      display: 'flex',
      height: 'calc(100% - 135px)',
      flexDirection: 'column',
      justifyContent: 'space-between',
      rowGap: 5,

      '& .MuiTypography-subtitle1': {
        fontWeight: 600,
      },

      [theme.breakpoints.down('xs')]: {
        paddingInline: '1em',
      },
    },
  },
  cardMedia: {
    height: 135,
  },
  favourite: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: theme.palette.error.main,
  },
  dispFlex: {
    display: 'flex',
    columnGap: 10,
    alignItems: 'center',
  },
  servPricePromo: {
    '& .MuiTypography-subtitle1': {
      '& span': {
        paddingInline: 2,
        color: theme.palette.text.secondary,
        textDecoration: 'line-through',
      },
    },
  },
}));

export default styles;
