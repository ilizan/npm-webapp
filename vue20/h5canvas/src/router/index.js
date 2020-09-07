import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    // redirect: '/canvas',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/hetong',
    name: 'Hetong',
    component: () => import('../views/Hetong.vue')
  },
  
  {
    path: '/canvas',
    name: 'Canvas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Canvas.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
