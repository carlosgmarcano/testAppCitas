import React from 'react'
import PropTypes from 'prop-types'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import style from '../../style/Style'

const RegistrarUsuario = props => {
    return (
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <Typography component="h1" color="primary" variant="h5">
                    Registro de Usuario
                </Typography>
                <form style={style.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField name="nombre"  style={style.textField} variant="filled" fullWidth label="Ingrese su Nombre"/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="apellido" style={style.textField} variant="filled" fullWidth label="Ingrese su Apellido" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="email" style={style.textField} type="email" variant="filled" fullWidth label="Ingrese su Correo" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="password" type="password" style={style.textField} variant="filled" fullWidth label="Ingrese su Contraseña" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="confirPassword" type="password" style={style.textField} variant="filled" fullWidth label="Confirmar su Contraseña" />
                        </Grid>
                        <Grid container justify="center">
                            <Grid item xs={12} md={6}>
                                <Button type="submit" fullWidth variant="contained" color="primary" size="large" style={style.submit}>
                                    Enviar
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

RegistrarUsuario.propTypes = {

}

export default RegistrarUsuario
