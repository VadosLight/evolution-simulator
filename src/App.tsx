import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Welcome } from './pages/Welcome/Welcome';
import { Simulation } from './pages/Simulation/Simulation';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/simulation' component={Simulation} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
