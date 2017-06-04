'use strict';

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var Manifest = require('manifest-revision-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var rootPublic = path.resolve('./src');
var NODE_ENV = process.env.NODE_ENV || "production";
var DEVELOPMENT = NODE_ENV === "production" ? false : true;
var stylesLoader = 'css-loader?root=' + rootPublic + '&sourceMap!postcss-loader!stylus-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true';


var extractCSS = new ExtractTextPlugin('assets/styles/css/[name].css');

module.exports = function (_path) {
  var rootAssetPath = _path + 'src';

  var webpackConfig = {
    // entry points
    entry: {
      app: _path + '/src/app/index.bootstrap.js',
      vendor: _path + '/src/app/index.vendor.js',
    },

    // output system
    output: {
      path: _path + '/dist',
      filename: '[name].js',
      publicPath: '/',
      // chunkFilename: "[name].[chunkHash:8].js"
    },

    // resolves modules
    resolve: {
      extensions: ['.js', '.es6', '.jsx', '.styl', '.css'],
      alias: {
        _appRoot: path.join(_path, 'src', 'app'),
        _images: path.join(_path, 'src', 'assets', 'images'),
        _stylesheets: path.join(_path, 'src', 'assets', 'styles'),
        _scripts: path.join(_path, 'src', 'assets', 'js')
      }
    },

    // modules resolvers
    module: {
      loaders: [{
        test: /\.html$/,
        loaders: [
          {
            loader: 'ngtemplate-loader',
            query: {
              relativeTo: path.join(_path, '/src')
            }
          }, {
            loader: 'html-loader',
            query: {
              attrs: ['img:src', 'img:data-src']
            }
          }
        ]
      }, {
        test: /\.js$/,
        exclude: [
          path.resolve(_path, "node_modules")
        ],
        loaders: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: false
            }
          },
          'baggage-loader?[file].html&[file].css'
        ]
      }, {
        test: /\.css$/,
        // loaders: [
        //   'style-loader',
        //   'css-loader?sourceMap',
        //   'postcss-loader'
        // ]
        loader: extractCSS.extract([ 'css-loader' ])
      }, {
        test: /\.styl$/,
        loader: DEVELOPMENT ? ('style-loader!' + stylesLoader) : ExtractTextPlugin.extract({
          fallback: "style-loader",
          loader: stylesLoader
        })
      }, {
        test: /\.(woff2|woff|ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: [
          {
            loader: 'url-loader',
            query: {
              name: 'assets/fonts/[name]_[hash].[ext]'
            }
          }
        ]
      }, {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          {
            loader: 'url-loader',
            query: {
              name: 'assets/images/[name]_[hash].[ext]',
              limit: 10000
            }
          }
        ]
      }
      ]
    },

    // load plugins
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          // PostCSS
          postcss: [autoprefixer({browsers: ['last 5 versions']})],
        }
      }),
       new webpack.ProvidePlugin({
           
           $: 'jquery',
           jQuery: 'jquery',
           'window.jQuery': 'jquery',
           'window.jquery': 'jquery',
           
       }),
      new webpack.DefinePlugin({
        'NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      // new webpack.NoEmitOnErrorsPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // new webpack.optimize.AggressiveMergingPlugin({
      //   moveToParents: true
      // }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        // async: true,
        // children: true,
        // minChunks: Infinity
      }),
      new Manifest(path.join(_path + '/config', 'manifest.json'), {
        rootAssetPath: rootAssetPath,
        ignorePaths: ['.DS_Store']
      }),
      extractCSS,
      new ExtractTextPlugin({
        filename: 'assets/styles/css/[name]' + (NODE_ENV === 'development' ? '' : '.[chunkhash]') + '.css',
        allChunks: true
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(_path, 'src', 'tpl-index.ejs')
      })
    ]
  };

  return webpackConfig;

};
