const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.config.common.js')
const productConfig = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin()
  ]
}

module.exports = merge(commonConfig, productConfig)