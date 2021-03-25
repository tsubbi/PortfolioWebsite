// library
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// framework
import { Container, Grid } from '@material-ui/core';
// components
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// content pages
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import About from './pages/About/About';
// css
import './css/style.css';

function App() {
  return (
    <Container>
      {/* left container */}
      <Grid container>
        {/* 
          sx: extra-small(mobile)
          sm: small(tablet)
          md: medium(1440px)
          lg: large(1920px)
        */}
        <Grid item sx={12} sm={12} md={4} lg={3} style={{backgroundColor: 'tomato'}}>
          <Profile />
        </Grid>
        {/* right container */}
        <Grid item xs style={{backgroundColor: 'seagreen'}}>
          <Header />
          <Router>
            <Switch>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              {/* Default */}
              <Route path="/">
                <About />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
