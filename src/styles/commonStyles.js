import { makeStyles } from '@material-ui/core';
import patternImg from 'assets/bg1.svg';

const bgImg =
  'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

const styles = makeStyles((theme) => ({
  lightText: {
    fontWeight: 400,
  },
  // cursorPointer: { cursor: 'pointer' },
  // check it already exists but to be managed by 2 components
  // fix to one className

  linkHover: {
    '& a::after': {
      content: '""',
      display: 'block',
      width: 0,
      height: 1,
      background: theme.custom.white,
      transition: 'width .5s',
    },

    '& a:hover::after, a.active::after': {
      width: '100%',
    },
  },

  customGreyBack: {
    backgroundColor: theme.custom.backLightGrey,
  },

  boxBorder: {
    border: `1px solid ${theme.custom.backLightGrey}`,
  },

  fontWeight600: {
    fontWeight: 600,
  },

  linkUnderline: {
    '& a': {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },

  textWithlink: {
    display: 'flex',
    alignItems: 'center',
    '& a': {
      verticalAlign: 'unset',
      color: theme.palette.text.secondary,
      textDecoration: 'underline',

      '&:hover': {
        color: theme.palette.primary.main,
        transition: 'color 0.5s ease-out',
      },
    },
  },

  lghtPinkInpField: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: `${theme.palette.secondary.main}1f`,
      borderRadius: 12,
      '& > *:last-child': {
        borderWidth: '0',
      },
    },
    '& .MuiOutlinedInput-colorSecondary.Mui-focused .MuiOutlinedInput-notchedOutline':
      {
        borderWidth: 1,
        borderRadius: 12,
      },
  },

  sectionFlex: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1em',
  },

  componentSectionGap: {
    width: '80%',
    marginInline: 'auto',
    maxWidth: 1200,

    [theme.breakpoints.down('sm')]: {
      width: '85%',
    },
    '& > *:first-child': {
      marginTop: '1.5em',
    },

    '& > *': {
      marginBottom: '1.5em',
    },

    '& > *:last-child': {
      marginBottom: '2em',
    },
  },

  smallOutletGap: {
    marginBlock: '4em',
  },

  sectionGap: {
    marginBottom: '2em',
  },
  homesectionGap: {
    paddingBlock: '1.5em',
  },
  sectHorAlignment: {
    width: '80%',
    marginInline: 'auto',
    maxWidth: 1200,

    [theme.breakpoints.down('sm')]: {
      width: '85%',
    },
  },
  subHeading: {
    maxWidth: 500,
    margin: 'auto !important',
    [theme.breakpoints.up('sm')]: {
      width: '55%',
    },
  },

  //  ^  Service Promo Carousel Styles
  Carousel: {
    '& img': {
      height: 200,
      objectFit: 'cover',
    },

    '& .carousel .slide .legend': {
      opacity: 1,
      top: 0,
      background: 'transparent',
      bottom: 0,
      textAlign: 'left',
      paddingBlock: 10,

      '& .MuiTypography-body2': {
        lineHeight: '1.4',
      },

      [theme.breakpoints.up('md')]: {
        maxWidth: 600,
        paddingInline: '6rem',
      },

      [theme.breakpoints.down('md')]: {
        maxWidth: 600,
        paddingInline: '6rem',
      },
      [theme.breakpoints.down('sm')]: {
        // maxWidth: 700,
        width: '50%',
        paddingInline: '1rem',
      },

      [theme.breakpoints.down('xs')]: {
        width: '90%',
        paddingInline: '1rem',
      },

      '& p': {
        fontWeight: 300,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
      },
    },

    '& .carousel .slide': {
      '& .carouselMini': {
        '&  .legend': {
          paddingBlock: 12,
          // '& > div': {
          //   justifyContent: 'unset',
          // },
          '& p': {
            WebkitLineClamp: 3,
          },
        },
        '& img': {
          height: 176,
        },
      },
      '& .rndCornCarsl .legend': {
        borderTopRightRadius: 14,
        borderBottomRightRadius: 14,
        overflow: 'hidden',
      },
    },
    '& > .carousel .slider-wrapper > ul > li': {
      zIndex: '0 !important',
    },
  },

  contentContainer: {
    // width: '60%',
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'baseline',

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
    width: '80%',
    marginInline: 'auto',
    // [theme.breakpoints.down('xs')]: {
    //   width: '85%',
    // },
  },

  carouselItem: {
    display: 'block',
    height: '100%',
    // minHeight: 225,
    // padding: 10,
    padding: 7,
    '& .MuiPaper-root': {
      boxShadow: theme.custom.cardShadow,
      height: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      paddingInline: '0.5em',
      maxWidth: 265,
      margin: '0 auto',
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
    width: '100%',

    [theme.breakpoints.up('sm')]: {
      height: 520,
    },

    // [theme.breakpoints.down('sm')]: {},
  },

  // ^ Table Card Styles

  tableContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '2em',
    // columnGap: '2em',

    '& .MuiCard-root': {
      marginBottom: 0,
      // minWidth: 200,
    },
  },
  //not used
  tableCardsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    columnGap: '1em',
    rowGap: '1em',
    // '& .productCard': {
    //   minWidth: 200,
    // },
  },

  gridContainer: {
    display: 'grid',
    gridRowGap: 15,
  },

  gridContainerFill: {
    // marginBlock: '1em',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    // [theme.breakpoints.up('md')]: {
    //   gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    // },

    // [theme.breakpoints.down('md')]: {
    //   gridTemplateColumns: 'repeat(4,  minmax(200px, 1fr))',
    // },
  },

  // not used
  gridContainerFit: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  },

  gridElement: {
    padding: 5,
    // minWidth: 220,
    '& > div': {
      height: '100%',
      // maxWidth: 200,
    },
  },
  tablePagination: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: '1em',
    },
    '& > :first-child': {
      paddingInline: '1em',
      fontWeight: 500,
    },

    '& .MuiPagination-root': {
      width: 'fit-content',
      // '& .MuiPagination-ul button:not(.Mui-selected)':
      //   {
      //     backgroundColor: '#000',
      //   },
    },
  },
  // customTextField: {
  //   '& .MuiOutlinedInput-input': {
  //     backgroundColor: theme.custom.backLightGrey,
  //     color: '#000',
  //   },
  // },

  avatar: {
    backgroundColor: 'transparent',
  },
  tabButtons: {
    display: 'flex',
    gap: 15,
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > .MuiButton-root': {
      minWidth: 120,
    },
  },
  customBoxShadow: {
    boxShadow: theme.custom.cardShadow,
  },
  tabs: {
    '& .MuiTab-root': {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#000',
      opacity: 1,
    },
    '& .MuiTabs-flexContainer': {
      gap: 15,
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
      },
    },
  },

  // ^ Back Pattern
  backWrapper: {
    maxHeight: '100%',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',

    '& .overlay': {
      width: '100%',
      height: '100%',
      background: `url(${patternImg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity: 0.2,
    },
  },
}));

export default styles;

// For line trimming after certan characters
// overflow: 'hidden',
// display: '-webkit-box',
// WebkitLineClamp: 2,
// WebkitBoxOrient: 'vertical',
