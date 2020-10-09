const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken')

exports.sign = (payload) => {
  var privateKey = fs.readFileSync(path.resolve(__dirname, '../keys/rsa_private_key.pem'));
  var token = jwt.sign(payload, privateKey, { algorithm: 'RS256'});
  return token
}

exports.verify = (token) => {
  var cert = fs.readFileSync(path.resolve(__dirname, '../keys/rsa_public_key.pem'));  // get public key
  return new Promise(resolve => {
    jwt.verify(token, cert, function(err, decoded) {
      resolve(decoded)
    })
  })
}