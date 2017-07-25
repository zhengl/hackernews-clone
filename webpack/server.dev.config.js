const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const baseConfig = require('./server.config');

const poll = 'webpack/hot/poll?1000';

module.exports = Object.assign({}, baseConfig, {
  entry: [
    poll,
    baseConfig.entry,
  ],
  watch: true,
  externals: [nodeExternals({
    whitelist: [poll],
  })],
  plugins: [
    new StartServerPlugin(baseConfig.output.filename),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        SCRIPT_BASE_PATH: JSON.stringify('http://localhost:3001/'),
      },
    }),
  ],
});
