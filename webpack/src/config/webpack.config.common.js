const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MyExampleWebpackPlugin = require('../plugins/MyExampleWebpackPlugin')

const env = process.env.NODE_ENV

module.exports = {
  entry: {
    'scripts/app': './src/index.js'
  },

  // 出口
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: `[name]${env === 'production' ? '-[contenthash:6]' : ''}.js`
  },

  resolve: {
    alias: {
      '@c': path.resolve(__dirname, './src/components')
    },

    extensions: [".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.string?$/,
        use: {
          loader: 'string-loader'
        }
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: 'styles'
            }
          }, 
          'css-loader'
        ]
      },

      {
        test: /\.styl$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
      },

      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2000,
            outputPath: 'images',
            name() {
              return `img${env === 'production' ? '-[contenthash:6]' : ''}.[ext]`;
            },
          }
        }
      },
      
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      {
        test: /\.text$/,
        use: [
          path.resolve(__dirname, '../loaders/text-reverse-loader.js'),
          {
            loader: path.resolve(__dirname, '../loaders/text-getoption-loader.js'),
            options: {
              name: 'myLoader'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: true
    }),

    new MiniCssExtractPlugin({
      filename: ({ chunk }) => {
        return `${chunk.name.replace('scripts', 'styles')}${env === 'production' ? '-[contenthash:6]' : ''}.css`
      }
    }),

    new VueLoaderPlugin(),

    new MyExampleWebpackPlugin()
  ],

  // externals: {
  //   "vue": "window.Vue"
  // },

  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      // minRemainingSize: 0,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        myModule: {
          test: /[\\/]name[\\/]/,
          priority: -1,
          filename: 'myName.js'
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}