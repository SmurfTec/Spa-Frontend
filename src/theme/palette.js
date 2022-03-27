const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
};
const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
};

const palette = {
  type: 'light',
  primary: {
    main: '#67000e',
  },
  text: {
    primary: '#000',
    // secondary: '#62646a',
    // disabled: '#637381',
  },
  secondary: { main: '#ff679b', light: '#e39b9e' },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  info: { ...INFO },
};

export default palette;
