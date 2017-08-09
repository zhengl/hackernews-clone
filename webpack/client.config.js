const webpack = require('webpack');
const { resolve } = require('path');
const baseConfig = require('./base.config');

const { PORT } = process.env;
const DEV_SERVER_PORT = PORT ? Number(PORT) + 1 : 3001;

module.exports = Object.assign({}, baseConfig, {
  entry: [
    'babel-polyfill',
    './src/client/index',
  ],
  target: 'web',
  output: {
    path: resolve(__dirname, '../build/public'),
    publicPath: `http://localhost:${DEV_SERVER_PORT}/`,
    filename: 'index.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(false),
      'process.env': {
        BUILD_TARGET: JSON.stringify('client'),
      },
    }),
  ],
});
