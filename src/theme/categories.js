import { createTheme } from '@mui/material/styles';

const categories = createTheme({
  palette: {
    primary: {
      main: '#27789A',
    },
  },
  typography: {
    button:{
      fontFamily: 'Merienda',
      fontSize: 20,
    },
    fontFamily: 'Dosis',
    fontSize: 30,
  },
});

export default categories