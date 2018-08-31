import Vue from 'vue'
import Router from 'vue-router'
import Login from './view/Login.vue'//登录页
import Home from './view/Home.vue'//登陆后主页
import Index from './view/index/Index.vue'//登陆后默认显示页
import Fcomponents from './view/index/Fcomponents.vue'//组件demo
import Ajax from './view/index/Ajax.vue'//ajax请求demo
import Form from './view/index/Form.vue'//表单demo

import SwiperPage from './view/index/SwiperPage.vue'//SwiperDemo
import Editor from './view/index/Editor.vue'//SwiperDemo
import Scrollbar from './view/index/Scrollbar.vue'
import List from './view/menu1/List.vue'//列表页

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
      name: '目录一',
      component: Home,
      class: 'el-icon-message',
      children:[
        { path: '/',component:Index,name:'介绍'},
        { path: '/components',component:Fcomponents,name:'父子组件'},
        { path: '/ajax',component:Ajax,name:'ajax请求'},
        { path: '/form',component:Form,name:'表单'},
        
        { path: '/swiper',component:SwiperPage,name:'swiper轮播图'},
        { path: '/editor',component:Editor,name:'在线编辑器'},
        { path: '/scrollbar',component:Scrollbar,name:'滚动条'}
        
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
