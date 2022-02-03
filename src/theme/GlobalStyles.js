import { withStyles } from '@material-ui/styles';

const GlobalStyles = withStyles((theme) => ({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },

    html: {
      width: '100%',
      height: '100%',
      '-ms-text-size-adjust': '100%',
      '-webkit-overflow-scrolling': 'touch',
    },
    '#logo': {
      '& a': {
        textDecoration: 'none',
        color: '#fff',
      },
    },
    body: {
      width: '100%',
      height: '100%',
    },
    '#root': {
      width: '100%',
      height: '100%',
      overflowY: 'auto',
    },
    input: {
      '&[type=number]': {
        MozAppearance: 'textfield',
        '&::-webkit-outer-spin-button': {
          margin: 0,
          WebkitAppearance: 'none',
        },
        '&::-webkit-inner-spin-button': {
          margin: 0,
          WebkitAppearance: 'none',
        },
      },
    },
    textarea: {
      '&::-webkit-input-placeholder': {
        color: theme.palette.text.disabled,
      },
      '&::-moz-placeholder': {
        opacity: 1,
        color: theme.palette.text.disabled,
      },
      '&:-ms-input-placeholder': {
        color: theme.palette.text.disabled,
      },
      '&::placeholder': { color: theme.palette.text.disabled },
    },
    a: {
      // color: theme.palette.primary.dark,
      textDecoration: 'none',
      verticalAlign: '-webkit-baseline-middle',
    },
  },
}))(() => null);

export default GlobalStyles;
