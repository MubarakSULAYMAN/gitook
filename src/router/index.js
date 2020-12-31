import Vue from 'vue'
import VueRouter from 'vue-router'
import Query from '../views/Query.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Query',
    component: Query
  },
  {
    path: '/home',
    redirect: '/'
  },
  // {
  //   path: '/result',
  //   name: 'Result',
  //   component: () => import('../views/Result.vue')
  // },
  {
      // path: '/search/:value',
      path: '/search',
      name: 'Result',
      component: () => import('../views/Result.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '*',
    name: "PageNotFound",
    component: () => import('@/views/PageNotFound.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
