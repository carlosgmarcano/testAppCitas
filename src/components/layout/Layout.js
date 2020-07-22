import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import CarouselSlide from './CarouselSlide';
import Copyright from './Copyright';
import { Divider } from '@material-ui/core';

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
  divider: {
    margin: "auto",
    backgroundColor: theme.palette.primary.main
  }
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
          <Divider className={classes.divider} />
          <Container maxWidth="md">
            <nav>
              <Navbar></Navbar>
            </nav>
            <Copyright />
          </Container>
        </footer>
      </BrowserRouter>
    </div>
  );
};
