const path = require('path')
const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.config.common.js')
const developmentConfig = {
  mode: 'development',

  devtool: 'source-map',

  // 配置server
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
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

module.exports = merge(commonConfig, developmentConfig)