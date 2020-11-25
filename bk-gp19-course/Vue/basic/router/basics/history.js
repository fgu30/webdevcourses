let $lis = $('li')
let $box = $('#box')

const router = [
  {
    path: '/movie',
    component: '<div>电影列表</div>'
  },
  {
    path: '/tv',
    component: '<div>电视剧列表</div>'
  },
  {
    path: '/variety',
    component: '<div>综艺列表</div>'
  }
]

function render() {
  let path = location.pathname
  let component = router.find(value => value.path === path)['component']
  $box.html(component)
}

$lis.on('click', function() {
  let index = $(this).index()
  history.pushState(null, '', location.origin + router[index]['path'])
  render()
})

$(window).on('popstate', function() {
  render()
})