import React from 'react';
import { Switch, Route } from 'react-router';
import routes from '../routes';

const App = () => (
  <Switch>
    {routes.map(route => <Route {...route} />)}
  </Switch>
);

export default App;
