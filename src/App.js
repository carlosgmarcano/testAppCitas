import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppRouter from './components/AppRouter';
import { Layout } from './components/layout';
import { GlobalStateProvider } from './store';
import theme from './theme/theme';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <GlobalStateProvider>
        <Layout>
          <AppRouter></AppRouter>
        </Layout>
      </GlobalStateProvider>
    </CssBaseline>
  </MuiThemeProvider>
);

export default App;
