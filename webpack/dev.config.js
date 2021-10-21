const { merge } = require('webpack-merge')
const path = require('path')
const DotEnv = require('dotenv')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const baseConfig = require('./base.config.js')
const pkg = require('../package.json')

DotEnv.config({ path: '.env.dev' })

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
          VERSION: JSON.stringify(pkg.version),
          SUPABASE_URL: JSON.stringify(process.env.SUPABASE_URL),
          SUPABASE_PUBLIC_ANON_KEY: JSON.stringify(
            process.env.SUPABASE_PUBLIC_ANON_KEY
          ),
          FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY),
          FIREBASE_AUTH_DOMAIN: JSON.stringify(
            process.env.FIREBASE_AUTH_DOMAIN
          ),
          FIREBASE_DB_URL: JSON.stringify(process.env.FIREBASE_DB_URL),
          FIREBASE_PROJECT_ID: JSON.stringify(process.env.FIREBASE_PROJECT_ID),
          FIREBASE_STORAGE_BUCKET: JSON.stringify(
            process.env.FIREBASE_STORAGE_BUCKET
          ),
          FIREBASE_MSG_SENDER_ID: JSON.stringify(
            process.env.FIREBASE_MSG_SENDER_ID
          ),
          FIREBASE_APP_ID: JSON.stringify(process.env.FIREBASE_APP_ID)
        }
      }
    })
  ]
})

console.log(pkg.version)
