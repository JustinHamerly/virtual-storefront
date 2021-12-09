import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import { Container, Grid, Card, Button, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import menuTheme from './theme/menu.js'
import { connect } from 'react-redux';

function App(props) {
  console.log(props);
  return (
    <Container>
      <ThemeProvider theme={menuTheme}>
        <Header/>
          <div className="App">
            <Grid sx={{ margin: '50px 0px 0px 0px',}} justifyContent="center" container spacing={1}>
              
              {props.category.categories.map((category, idx) => {
                return (
                  <Grid key={idx} item>
                    <Card>
                      <Button onClick={() => {
                        props.active(category.normalized);
                      }}>Shop {category.name}!</Button>
                    </Card>
                  </Grid >
                )
              })}
            </Grid>
            <Card>
              <Button onClick={() => {
                props.reset();
              }}>Reset Votes</Button>
            </Card>
          </div>
        <Footer/>
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
  active: (normalized) => dispatch({type: 'CHANGE_CATEGORY', payload: normalized}),
  reset: () => dispatch({ type: 'RESET_CATEGORY' })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
