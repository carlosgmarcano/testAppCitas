import React from 'react';
import style from '../../style/Style';
import { Link } from 'react-router-dom';
import { Container, Avatar, Typography, TextField, Button } from '@material-ui/core';
import HttpsIcon from '@material-ui/icons/Https';

const Login = () => {
    return (
        <Container maxWidth="xs">
            <div style={style.paper}>
                <Avatar style={style.avatar}>
                    <HttpsIcon style={style.icon}/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login de Usuario
                </Typography>
                <form>
                    <TextField color="primary" variant="filled" label="Ingrese UserName" name="username" fullWidth margin="normal"/>
                    <TextField color="primary" variant="filled" type="password" label="Password" name="password" fullWidth margin="normal"/>
                    <Button type="submit" fullWidth variant="contained" color="primary" style={style.submit}>Enviar</Button>
                    <Button component={Link} to="/Registrar" type="submit" fullWidth variant="contained" color="secundary" style={style.submit}>Registrarse</Button>
                </form>
            </div>
        </Container>
    );
};

export default Login;