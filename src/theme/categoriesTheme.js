import { createTheme } from '@mui/material/styles';

const categories = createTheme({
  palette: {
    primary: {
      main: '#27789A',
      active: '#FFFFFF'
    },
  },
  typography: {
    fontFamily: 'Merienda',
    fontSize: 15,
  },
});

export default categories