import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 0,
        backgroundColor: theme.palette.background.default,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Copyright() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar color="secundary.main">
                    <Typography variant="caption" className={classes.title}>
                        Copyright MEMO. Todos los derechos reservados
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
                        <FacebookIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}