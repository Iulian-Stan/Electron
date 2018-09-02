var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',

  performance: {
    hints: false
  },

  entry: {
    'electron': './src/electron.ts',
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['.js', '.ts', '.html', '.scss']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      { 
        test: /\.(sa|sc|c)ss$/, 
        exclude: path.resolve('src/app'),
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      { 
        test: /\.(sa|sc|c)ss$/, 
        include: path.resolve('src/app'),
        loaders: ['raw-loader', 'sass-loader'] 
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      // Ignore warnings about System.import in Angular
      { 
        test: /[\/\\]@angular[\/\\].+\.js$/, 
        parser: { 
            system: true 
        }
      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /\@angular(\\|\/)core(\\|\/)fesm5/,
      './src', // location of your src
      {} // a map of your routes
    ),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      excludeChunks: ['electron']
    })
  ],

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  // Target a specific environment (cf. doc)
  target: 'electron-renderer',
  // Configure whether to polyfill or mock certain Node.js globals and modules
  node: {
    __dirname: false,
    __filename: false
  }
};

