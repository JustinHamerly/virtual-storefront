import { createTheme } from '@mui/material/styles';

const menuTheme = createTheme({
  palette: {
    primary: {
      main: '#27789A',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: 'Merienda',
  },
});

export default menuTheme;