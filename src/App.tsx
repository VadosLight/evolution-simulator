import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { thunkIterateWorld } from 'redux/reducers/world';
import { Welcome } from './pages/Welcome/Welcome';
import { Simulation } from './pages/Simulation/Simulation';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      dispatch(thunkIterateWorld());
    }, 1000);
  }, []);

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
