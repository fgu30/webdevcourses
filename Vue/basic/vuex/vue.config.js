module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.bilibili.com',
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}