import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper1: '#5b5b5b',
      btnDisabled: '#383838',
      editing: '#48421f',
    },
  },
});

export const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper1: '#e5e5e5',
      btnDisabled: '#bd9d9d',
      editing: '#f6ec59',
    },
    primary: {
      main: '#2b583b',
    },
    secondary: {
      main: '#e16e0e  ',
    },
    text: {
      primary: '#1f1f1f',
      secondary: '#3a2e2e',
    },
  },
});
