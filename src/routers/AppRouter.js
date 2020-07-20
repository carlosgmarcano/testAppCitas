import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Sector } from "../components/Sector";
import { Navbar } from "../components/layout/Navbar";
import RegistrarUsuario from "../components/auth/Registrar";
import Login from "../components/auth/Login";
import { Empresa } from "../components/Empresa";
import { Agencia } from "../components/Agencia";
import Favoritos from "../components/Favoritos";
import Calendario from "../components/Calendario";

import { Divider } from "@material-ui/core";

const AppRouter = () => {
    return (
        <Router>
        <Switch>
            <Route exact path = "/" component={Sector} />
            <Route exact path = "/Empresa" component={Empresa} />
            <Route exact path = "/Agencia" component={Agencia} />
            <Route exact path = "/Registrar" component={RegistrarUsuario} />
            <Route exact path = "/Favoritos" component={Favoritos} /> 
            <Route exact path = "/Calendario" component={Calendario} /> 
            <Route exact path = "/Login" component={Login} /> 
        </Switch>
        <Divider color="primary" />
        <Navbar></Navbar>
    </Router>
);
}

export default AppRouter;