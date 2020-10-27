const Mock = require('mockjs')
const axios = require('axios')
const http = require('http')

const data = Mock.mock({
  'list|3': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|1-3': true,
    'nm|1-3': ['a'],
    'fn': () => {
      return 'abc'
    },
    'reg': /\d{1,3}/,
    'img': '@image("200x100", "#6435c9", "#fff", "头像")',
    'title': Mock.Random.cparagraph(20, 40)
  }]
})

http.createServer((req, res) => {
  // axios({
  //   url: '/api/list'
  // }).then(result => {
  //   console.log(result)
  // })
  // res.end()
  switch(req.url) {
    case '/api/list':
      res.write(JSON.stringify(data))
      break;
    dafault:
      res.write('ok.')
  }

  res.end()
}).listen(9090)