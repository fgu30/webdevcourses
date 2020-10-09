const { verify } = require('../utils/token.js')

module.exports = async (ctx, next) => {
  // token 验证
  let token = ctx.req.headers['x-access-token']
  let result = await verify(token)
  if (result) {
    next()
  } else {
    ctx.render('fail.art', {
      data: JSON.stringify({
        message: '没有操作权限'
      })
    })
  }
}






// let obj = {
//   name: 'zhangsan'
// }

// function fun(greeting) {
//   console.log(greeting)
//   console.log(greeting + this.name)
// }

// fun.apply = () => {
//   console.log(0)
// }

// // Function.prototype.apply.call(fun, obj, ['hello '])
// Reflect.apply(fun, obj, ['hello '])