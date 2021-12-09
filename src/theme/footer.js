import { createTheme } from '@mui/material/styles';

const footer = createTheme({
  palette: {
    primary: {
      main: '#27789A',
    },
  },
  typography: {
    fontFamily: 'Merienda',
    fontSize: 10,
    button: {
      fontSize: 14,
    },
  },
});

export default footer