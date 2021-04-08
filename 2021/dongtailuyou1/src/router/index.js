import Vue from 'vue'
import VueRouter from 'vue-router'
import { fnAddDynamicMenuRoutes } from '../util/asyncRouter.js'
import { apiRoutesJson,apiJsonNull } from './menu.js'
Vue.use(VueRouter)


const routes = [
  //   {
  //   path: '/404',
  //   component: () => _import('common/404'),
  //   name: '404',
  //   meta: { title: '404未找到' }
  // },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Login.vue'),
  }
]
const mainRoutes =
{
  path: '/',
  name: 'Main',
  component: () => import('../views/Main.vue'),
  redirect: { name: 'Home' },
  children: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    //带参数路由配置→→
    {
      path:'/User-UserView/:id',
      name:'User-UserView',
      component:() =>import('../views/User/UserView')
    }
  ],
  beforeEnter(to, from, next) {
    let token = localStorage.getItem('token')
    if (!token || !/\S/.test(token)) {
      // clearLoginInfo()
      next('/login')
    } else {
      next()
    }
  }
}

const router = new VueRouter({
  // mode: 'hash',
  isAddDynamicMenuRoutes: false, // 是否已经添加动态(菜单)路由
  routes: routes.concat(mainRoutes)
  // routes
})


router.beforeEach((to, from, next) => {
  if (router.options.isAddDynamicMenuRoutes) {
    next()
  } else {
    mainRoutes.name = 'main-dynamic'
    localStorage.setItem('menuList',JSON.stringify(apiRoutesJson))
    mainRoutes.children = fnAddDynamicMenuRoutes(apiRoutesJson)
    router.addRoutes([mainRoutes])
    router.options.isAddDynamicMenuRoutes = true
    next({ ...to, replace: true })
  }
})



export default router
