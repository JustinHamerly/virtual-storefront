import { createTheme } from '@mui/material/styles';

const products = createTheme({
  palette: {
    primary: {
      main: '#27789A',
    },
  },
  typography: {
    button:{
      fontFamily: 'Dosis',
      fontSize: 20,
    },
    fontFamily: 'Dosis',
    fontSize: 15,
    variant:{
      h6: { fontSize: 10 }
    }
  },

});

export default products;
