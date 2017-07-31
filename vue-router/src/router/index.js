import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import AdminIndex from '@/components/admin/Index'
import UserList from '@/components/admin/UserList'
import ArticleList from '@/components/admin/ArticleList'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/:menu/',
            name: 'AdminIndex',
            component: AdminIndex
        },
        {
            path: '/:menu/userlist',
            name: 'UserList',
            component: UserList
        },
        {
            path: '/:menu/articlelist',
            name: 'ArticleList',
            component: ArticleList
        },

    ]
})