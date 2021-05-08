import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HospitalBedsView from '../views/HospitalBedsView.vue'
import OxygenCylindersView from '../views/OxygenCylindersView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/hospital-beds',
    name: 'HospitalBedsView',
    component: HospitalBedsView,
    props: (route) => ({ hospitalBedsQuery: route.query })
  },
  {
    path: '/oxygen-cylinders',
    name: 'OxygenCylindersView',
    component: OxygenCylindersView,
    props: (route) => ({ oxygenCylindersQuery: route.query })
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
