import React from 'react';
import { render } from 'react-dom';
import { AppContainer as HotLoaderContainer } from 'react-hot-loader';
import AppContainer from '../common/AppContainer';
import createStore from '../common/store';

const store = createStore(__INITIAL_STATE__); // eslint-disable-line no-undef

render(
  <HotLoaderContainer>
    <AppContainer store={store} />
  </HotLoaderContainer>,
  document.getElementById('root'),
);

if (module.hot) {
    console.log("hot!!!")
  module.hot.accept(() => {
    render(
      <HotLoaderContainer>
        <AppContainer store={store} />
      </HotLoaderContainer>,
      document.getElementById('root'),
    );
  });
}
