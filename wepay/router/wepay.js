const Router = require('koa-router')

const router = new Router()

const { prepay, notify } = require('../controllers/wepay')

// 定义子路由
router.post('/prepay', prepay)
router.post('/notify', notify)

module.exports = router