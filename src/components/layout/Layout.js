import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import CarouselSlide from './CarouselSlide';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: '1 0 auto',
  },
  footer: {
    flexShrink: '0',
  },
}));

export const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header>
        <div>
          <SearchBar></SearchBar>
        </div>
        <div>
          <CarouselSlide
            next={(next, active) =>
              console.log(`we left ${active}, and are now at ${next}`)
            }
            prev={(prev, active) =>
              console.log(`we left ${active}, and are now at ${prev}`)
            }
          ></CarouselSlide>
        </div>
      </header>
      <BrowserRouter>
        <Container component="main" className={classes.main} maxWidth="lg">
          {children}
        </Container>
        <footer className={classes.footer}>
          <Container maxWidth="md">
            <nav>
              <Navbar></Navbar>
            </nav>
          </Container>
        </footer>
      </BrowserRouter>
    </div>
  );
};
