import { makeStyles } from '@material-ui/styles';

const styles = makeStyles((theme) => ({
  productCard: {
    position: 'relative',
    borderRadius: 18,
    maxWidth: 210,
    margin: '0 auto',
    padding: '3px',

    [theme.breakpoints.down('sm')]: {
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

    // '& .MuiCardActionArea-root': {
    //   height: '100%',
    // },
    '& .MuiCardContent-root': {
      display: 'flex',
      height: 'calc(100% - 125px)',
      flexDirection: 'column',
      justifyContent: 'space-between',
      rowGap: 5,
      padding: '10px 8px',

      '& .MuiTypography-subtitle1': {
        fontWeight: 600,
      },
      '& .MuiTypography-caption': {
        fontSize: '0.65rem',
      },

      [theme.breakpoints.down('xs')]: {
        paddingInline: '1em',
      },
    },
  },
  title: {
    height: 35,
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
  },
  cardMedia: {
    height: 125,
  },
  favourite: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: `${theme.palette.error.main} !important`,
  },
  dispFlex: {
    display: 'flex',
    columnGap: 10,
    alignItems: 'center',
    '& .MuiRating-root': {
      fontSize: '0.95rem',
    },
    '& .MuiTypography-body2': {
      fontSize: '0.775rem',
      fontWeight: 500,
    },
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
