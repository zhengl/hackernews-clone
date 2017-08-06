import React from 'react';
import { render } from 'react-dom';
import { AppContainer as HotLoaderContainer } from 'react-hot-loader';
import AppContainer from '../common/AppContainer';
import createStore from '../common/store';
import createHistory from '../common/router/createHistory';

const { pathname } = __INITIAL_STATE__.router.location; // eslint-disable-line no-undef
const history = createHistory(pathname);
const store = createStore(__INITIAL_STATE__, history); // eslint-disable-line no-undef

function renderApplication() {
  render(
    <HotLoaderContainer>
      <AppContainer store={store} history={history} />
    </HotLoaderContainer>,
    document.getElementById('root'),
  );
}

renderApplication();

if (module.hot) {
  module.hot.accept(renderApplication);
}
