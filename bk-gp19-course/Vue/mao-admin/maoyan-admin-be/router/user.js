const Router = require('koa-router')
const router = new Router()

const userController = require('../controller/user')
const userMiddleware = require('../middlewares/user')

router.post('/signup', userMiddleware, userController.signup)
router.post('/signin', userController.signin)
router.get('/signout', userController.signout)

module.exports = router