import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Extrato from './pages/Extrato';
import Darf from './pages/Darf';
import Posicao from './pages/Posicao';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Posicao} />
        <Route path="/operations" component={Extrato} />
        <Route path="/darf" component={Darf} />
      </Switch>
    </BrowserRouter>
  );
}