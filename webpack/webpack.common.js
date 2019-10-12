const webpack = require('webpack');

const { NODE_ENV, API_DOMAIN, API_VERSION, isPROD, isDEV, paths } = require('../bin');

module.exports = {
  entry: {
    app: paths.appIndexJs,
  },
  output: {
    filename: `[name]-[hash]${isPROD ? '.min' : ''}.js`,
    path: paths.appBuild,
    publicPath: '/',
  },
  target: 'web',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        isPROD: JSON.stringify(isPROD),
        isDEV: JSON.stringify(isDEV),
        NODE_ENV: JSON.stringify(NODE_ENV),
        API_DOMAIN: JSON.stringify(API_DOMAIN),
        API_VERSION: JSON.stringify(API_VERSION),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.(woff(2)?|ttf|eot|svg|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@assets': paths.resolveApp('src/assets/'),
      '@components': paths.resolveApp('src/components/'),
      '@config': paths.resolveApp('src/config/'),
      '@ducks': paths.resolveApp('src/ducks/'),
      '@pages': paths.resolveApp('src/pages/'),
      '@routes': paths.resolveApp('src/routes/'),
      '@services': paths.resolveApp('src/services/'),
      '@styles': paths.resolveApp('src/styles/'),
      '@utils': paths.resolveApp('src/utils/'),
    },
    extensions: ['.js', '.jsx', 'scss'],
  },
};
