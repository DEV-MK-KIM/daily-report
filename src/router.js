import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    {
      path: '/day/:date',
      name: 'day',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Day')
    },
    {
      path: '/calendar',
      name: 'calendar',   
      component: () => import('./components/Calendar.vue')
    },
    {
      path: '/setting',
      name: 'setting',   
      component: () => import('./components/Setting.vue')
    },
    {
      path: '/about',
      name: 'about',   
      component: () => import('./components/About.vue')
    }
  ]
})
