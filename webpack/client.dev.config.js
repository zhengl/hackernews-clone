const webpack = require('webpack');
const baseConfig = require('./client.config');

const { PORT, LOG_LEVEL } = process.env;
const DEV_SERVER_PORT = PORT ? Number(PORT) + 1 : 3001;

module.exports = Object.assign({}, baseConfig, {
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${DEV_SERVER_PORT}`,
    'webpack/hot/only-dev-server',
    baseConfig.entry,
  ],
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true),
      'process.env': {
        LOG_LEVEL: JSON.stringify(LOG_LEVEL),
        BUILD_TARGET: JSON.stringify('client'),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: DEV_SERVER_PORT,
    historyApiFallback: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
