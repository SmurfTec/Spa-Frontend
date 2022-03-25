import { makeStyles } from '@material-ui/core';

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiPaper-root': {
      boxShadow: 'none',
      borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
      // boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
    },

    '& .MuiBadge-badge': {
      backgroundColor: '#fff',
    },

    '& h4': {
      alignSelf: 'start',
    },
  },
  Appbar: {
    backgroundColor: theme.custom.darkFore,
    '& .MuiToolbar-regular': {
      alignItems: 'center',
      justifyContent: 'space-between',
      columnGap: '2.5em',
      margin: '0rem 2rem 0rem',
    },
    '& a': {
      color: theme.custom.white,
      verticalAlign: 'middle',
      // '&.active': {
      // color: theme.palette.primary.main,
      // },
    },
    columnGap: 10,
    [theme.breakpoints.up('lg')]: {
      '& .MuiToolbar-regular': {
        margin: '0rem 8rem 0rem',
      },
    },
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 15,
    '& a::after': {
      content: '""',
      display: 'block',
      width: 0,
      height: 1,
      background: theme.custom.white,
      transition: 'width .5s',
    },
    '& a:hover::after, & a.active::after': {
      width: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      columnGap: 30,
    },
  },

  navFixed: {
    paddingTop: 64,
    [theme.breakpoints.down('xs')]: {
      paddingTop: 57,
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    cursor: 'pointer',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  darkBtn: {
    overflow: 'unset !important',
    '&button': {},
  },
  customNavBtn: {
    '&.MuiButton-containedSizeSmall': {
      color: theme.palette.primary.main,
      fontWeight: 500,
      transition: '0.6s',
      backgroundColor: theme.custom.white,
    },
  },

  navBtn: {
    minWidth: 80,
    height: 'fit-content',
    width: 'max-content',
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up(1015)]: {
      display: 'flex',
      alignItems: 'center',
      columnGap: '2.5em',
    },
  },

  sectionMobile: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    [theme.breakpoints.up(1015)]: {
      display: 'none',
    },
  },
  MobileMenu: {
    height: 500,
  },
  SearchBar: {
    '&.MuiPaper-root': {
      boxShadow: 'none',
    },
  },
  navLink: {
    '&.active': {
      color: theme.palette.primary.main,
    },
    '& svg': {
      color: theme.palette.primary.main,
    },
  },

  navSearch: {
    columnGap: 30,
    maxWidth: 550,
    flex: 2,
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    // backgroundColor: theme.palette.primary.main,
  },
  drawerPaper: {
    width: drawerWidth,
    // backgroundColor: theme.palette.primary.main,

    '& > :first-child': {
      backgroundColor: theme.palette.primary.main,
      padding: '1em 1em',
    },
    '& .MuiIconButton-root': {
      border: '1px solid #fff',
      '& svg': {
        color: '#fff',
      },
    },
  },
  drawerList: {
    '& a': {
      color: theme.palette.text.primary,

      '& .MuiTypography-subtitle1::after': {
        content: '""',
        display: 'block',
        width: 0,
        height: 1,
        background: '#000',
        transition: 'width .5s',
      },
      '&.active,:hover': {
        '& h6::after': {
          width: '100%',
        },
      },
      '& .MuiListItem-root': {
        columnGap: '1.4em',
      },

      // borderLeft: `3px solid ${theme.palette.primary.main}`,
    },
  },
}));

export default useStyles;

// export const NavLink = styled(({ theme }) => ({
//   color: theme.palette.primary.main,
//   display: 'flex',
//   alignItems: 'center',
//   textDecoration: 'none',
//   padding: '0 1rem',
//   height: '100%',
//   cursor: 'pointer',
//   // '&.active': {
//   //   color: '#15cdfc',
//   // },
// }));
