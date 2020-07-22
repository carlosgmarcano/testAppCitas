import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#D50000",
            main: "#E55F16",
            dark: "#e5b676",
            contrastText: "#E55F16",
        },
        secundary: {
            light: "#D50000",
            main: "#E55F16",
            dark: "#e5b676",
            contrastText: "#E55F16",
        },
        background: {
            default: "#050507",
            paper: "#768389"
        },
        typography: {
            fontFamily: [
                '"OpenSans-Regular"',
                '"OpenSans-Bold"',
                '"OpenSans-Light"',
            ].join(','),
        },
    },
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },

}
);

export default theme;