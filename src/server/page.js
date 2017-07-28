import React from 'react';
import { renderToString } from 'react-dom/server';
import { trigger } from 'redial';
import { ServerStyleSheet } from 'styled-components';
import { StaticRouter } from 'react-router';
import { matchPath } from 'react-router-dom';
import AppContainer from '../common/AppContainer';
import createStore from '../common/store';
import routes from '../common/routes';

const basePath = process.env.SCRIPT_BASE_PATH;
const store = createStore();
const sheet = new ServerStyleSheet();

function matchComponent(url) {
  const [{ component }] = routes.filter(route => matchPath(url, route));
  return component;
}

async function fetchData(url) {
  const locals = {
    dispatch: store.dispatch,
  };
  await trigger('fetch', matchComponent(url), locals);
}

function renderApplication(url) {
  const context = {};
  return renderToString(sheet.collectStyles(
    <StaticRouter location={url} context={context}>
      <AppContainer store={store} />
    </StaticRouter>,
  ));
}

function renderHtml(styles, application, initialState) {
  return `<!doctype html>
  <html class="no-js" lang="">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>HMR all the things!</title>
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
  await fetchData(ctx.url);
  const application = renderApplication(ctx.url);
  const html = renderHtml(sheet.getStyleTags(), application, store.getState());

  ctx.body = html;
};
