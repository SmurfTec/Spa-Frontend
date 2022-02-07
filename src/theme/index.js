/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyles from 'theme/GlobalStyles';
import breakpoints from './breakpoints';
import typography from 'theme/typography';
import palette from 'theme/palette';

const Theme = ({ children }) => {
  const themeOptions = useMemo(() => {
    return {
      palette,
      breakpoints,
      typography,
      custom: {
        customBlue: '#5da9dd',
        customYellow: '#ffbf2d',
        backDark: '#262626',
        white: '#fff',
        shadowOne: 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
        shadowTwo:
          'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
        cardShadow:
          'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
      },
      overrides: {
        MuiButton: {
          containedSecondary: {
            color: '#fff',
            fontWeight: 500,
          },
          contained: {
            backgroundColor: '#fff',
          },
          text: {
            boxShadow:
              '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
          },
        },
      },
    };
  }, []);

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
