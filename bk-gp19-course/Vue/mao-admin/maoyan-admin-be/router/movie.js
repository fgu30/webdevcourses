const Router = require('koa-router')
const router = new Router()

const movieController = require('../controller/movie')
const uploadMiddleware = require('../middlewares/upload')

router.post('/upload', uploadMiddleware, movieController.upload)
router.post('/add', movieController.add)
router.get('/list', movieController.list)

module.exports = router