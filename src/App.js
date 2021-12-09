import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import { Container } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import menuTheme from './theme/menu.js'

function App() {
  return (
    <Container>
      <ThemeProvider theme={menuTheme}>
        <Header/>
        <Footer/>
      </ThemeProvider>
    </Container>
  );
}

export default App;
