import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SearchBar from './SearchBar';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {},
  footer: {
    marginTop: 'auto',
  },
}));

export const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header>
        <SearchBar></SearchBar>
      </header>
      <BrowserRouter>
        <Container component="main" className={classes.main} maxWidth="lg">
          <main>{children}</main>
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
