import React from 'react';
import { object } from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router';
import routes from '../routes';

const AppContainer = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        { routes.map(route => <Route key={route.path} {...route} />) }
      </Switch>
    </ConnectedRouter>
  </Provider>
);

AppContainer.propTypes = {
  store: object.isRequired,
  history: object.isRequired,
};

export default AppContainer;
