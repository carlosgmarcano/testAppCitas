import React from 'react';
import {ThemeProvider as MuiThemeProvider} from "@material-ui/core/styles";
import theme from "./theme/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppRouter from './routers/AppRouter';
import SectoresProvider from "./context/SectoresContext";
import Barra from './components/layout/Barra';


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <SectoresProvider>
          <Barra />
          <AppRouter />
        </SectoresProvider>
      </CssBaseline>
    </MuiThemeProvider>
  );
}

export default App;
