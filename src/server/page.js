import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../components/App';

const basePath = process.env.SCRIPT_BASE_PATH;

export default (ctx) => {
  const application = renderToString(<App />);

  const html = `<!doctype html>
  <html class="no-js" lang="">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>HMR all the things!</title>
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
    <body>
      <div id="root">${application}</div>
      <script src="${basePath}index.js"></script>
    </body>
  </html>`;

  ctx.body = html;
};
