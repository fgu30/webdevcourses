const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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

  // 出口
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
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
              return '[contenthash:6].[ext]';
            },
          }
        }
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
        return `${chunk.name.replace('scripts', 'styles')}.css`
      }
    })
  ],

  // 配置server
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 8080
  }
}