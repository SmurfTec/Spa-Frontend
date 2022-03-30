import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import clsx from 'clsx';
import Search from '@material-ui/icons/Search';
import { useTextInput, useToggleInput } from 'hooks';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useThemeContext } from 'Components/theme';

const useStyles = makeStyles((theme) => ({
  container: {
    cursor: 'text',
    display: 'flex',
    borderRadius: 10,
    padding: '6px 12px',
    backgroundColor: theme.palette.secondary.main,

    '& input': {
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      width: '100%',
      color: '#fff',
      fontSize: '0.95rem',

      '&::placeholder': {
        color: theme.custom.white,
      },
    },
    '& svg': {
      color: theme.palette.primary.main,
      fontSize: '1.55rem',
    },
  },
  hoverStyles: {
    boxShadow: `${theme.palette.secondary.main}73 0px 0px 10px 0px`,
    backgroundColor: theme.custom.borders,
  },

  searchIcon: {
    display: 'flex',
    marginRight: 12,
    padding: 7,
    background: '#fff',
    borderRadius: 19,
  },
}));

export default function CustomizedInputBase({ placeholder, submitForm }) {
  const classes = useStyles();
  const [search, handleChange] = useTextInput('');
  const [hover, handleHover] = useToggleInput(false);

  const navigate = useNavigate();
  const location = useLocation();

  const searchResults = (e) => {
    e.preventDefault();

    // * if search is empty , navigate to '/' from '/search='blabla'
    if (!search) navigate(location.pathname);
    else submitForm(search);
    // * navigate to '/' from '/search='blabla'
  };

  return (
    <>
      <form onSubmit={searchResults}>
        <div
          className={clsx(classes.container, {
            [classes.hoverStyles]: hover,
          })}
          // className={`${classes.container} ${hover && classes.hoverStyles}`}
        >
          <div className={classes.searchIcon}>
            <Search fontSize='small' />
          </div>
          <input
            aria-invalid='false'
            aria-autocomplete='list'
            aria-controls='NavSearch--results'
            placeholder={placeholder}
            type='search'
            value={search}
            onFocus={() => handleHover((st) => !st)}
            onBlur={() => handleHover((st) => !st)}
            onChange={handleChange}
            style={{ cursor: 'text' }}
          />
        </div>
      </form>
    </>
  );
}
