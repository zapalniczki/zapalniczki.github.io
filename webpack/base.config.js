const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: resolve('src/index.tsx'),
  output: {
    path: resolve('dist'),
    filename: 'js/[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'group-css-media-queries-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              outputPath: 'images',
              name: '[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              name: '[name].[hash].[ext]',
              outputPath: 'fonts'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [resolve('src'), 'node_modules'],
    mainFiles: ['index'],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].[contenthash]_[id].css'
    })
  ]
}
