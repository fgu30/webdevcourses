module.exports = {
  devServer: {
    // 反向代理: http-proxy-middleware
    proxy: {
      // 暗号: 当在浏览器地址栏里输入/api字符串的时候，http-proxy-middleware会将请求拦下来
      '/api': {
        target: 'https://wx.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // /api/mmdb/movie/v2/list/hot.json -> /mmdb/movie/v2/list/hot.json
        }
      } 
    }
  }
}