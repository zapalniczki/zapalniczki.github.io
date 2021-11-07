const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const createStyledComponentsTransformer =
  require('typescript-plugin-styled-components').default
const styledComponentsTransformer = createStyledComponentsTransformer()

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
        exclude: /node_modules/,
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer]
          })
        }
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
          }
        ],
        sideEffects: true
      },

      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    cleanupIDs: false,
                    prefixIds: false
                  }
                ]
              }
            }
          },
          'url-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
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
