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
  },
});

export default categories