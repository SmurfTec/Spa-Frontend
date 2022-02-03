import { makeStyles } from '@material-ui/core';
const bgImg =
  'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

const styles = makeStyles((theme) => ({
  linkHover: {
    '& a::after': {
      content: '""',
      display: 'block',
      width: 0,
      height: 1,
      background: theme.custom.white,
      transition: 'width .5s',
    },

    '& a:hover::after': {
      width: '100%',
      //transition: width .3s;
    },
  },

  sectionFlex: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1em',
  },

  sectionGap: {
    marginBottom: '2em',
  },
  subHeading: {
    maxWidth: 500,
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: '55%',
    },
  },

  //  ^  Service Promo Carousel Styles
  Carousel: {
    '& img': {
      height: 180,
      objectFit: 'cover',
    },

    '& .carousel .slide .legend': {
      opacity: 1,
      top: 0,
      background: 'transparent',
      bottom: 0,
      textAlign: 'left',
      paddingBlock: 15,
      '& p': {
        fontWeight: 300,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
      },
    },
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    columnGap: '9rem',
    height: '100%',
    '& h5': {
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem',
      },
    },
    '& .MuiBox-root': {
      '& div:last-child::before': {
        marginTop: 'auto',
      },
    },

    '& a': {
      color: '#fff',
      textDecoration: 'underline',
      fontSize: '1rem',
      cursor: 'pointer',
      '&:hover': {
        color: '#00d',
      },
    },
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: `#0000007d`,
  },

  // ^ Vendors Carousel
  carouselDefaults: {
    width: '85%',
    margin: 'auto',
  },

  carouselItem: {
    display: 'block',
    padding: 10,
    height: '100%',
    '& .MuiPaper-root': {
      boxShadow: theme.custom.cardShadow,
      height: '100%',
    },
  },
  sectionLink: {
    textAlign: 'center',
    fontWeight: 500,
    '& a': {
      color: theme.palette.primary.main,
      fontSize: '1.1rem',
    },
  },
  secBackImage: {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 520,
    width: '100%',
  },

  // ^ Offers section
}));

export default styles;

// For line trimming after certan characters
// overflow: 'hidden',
// display: '-webkit-box',
// WebkitLineClamp: 2,
// WebkitBoxOrient: 'vertical',
