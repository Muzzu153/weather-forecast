const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const { title } = require('process');

module.exports = merge(common, {
  mode: 'production',

  devtool: 'source-map',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    assetModuleFilename: './images/[name][ext]',
  },
});
