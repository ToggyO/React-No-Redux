const merge = require('webpack-merge');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackBar = require('webpackbar');

const { paths } = require('../bin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: { output: { comments: false } },
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /\.jsx?$/,
          chunks: 'all',
          reuseExistingChunk: true,
          minChunks: 2,
          name: 'common',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      filename: 'index.html',
      favicon: paths.appFavicon,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^.\/locale$/,
      contextRegExp: /moment$/,
    }),

    new CopyWebpackPlugin([{ from: paths.appAssets, to: paths.appBuildAssets }]),
    new WebpackBar({
      color: '#1fffa2',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: false,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: ['./src/styles/_variables.sass', './src/styles/_mixins.sass'],
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        // test: /\.(scss|sass|css)$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: ['./src/styles/_variables.sass', './src/styles/_mixins.sass'],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
