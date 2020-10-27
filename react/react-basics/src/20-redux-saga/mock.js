import Mock from 'mockjs'

Mock.mock('/api/list', {
  'id': '@guid',
  'title|1-3': 'a',
  'content': '@cparagraph(10, 20)'
})