var path = require('path');
var webpackMerge = require('webpack-merge');
var exec = require('child_process').exec;
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    // Execute custom middleware after all other middleware internally within the server        
    after() {
      // Fix whitescreen bug on build with Electron BrowserWindow
      exec('electron ./dist/electron.js --serve');
    }
  }
});
