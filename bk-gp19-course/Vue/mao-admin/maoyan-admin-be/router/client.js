const Router = require('koa-router')
const router = new Router()

const clientController = require('../controller/client')

router.get('/list', clientController.find)

module.exports = router