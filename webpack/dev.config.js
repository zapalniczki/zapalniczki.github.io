const { merge } = require('webpack-merge')
const path = require('path')
const DotEnv = require('dotenv')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const baseConfig = require('./base.config.js')
const pkg = require('../package.json')

DotEnv.config({ path: '.env' })

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: false,
    publicPath: '/',
    historyApiFallback: true,
    clientLogLevel: 'warning',
    compress: true,
    port: 3006,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../static'),
          to: 'static'
        }
      ]
    }),
    new webpack.DefinePlugin({
      process: {
        env: {
          MEASUREMENT_ID: JSON.stringify(process.env.MEASUREMENT_ID),
          VERSION: JSON.stringify(pkg.version),
          SUPABASE_URL: JSON.stringify(process.env.SUPABASE_URL),
          SUPABASE_PUBLIC_ANON_KEY: JSON.stringify(
            process.env.SUPABASE_PUBLIC_ANON_KEY
          )
        }
      }
    })
  ]
})
