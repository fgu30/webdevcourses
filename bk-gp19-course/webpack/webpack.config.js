const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',

  // 入口
  // entry: './src/main.js',
  // entry: ['./src/main.js', './src/index.js'],
  // entry: {
  //   travel: './src/main.js',
  //   insurance: './src/index.js'
  // },
  entry: {
    'scripts/app': './src/index.js'
  },

  resolve: {
    alias: {
      '@c': path.resolve(__dirname, './src/components')
    },

    extensions: [".js", ".json"]
  },

  // 出口
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]-[contenthash:6].js'
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
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
              return 'img-[contenthash:6].[ext]';
            },
          }
        }
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader'
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
        return `${chunk.name.replace('scripts', 'styles')}-[contenthash:6].css`
      }
    }),

    new VueLoaderPlugin(),

    new CleanWebpackPlugin()
  ],

  // 配置server
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 8080,
    proxy: {
      "/api": {
        target: "https://wx.maoyan.com",
        changeOrigin: true,
        pathRewrite: {"^/api" : ""}
      }
    }
  }
}