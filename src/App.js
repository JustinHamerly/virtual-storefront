import './App.css';
import { Container, Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Categories from './components/storefront/Categories';
import Products from './components/storefront/Products';

import header from './theme/headerTheme.js';
import footer from './theme/footerTheme.js';
import categories from './theme/categoriesTheme.js';
import products from './theme/productsTheme.js';

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
        <ThemeProvider theme={products} >
          <Products current={props} />
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
  console.log(state);
  return {
    category: state.category,
    product: state.product,
  }
}

// this allows actions to be pumped through our reducer.
const mapDispatchToProps = dispatch => ({
  changeCategory: (activeCategory) => dispatch({type: 'CHANGE_CATEGORY', payload: activeCategory}),
  changeProducts: (category) => dispatch({type: 'CHANGE_PRODUCTS', payload: category}),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
