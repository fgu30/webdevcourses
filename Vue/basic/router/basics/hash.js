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
  let path = location.hash.substring(1)
  let component = router.find(value => value.path === path)['component']
  $box.html(component)
}

$(window).on('hashchange', function() {
  render()
})

$lis.on('click', function() {
  let index = $(this).index()
  location.hash = router[index]['path']
  // location.href = location.origin + "?" + router[index]['path']
})

