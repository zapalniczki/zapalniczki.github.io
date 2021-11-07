const { merge } = require('webpack-merge')
const DotEnv = require('dotenv')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const baseConfig = require('./base.config.js')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const pkg = require('../package.json')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

DotEnv.config({ path: '.env.prod' })

module.exports = merge(baseConfig, {
  output: {
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'auto'
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
