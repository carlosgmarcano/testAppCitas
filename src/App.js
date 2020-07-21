import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppRouter from './components/AppRouter';
import {Layout} from './components/layout';
import { GlobalStateProvider } from './store';
import theme from './theme/theme';
import SectoresProvider from './components/context/SectoresContext';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
    <SectoresProvider>
     <Layout>
          <AppRouter></AppRouter>
        </Layout>
    </SectoresProvider>
    </CssBaseline>
  </MuiThemeProvider>
);

export default App;