var express = require('express');
var router = express.Router();

var { autoreply, auth, jsapi } = require('../constrollers/cookbook')

/* GET users listing. */
router.post('/auth', autoreply)

router.get('/auth', auth)

router.get('/jsapi', jsapi)

module.exports = router;
