import React from 'react';
import { render } from 'react-dom';
import { AppContainer as HotLoaderContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from '../common/AppContainer';
import createStore from '../common/store';

const store = createStore(__INITIAL_STATE__); // eslint-disable-line no-undef

render(
  <HotLoaderContainer>
    <BrowserRouter>
      <AppContainer store={store} />
    </BrowserRouter>
  </HotLoaderContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('../common/AppContainer', () => {
    render(
      <HotLoaderContainer>
        <BrowserRouter>
          <AppContainer store={store} />
        </BrowserRouter>
      </HotLoaderContainer>,
      document.getElementById('root'),
    );
  });
}
