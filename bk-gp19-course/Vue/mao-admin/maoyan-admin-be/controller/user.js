const userModel = require('../model/user')
const { hash, compare } = require('../utils/bcrypt')
const { sign } = require('../utils/token')

const signup = async (ctx, next) => {
  ctx.res.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8'
  })

  let { username, password } = ctx.request.body

  let user = await userModel.findOne(username)

  if (!user) {
    // bcrypt 加密
    let newPassword = await hash(password)
    let result = await userModel.signup({username, password: newPassword})
  
    if (result) {
      ctx.render('success.art', {
        data: JSON.stringify({
          username: result.username
        })
      })
    } else {
      ctx.render('fail.art', {
        message: JSON.stringify('注册失败。')
      })
    }
    await next()
  } else {
    ctx.render('fail.art', {
      message: JSON.stringify('用户名存在')
    })
  }

}

const signin = async (ctx, next) => {
  ctx.res.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8'
  })

  let { username, password } = ctx.request.body
  let result = await userModel.findOne(username)

  let token = sign({username})

  if (result) {
    // 密码验证
    let ret = await compare(password, result.password)
    if (ret) {
      // koa 如何设置自定义首部?
      ctx.res.writeHead( 200, {
        'X-Access-Token': token
      })
      ctx.render('success.art', {
        data: JSON.stringify({
          username: result.username
        })
      })
    } else {
      ctx.render('fail.art', {
        message: JSON.stringify('登录失败。')
      })
    }
  } else {
    ctx.render('fail.art', {
      message: JSON.stringify('登录失败。')
    })
  }
}

const signout = async (ctx, next) => {
  ctx.res.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8'
  })
  ctx.session.username = null
  ctx.render('success.art', {
    data: JSON.stringify({
      message: '成功推出'
    })
  })
}

module.exports = {
  signup,
  signin,
  signout
}