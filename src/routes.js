import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import history from "./services/history";

import Extrato from './pages/Extrato';
import Darf from './pages/Darf';
import Posicao from './pages/Posicao';
import Login from './pages/Login';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/" exact component={Posicao} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/operations" component={Extrato} />
        <PrivateRoute path="/darf" component={Darf} />
      </Switch>
    </Router>
  );
}