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
    },
    '& a': {
      color: theme.custom.white,
      verticalAlign: 'middle',
      // '&.active': {
      // color: theme.palette.primary.main,
      // },
    },
    columnGap: 20,
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
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      columnGap: '2.5em',
    },
  },

  sectionMobile: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    [theme.breakpoints.up('md')]: {
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
  },
  drawerPaper: {
    width: drawerWidth,
  },
  list: {
    '& a': {
      color: theme.palette.text.primary,
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
