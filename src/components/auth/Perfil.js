import React from 'react';
import style from '../../style/Style';
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core';
const Perfil = () => {
    return (
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <Typography component="h1" variant="h5">
                    Perfil de Usuario
                </Typography>
            </div>
            <form style={style.form}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField name="nombreCompleto" variant="outlined" fullWidth label ="Ingrese Nombre y Apellido" ></TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField name="email" variant="outlined" fullWidth label ="Ingrese Email" ></TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField name="password" variant="outlined" fullWidth label ="Ingrese PassWord" ></TextField>
                    </Grid>
                </Grid>
                <Grid container justify ="center">
                    <Grid item xs={12} md={6}>
                        <Button type="submit" fullWidth variant="contained" size="large" color="primary" style={style.submit}>
                            Guardar Datos
                        </Button>
                    </Grid>
                </Grid>

            </form>
        </Container>
    );
};

export default Perfil;