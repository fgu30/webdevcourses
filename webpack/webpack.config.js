const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    app: './src/main.js'
  },

  // 出口
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: true
    })
  ],

  // 配置server
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 8080,
    quiet: true
  }
}