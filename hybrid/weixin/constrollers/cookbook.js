var crypto = require('crypto')
var convert = require('xml-js')
var { getXml } = require('../utils/tools')
var axios = require('axios')
var randomstring = require('randomstring')
var querystring = require('querystring')

// 自动回复
const autoreply = async (req, res, next) => {
  // 获取原生的xml信息
  let xml = await getXml(req)

  // 将XML转化为js
  let js = convert.xml2js(xml, {
    compact: true,
    textKey: 'value',
    cdataKey: 'value'
  }).xml
  
  // 数据扁平化
  let {
    ToUserName,
    FromUserName,
    CreateTime,
    MsgType,
    Content,
    MsgIds
  } = Object.keys(js).reduce((obj, key) => {
    obj[key] = js[key]['value']
    return obj
  }, {})

  // 返回数据
  res.render('autoreply', {
    ToUserName: FromUserName,
    FromUserName: ToUserName,
    CreateTime: new Date().getTime(),
    MsgType,
    Content: '<a href="http://walter666.cn/cookbooks/">美食大全</a>'
  })
}

// 用于验证微信服务器
const auth = (req, res, next) => {
  console.log(req.query)
  let token = 'weixin'
  let {
    timestamp,
    nonce,
    signature,
    echostr
  } = req.query

  let str = [timestamp, nonce, token].sort().join('')
  let newSignature = crypto.createHash('sha1').update(str).digest('hex')

  if (newSignature === signature) {
    res.send(echostr)
  }
}

// 生成signature
const jsapi = async (req, res, next) => {
  let appid = 'wx7ba8ee8a8beace33'
  let appsecret = 'd62705bd6fdf27441397683019077e20'
  let url = 'http://walter666.cn/cookbooks'

  // 1、获取access_token
  let atResult = await axios.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${appsecret}`)
  let { access_token, expires_in: atExpires } = atResult.data
  
  // 2、获取jsapi_ticket
  let jtResult = await axios.get(`https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${access_token}&type=jsapi`)
  let { ticket, expires_in: jtExprires } = jtResult.data
  
  // 3、生成string1
  let noncestr = randomstring.generate(32)
  let timestamp = Math.floor(new Date().getTime() / 1000)
  let sign = {
    jsapi_ticket: ticket,
    url,
    timestamp,
    noncestr
  }
  let newSign = Object.keys(sign).sort().reduce((obj, key) => {
    obj[key] = sign[key]
    return obj
  }, {})
  // 实现url不做escape转化
  let string1 = querystring.stringify(newSign, null, null, {
    encodeURIComponent(str) {
      return querystring.unescape(str)
    }
  }).toLowerCase()

  // 4、生成 signature
  let signature = crypto.createHash('sha1').update(string1).digest('hex')
  
  res.json({
    appId: appid,
    timestamp,
    nonceStr: noncestr,
    signature
  })
}

module.exports = {
  autoreply,
  auth,
  jsapi
}