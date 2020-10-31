var app = require('express')()
var https = require('https').createServer(app)
var io = require('socket.io')(https)

https.listen(8090, () => {
  console.log('listening on *:8090')
})

module.exports = io