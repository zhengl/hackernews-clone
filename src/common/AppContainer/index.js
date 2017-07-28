import React from 'react';
import { object } from 'prop-types';
import { Provider } from 'react-redux';
import App from '../App';

const AppContainer = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppContainer.propTypes = {
  store: object.isRequired,
};

export default AppContainer;
