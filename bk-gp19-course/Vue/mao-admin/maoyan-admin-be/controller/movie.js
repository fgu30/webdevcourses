const { add, findall } = require('../model/movie')

exports.upload = (ctx, next) => {
  ctx.res.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8'
  })

  ctx.render('success.art', {
    data: JSON.stringify({
      filename: ctx.request.file.filename,
      message: '图片上传成功!'
    })
  })
}

exports.add = async (ctx, next) => {
  ctx.res.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8'
  })

  let result = await add(ctx.request.body)
  if (result) {
    ctx.render('success.art', {
      data: JSON.stringify({
        message: '数据提交成功!'
      })
    })
  } else {
    ctx.render('fail.art', {
      message: JSON.stringify('数据提交失败!')
    })
  }
}

exports.list = async (ctx, next) => {
  let list = await findall()
  if (list) {
    ctx.render('success.art', {
      data: JSON.stringify({
        message: list
      })
    })
  }
}