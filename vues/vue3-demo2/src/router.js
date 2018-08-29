import Vue from 'vue'
import Router from 'vue-router'
import Login from './view/Login.vue'
import Home from './view/Home.vue'
import Index from './view/index/index.vue'
import List from './view/menu1/list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login,
      isHide:true
    },
    {
      path: '/',
      name: '介绍',
      component: Home,
      class: 'el-icon-message',
      children:[
        { path: '/',component:Index,name:'介绍'}
        
      ]
    },
    {
      path: '/',
      name: '目录',
      component: Home,
      class: 'el-icon-message',
      children:[
        { path: '/list',component:List,name:'列表'}
        
      ]
    },
    
  ]
})
