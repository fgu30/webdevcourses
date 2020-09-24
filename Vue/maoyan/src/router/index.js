import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@v/home/Home'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/movie',
    children: [
      {
        path: 'movie',
        name: 'movie',
        component: () => import(/* webpackChunkName: "movie" */ '@v/home/movies/Movies.vue'),
        redirect: '/movie/intheaters',
        children: [
          {
            path: 'intheaters',
            name: 'intheaters',
            component: () => import(/* webpackChunkName: "intheaters" */ '@v/home/movies/InTheaters.vue')
          },
          {
            path: 'comingsoon',
            name: 'comingsoon',
            component: () => import(/* webpackChunkName: "comingsoon" */ '@v/home/movies/ComingSoon.vue')
          }
        ]
      },
      {
        path: 'theaters',
        name: 'theaters',
        component: () => import(/* webpackChunkName: "theaters" */ '@v/home/theaters/Theaters.vue')
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "profile" */ '@v/home/profile/Profile.vue')
      }
    ]
  },
  {
    path: '/city',
    name: 'city',
    component: () => import(/* webpackChunkName: "city" */ '@v/city/CityPicker.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router