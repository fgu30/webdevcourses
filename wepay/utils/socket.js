var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

http.listen(8090, () => {
  console.log('listening on *:8090')
})

module.exports = io