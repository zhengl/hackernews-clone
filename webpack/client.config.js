const { resolve } = require('path');

module.exports = {
  entry: './src/client/index',
  target: 'web',
  output: {
    path: resolve(__dirname, '../build/public'),
    publicPath: 'http://localhost:3001/',
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
