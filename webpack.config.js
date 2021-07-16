const webpack = require('webpack')
const path = require('path')

function createConfig(env) {
  const isProduction = env === 'production'

  if (env === undefined) {
    env = process.env.NODE_ENV
  }

  const webpackConfig = {
    entry: {
      app: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'build/'),
      publicPath: './',
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: '/node_modules/',
          options: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.glsl$/,
          exclude: '/node_modules/',
          loader: 'webpack-glsl-loader',
        },
      ],
    },
    mode: 'production',
    devtool: false,
    performance: {
      hints: false,
    },
    optimization: {
      minimize: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
    ],
  }
  return webpackConfig
}

module.exports = createConfig
