import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/views/IndexPage'
import LoginPage from '@/views/LoginPage'
import TvIndexPage from '@/views/tv/TvIndexPage'
import TvViewPage from '@/views/tv/TvViewPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/',
      name: 'TvIndexPage',
      component: IndexPage,
      children:[
        {path:'/tvindex',component:TvIndexPage,name:''},
        {path:'/tvView/:code',component:TvViewPage,name:'code'}
      ]
    },
  ]
})
