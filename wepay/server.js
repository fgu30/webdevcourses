const Koa = require('koa')
const Router = require('koa-router')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const wxpay = require('./router/wepay')
const views = require('koa-views')
const static = require('koa-static')
const cors = require('@koa/cors')

const app = new Koa()

// 解决跨域问题
app.use(cors())

// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './public'
app.use(static(
  path.join( __dirname,  staticPath)
))

// 使用ctx.body解析中间件
app.use(bodyParser())

// 定义wepay路由
const wepay = new Router()
wepay.use('/wxpay', wxpay.routes())

// 在Koa实例挂载路由
app.use(wepay.routes())

app.use(async (ctx) => {
  ctx.body = 'hello'
})

app.listen(8080, () => {
  console.log('localhost:8080')
})
