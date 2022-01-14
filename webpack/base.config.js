const createStyledComponentsTransformer =
  require('typescript-plugin-styled-components').default
const path = require('path')
const styledComponentsTransformer = createStyledComponentsTransformer()
const resolve = (dir) => path.join(__dirname, '..', dir)

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
        use: { loader: 'babel-loader' }
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
  }
}
