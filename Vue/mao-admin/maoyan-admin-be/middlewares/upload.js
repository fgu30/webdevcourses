const multer = require('@koa/multer')
const path = require('path')
const mime = require('mime')
const randomstring = require("randomstring")

module.exports = async (ctx, next) => {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../public/uploads'))
    },
    filename: function (req, file, cb) {
      console.log(file)
      cb(null, file.fieldname + '-' + randomstring.generate(10) + '.' + mime.getExtension(file.mimetype))
    }
  })
  
  var limits = {
    files: 2
  }
  
  // const upload = await multer({ storage, limits }).single('poster')

  // 趟坑：解决 koa-multer 错误捕获
  let err = await multer({ storage, limits }).single('poster')(ctx, next)
    .then(value => value)
    .catch(err => err)

  if (err) {
    ctx.render('fail.art', {
      message: JSON.stringify(err)
    })
  }
}