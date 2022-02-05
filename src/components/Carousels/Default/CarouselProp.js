import { makeStyles } from '@material-ui/styles';

export const styles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    position: 'relative',
    '& .react-multi-carousel-list': {
      position: 'unset',
    },
    '& .react-multiple-carousel__arrow::before': {
      color: theme.palette.secondary.light,
      fontWeight: 700,
      marginLeft: '0',
    },

    '& .react-multiple-carousel__arrow': {
      backgroundColor: theme.custom.white,
      borderRadius: '50%',
      opacity: 0.6,
      boxShadow: theme.custom.shadowOne,
      // boxShadow: 'rgb(0 0 0 / 15%) 2.4px 2.4px 3.2px',
      [theme.breakpoints.down('xs')]: {
        opacity: 1,
      },

      '&:hover': {
        opacity: 1,
      },
    },
    '& .react-multiple-carousel__arrow--right ': {
      right: -45,
      [theme.breakpoints.down('xs')]: {
        right: -18,
      },
    },
    '& .react-multiple-carousel__arrow--left': {
      left: -45,
      [theme.breakpoints.down('xs')]: {
        left: -18,
      },
    },
    '& .carousel-container': {
      //  margin: '0 1rem',
    },
  },
}));
