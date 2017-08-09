const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const baseConfig = require('./server.config');

const poll = 'webpack/hot/poll?1000';

module.exports = Object.assign({}, baseConfig, {
  devtool: 'sourcemap',
  entry: [
    poll,
    ...baseConfig.entry,
  ],
  watch: true,
  externals: [nodeExternals({
    whitelist: [poll],
  })],
  plugins: [
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
    new StartServerPlugin(baseConfig.output.filename),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true),
      'process.env': {
        LOG_LEVEL: JSON.stringify(process.env.LOG_LEVEL),
        BUILD_TARGET: JSON.stringify('server'),
        SCRIPT_BASE_PATH: JSON.stringify('http://localhost:3001/'),
      },
    }),
  ],
});
