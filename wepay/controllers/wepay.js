const { nonce_str: ns, sign } = require('../utils/tools')
const convert = require('xml-js')
const axios = require('axios')
const QRCode = require('qrcode')
const getRawBody = require('raw-body')
const contentType = require('content-type')
const io = require('../utils/socket')

let client = null
io.on('connection', socket => {
  client = socket
})

// 调用统一下单接口，进行预支付
const prepay = async (ctx) => {
  const bd = ctx.request.body

  // 统一下单接口API
  const prepay_url = 'https://api.mch.weixin.qq.com/pay/unifiedorder'

  // 一 、调用接口的选项
  // 1、appid
  const appid = 'wx100749d4612ea385'

  // 2、mch_id 商户号
  const mch_id = '1448624302'

  // 3、nonce_str
  const nonce_str = ns()

  // 4、body 商品描述
  const body = bd.body

  // 5、trade_type 交易类型
  const trade_type = 'NATIVE'

  // 6、通知地址
  const notify_url = 'https://walter666.cn/wxpay/notify'

  // 7、total_fee 标价金额
  const total_fee = bd.total_fee

  // 8、out_trade_no 商户订单号
  const out_trade_no = bd.out_trade_no

  // 9、生成签名sign
  const _prepayObj = {
    appid,
    mch_id,
    nonce_str,
    body,
    trade_type,
    notify_url,
    total_fee,
    out_trade_no
  }
  
  const signValue = sign(_prepayObj)

  const prepayObj = {
    xml: {
      ..._prepayObj,
      sign: signValue
    }
  }

  const xml = convert.js2xml(prepayObj, {
    compact: true
  })

  // 二、调用统一下单接口
  let result = await axios.post(prepay_url, xml)

  let resultJS = convert.xml2js(result.data, {
    compact: true,
    cdataKey: 'value',
    textKey: 'value'
  }).xml

  let plainResultJS = Object.keys(resultJS).reduce((obj, key) => {
    obj[key] = resultJS[key]['value']
    return obj
  }, {})

  let code_url = plainResultJS.code_url

  let data = await QRCode.toDataURL(code_url)

  await ctx.render('index', {
    data,
    body,
    out_trade_no
  })
}

const notify = async (ctx) => {
  let result = await getRawBody(ctx.req, {
    length: ctx.req.headers['content-length'],
    limit: '1mb',
    encoding: contentType.parse(ctx.req).parameters.charset
  })

  let notifyResult = convert.xml2js(result, {
    compact: true,
    cdataKey: 'value',
    textKey: 'value'
  }).xml
  
  let plainNotifyResult = Object.keys(notifyResult).reduce((obj, key) => {
    obj[key] = notifyResult[key]['value']
    return obj
  }, {})

  console.log(plainNotifyResult)
  
  let signValue = plainNotifyResult.sign
  delete plainNotifyResult.sign
  let mySign = sign(plainNotifyResult)

  if (signValue === mySign.toUpperCase()) {
    ctx.set('Content-type', 'text/plain')
    ctx.body = '<xml><return_code><![CDATA[SUCCESS]]></return_code><return_msg><![CDATA[OK]]></return_msg></xml>'
    client.emit('msg', {
      payStatus: true,
      msg: '我已经支付完了，可以跳页面了。'
    })
  } else {
    ctx.body = '<xml><return_code><![CDATA[FAIL]]></return_code><return_msg><![CDATA[ERROR]]></return_msg></xml>'
  }
}

module.exports = {
  prepay,
  notify
}