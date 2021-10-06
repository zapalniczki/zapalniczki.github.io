const { merge } = require('webpack-merge')
const DotEnv = require('dotenv')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const workboxPlugin = require('workbox-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')
const baseConfig = require('./base.config.js')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

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
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    },
    minimize: true,
    minimizer: [new OptimizeCSSAssetsPlugin({}), new TerserPlugin()]
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
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/404.html'),
      template: '404.html',
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
    }),

    //  // keep module.id stable when vendor modules does not change
    // new webpack.HashedModuleIdsPlugin(),
    // // enable scope hoisting
    // new webpack.optimize.ModuleConcatenationPlugin(),
    // generate service worker
    new workboxPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, '../src/sw-src.js'),
      swDest: 'sw.js',
      include: [/\.html$/, /\.js$/, /\.css$/, /\.woff2$/, /\.jpg$/, /\.png$/],
      maximumFileSizeToCacheInBytes: 100 * 1024 * 1024
    })
  ]
})
