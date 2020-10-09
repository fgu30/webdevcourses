const { find } = require('../model/client')

exports.find = async (ctx, next) => {
  ctx.res.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8'
  })

  let list = await find(ctx.query)
  if (list) {
    ctx.render('success.art', {
      data: JSON.stringify(list)
    })
  }
}