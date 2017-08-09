import React from 'react';
import { object } from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router';
import Header from '../Header';
import routes from '../routes';

import './normalize';

const AppContainer = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <Switch>
          { routes.map(route => <Route key={route.path} {...route} />) }
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

AppContainer.propTypes = {
  store: object.isRequired,
  history: object.isRequired,
};

export default AppContainer;
