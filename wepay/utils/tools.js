const randomstring = require('randomstring')
const querystring = require('querystring')
const crypto = require('crypto')

const nonce_str = () => {
  return randomstring.generate(32)
}

const md5 = (str) => {
  return crypto.createHash('md5').update(str).digest('hex')
}

const sign = (_prepayObj) => {
  // key值
  const key = 'T8NHKqOfKWtqZPnQm8K77PtQtaRXluU8'

  const prepayObj = Object.keys(_prepayObj).sort().reduce((obj, key) => {
    obj[key] = _prepayObj[key]
    return obj
  }, {})

  const stringA = querystring.stringify(prepayObj, null, null, {
    encodeURIComponent(value) {
      return querystring.unescape(value)
    }
  })

  const stringSignTemp = stringA + '&key=' + key

  const sign = md5(stringSignTemp).toUpperCase()

  return sign
}

module.exports = {
  nonce_str,
  md5,
  sign
}