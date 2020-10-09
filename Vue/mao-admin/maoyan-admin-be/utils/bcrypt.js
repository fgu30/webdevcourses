const bcrypt = require('bcrypt')
exports.hash = (plaintextPassword) => {
  const saltRounds = 10
  return new Promise(resolve => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(plaintextPassword, salt, function(err, hash) {
        resolve(hash)
      })
    })
  })
}

exports.compare = (myPlaintextPassword, hash) => {
  return new Promise(resolve => {
    bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
      resolve(result)
    })
  })
}