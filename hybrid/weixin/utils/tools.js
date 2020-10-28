var contentType = require('content-type')
var getRawBody = require('raw-body')

const getXml = (req) => {
  return new Promise((resolve, reject) => {
    getRawBody(req, {
      length: req.headers['content-length'],
      limit: '1mb',
      encoding: contentType.parse(req).parameters.charset
    }, function (err, string) {
      if (err) return resject(err)
      resolve(string.toString())
    })
  })
}

module.exports = {
  getXml
}