import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Container, Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Categories from './components/storefront/Categories';
import header from './theme/header.js';
import footer from './theme/footer.js';
import categories from './theme/categories.js';
import { connect } from 'react-redux';

function App(props) {
  return (
    <Container fixed sx={{ width: '2000px' }}>
      <ThemeProvider theme={header}>
        <Header />
      </ThemeProvider>
      <Box sx={{ bgcolor: '#FEF0FF', height: '800px' }}>
        <ThemeProvider theme={categories} >
          <Categories current={props} />
        </ThemeProvider>
      </Box>
      <ThemeProvider theme={footer}>
        <Footer />
      </ThemeProvider>
    </Container>
  );
}

//layers the state to props
const mapStateToProps = state => {
  return {
    category: state.category,
  }
}

// this allows actions to be pumped through our reducer.
const mapDispatchToProps = dispatch => ({
  active: (normalized) => dispatch({type: 'CHANGE_CATEGORY', payload: normalized})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
