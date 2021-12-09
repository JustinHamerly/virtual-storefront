import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Container } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Categories from './components/storefront/Categories';
import menuTheme from './theme/menu.js'
import { connect } from 'react-redux';

function App(props) {
  return (
    <Container>
      <ThemeProvider theme={menuTheme}>
        <Header />
        <Categories current={props} />
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
