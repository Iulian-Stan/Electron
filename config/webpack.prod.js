var path = require('path');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var CopyWebpackPlugin = require('copy-webpack-plugin')
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  performance: {
    hints: false
  },

  output: {
    path: path.resolve('dist'),
    filename: (chunkData) => {
      return chunkData.chunk.name === 'electron' ? '[name].js': '[name].[hash].js';
    },
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    }),
    new CopyWebpackPlugin(['package.json'], {})
  ]
});

