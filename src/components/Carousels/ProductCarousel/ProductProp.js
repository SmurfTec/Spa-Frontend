import { makeStyles } from '@material-ui/styles';

const styles = makeStyles((theme) => ({
  productCard: {
    position: 'relative',
    borderRadius: 18,
    // '&:hover': {
    '& .MuiCardMedia-root': {
      borderBottomRightRadius: 19,
      borderBottomLeftRadius: 19,
      // transition: 'all 0.25s ease-in-out',
    },
    // },
    '& .MuiCardContent-root': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      rowGap: 10,
      '& .MuiTypography-subtitle2': {
        fontWeight: 600,
        height: 44,
      },
      [theme.breakpoints.down('xs')]: {
        paddingInline: '2.5em',
      },
    },
  },
  cardMedia: {
    height: 150,
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
}));

export default styles;
