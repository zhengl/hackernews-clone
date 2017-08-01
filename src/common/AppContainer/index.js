import React from 'react';
import { object } from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from '../router';

const AppContainer = ({ store }) => (
  <Provider store={store}>
    <Router />
  </Provider>
);

AppContainer.propTypes = {
  store: object.isRequired,
};

export default AppContainer;
