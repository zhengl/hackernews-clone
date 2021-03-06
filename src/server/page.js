import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import fetchData from 'fetch';
import AppContainer from '../common/AppContainer';
import createStore from '../common/store';
import createHistory from '../common/router/createHistory';
import routes from '../common/routes';

const basePath = process.env.SCRIPT_BASE_PATH;

function renderApplication(store, history) {
  const sheet = new ServerStyleSheet();
  const application = renderToString(sheet.collectStyles(
    <AppContainer store={store} history={history} />,
  ));
  return {
    application,
    styles: sheet.getStyleTags(),
  };
}

function renderHtml(styles, application, initialState) {
  return `<!doctype html>
  <html class="no-js" lang="">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Hacker News</title>
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      ${styles}
    </head>
    <body>
      <div id="root">${application}</div>
      <script type="text/javascript">
        var __INITIAL_STATE__ = ${JSON.stringify(initialState)}
      </script>
      <script src="${basePath}index.js"></script>
    </body>
  </html>`;
}

export default async (ctx) => {
  const history = createHistory(ctx.url);
  const store = createStore({}, history);
  await fetchData(ctx.url, routes, store.dispatch);
  const { application, styles } = renderApplication(store, history);
  const html = renderHtml(styles, application, store.getState());

  ctx.body = html;
};
