const webpack = require('webpack');
const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./base.config');

module.exports = Object.assign({}, baseConfig, {
  entry: [
    'babel-polyfill',
    './src/server/index',
  ],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: resolve(__dirname, '../build'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(false),
      'process.env': {
        BUILD_TARGET: JSON.stringify('server'),
        SCRIPT_BASE_PATH: JSON.stringify(''),
      },
    }),
  ],
});
