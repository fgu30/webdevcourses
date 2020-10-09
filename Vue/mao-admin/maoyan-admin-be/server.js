const path = require('path')
const bodyparser = require('koa-bodyparser')
const Koa = require('koa')
const session = require('koa-session')
const static = require('koa-static')
const app = new Koa()

const render = require('koa-art-template')

render(app, {
  root: path.join(__dirname, 'view'),
  extname: '.art',
  debug: process.env.NODE_ENV !== 'production',
  escape: false
})

app.use(bodyparser())
app.use(static(path.resolve(__dirname, './public')))

app.keys = ['some secret hurr'];
 
const CONFIG = {
  key: 'SESSION_ID', /** (string) cookie key (default is koa.sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
  secure: false, /** (boolean) secure cookie*/
  sameSite: null, /** (string) session cookie sameSite options (default null, don't set it) */
}

app.use(session(CONFIG, app))

const Router = require('koa-router')
const router = new Router()

const userRouter = require('./router/user')
const movieRouter = require('./router/movie')
const clientRouter = require('./router/client')
router.use('/api/users', userRouter.routes())
router.use('/api/movies', movieRouter.routes())
router.use('/admin_api', clientRouter.routes())
app.use(router.routes())

app.listen(9000, () => {
  console.log('localhost:9000')
})