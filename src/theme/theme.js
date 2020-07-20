import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#D50000',
      main: '#E55F16',
      dark: '#e5b676',
      contrastText: 'white',
    },
    background: {
      default: '#FFFFFF',
    },
    input: {
      color: '#1976d2',
    },
  },
  textField: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  typography: {
    fontFamily: [
      '"OpenSans-Regular"',
      '"OpenSans-Bold"',
      '"OpenSans-Light"',
    ].join(','),
  },
});

export default theme;
