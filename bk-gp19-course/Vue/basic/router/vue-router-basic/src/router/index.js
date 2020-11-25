import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import movie from '../views/movie.vue'
import tv from '../views/tv.vue'
import variety from '../views/variety.vue'

import comedy from '../views/comedy.vue'
import cartoon from '../views/cartoon.vue'
import page404 from '../views/page404.vue'
import ad from '../views/ad.vue'

const routes = [
  {
    path: '/',
    redirect: '/movie'
  },
  {
    path: '/movie',
    component: movie,
    redirect: '/movie/comedy',
    children: [
      {
        path: 'comedy',
        component: comedy
      },
      {
        path: 'cartoon',
        component: cartoon
      }
    ]
  },
  {
    // 动态路由：本质是多个路径共享一个组件
    path: '/tv/:id',
    name: 'tv',
    props: (route) => ({
      xxx: route.params.id + '007',
      yyy: 'hello'
    }),
    meta: {left: 100},
    component: tv
  },
  {
    path: '/variety',
    alias: '/v',
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter')
      next()
    },
    components: {
      default: variety,
      v2: ad
    }
  },
  {
    path: '*',
    component: page404
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// 全局守卫
router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  next()
})

router.afterEach((to, from) => {
  console.log('afterEach')
})

export default router