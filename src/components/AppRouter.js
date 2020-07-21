import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Calendario, Favoritos, Home } from '.';
import Login from './auth/Login'


const AppRouter = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Calendario" component={Calendario} />
        <Route exact path="/Favoritos" component={Favoritos} />
        <Route exact path="/Login" component={Login} />
    </Switch>
);

export default AppRouter;