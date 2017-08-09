const webpack = require('webpack');
const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: [
    './src/server/index',
  ],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: resolve(__dirname, '../build'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: 'babel-loader',
          options: {
            forceEnv: 'development',
          },
        },
        exclude: /node_modules/,
      },
    ],
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
};
