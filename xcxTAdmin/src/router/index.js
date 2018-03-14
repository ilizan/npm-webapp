import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/views/404.vue'
import Login from '@/views/Login'
import Home from '@/views/Home'
import UserList from '@/views/user/UserList'

/* */
import DoList from '@/views/do/List'
import DoAdd from '@/views/do/Add'
import DoAdd2 from '@/views/do/Add2'
import DoEdit from '@/views/do/Edit'
/* */

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login,
      hidden:true
    },
    {
      path: '/',
      name: '用户管理',
      component: Home,
      children:[
        {path: '/userlist', component: UserList, name: '用户列表'}
      ]
    },
    {
      path: '/404',
      component: NotFound,
      name: '',
      hidden: true
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
    },
    {
      path: '/',
      name: 'do',
      component: Home,
      children:[
        {path: '/dolist', component: DoList, name: 'List'},
        {path: '/doadd', component: DoAdd, name: 'Add'},
        {path: '/doadd2', component: DoAdd2, name: 'Add2'},
        {path: '/doedit/:id', component: DoEdit, name: 'Edit',hidden:true}
        // {path: '/doedit', component: DoEdit, name: 'Edit'}
      ]
    }
  ]
})
