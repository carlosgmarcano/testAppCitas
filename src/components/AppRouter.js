import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Calendario, Favoritos, Perfil, Home } from './';

export const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Calendario" component={Calendario} />
    <Route exact path="/Favoritos" component={Favoritos} />
    <Route exact path="/Perfil" component={Perfil} />
  </Switch>
);
