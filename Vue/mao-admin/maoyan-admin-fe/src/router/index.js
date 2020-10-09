import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/index/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/intheaters',
    children: [
      {
        path: 'intheaters',
        name: 'intheaters',
        component: () => import(/* webpackChunkName: "about" */ '../views/index/movies/Intheaters.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
