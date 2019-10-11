import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import store from './store'
import api from './request/api'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/welcome',
      component: Home,
      children: [
        // { path: 'welcome', name: '首页', component: () => import('./views/Welcome.vue') },
        // { path: 'home2', name: '首页2', component: () => import('./views/Welcome2.vue') }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/404',
      name: '404',
      component: () => import('./views/404.vue')
    }

  ]
});
router.beforeEach((to, from, next) => {
  let userId = localStorage.getItem('userId');
  if (to.path == '/login') {
    if (userId) {
      next({ path: '/' });
    } else {
      next()
    }
  } else {
    if (!userId) {
      next({ path: '/login' })
    } else {
      //添加动态路由
      if (!store.state.menuRouteLoaded) {
        addMentRoutes(userId, to, from);
        // next();
        next({ ...to, replace: true })
      } else {
        next();
      }
    }
  }
})

function addMentRoutes(userId, to, from) {
  //根据用户角色请求菜单
  let data = JSON.parse(localStorage.getItem("menuTree"));
  
  //添加动态路由
  let dynamicRoutes = addDynamicRoutes(data);

  //绑定静态路由
  handleStaticComponent(router, dynamicRoutes);
  router.options.routes.push({
    path: '*',
    redirect: '/404'
  })
  router.selfaddRoutes(router.options.routes)


  // 保存加载状态
  store.commit('menuRouteLoaded', true)
  
}

function handleStaticComponent(router, dynamicRoutes) {
  router.options.routes[0].children = router.options.routes[0].children.concat(dynamicRoutes)
}

/**
* 添加动态(菜单)路由
* @param {*} menuList 菜单列表
* @param {*} routes 递归创建的动态(菜单)路由
*/
function addDynamicRoutes(menuList = [], routes = []) {
  var temp = []
  for (var i = 0; i < menuList.length; i++) {
    if (menuList[i].children && menuList[i].children.length >= 1) {
      temp = temp.concat(menuList[i].children)
    } else if (menuList[i].url && /\S/.test(menuList[i].url)) {
      menuList[i].url = menuList[i].url.replace(/^\//, '')
      
      menuList[i].path = menuList[i].path.replace(/^\//, '')

      // 创建路由配置
      var route = {
        path: menuList[i].path,
        component: null,
        name: menuList[i].name,
        meta: {
          icon: menuList[i].icon,
          index: menuList[i].id
        }
      }
      let array = menuList[i].url.split('/');
      let url = '';
      for (let i = 0; i < array.length; i++) {
        url += array[i].substring(0, 1).toUpperCase() + array[i].substring(1) + '/'
      }
      url = url.substring(0, url.length - 1);
      route['component'] = resolve => require([`@/views/${url}`], resolve);
      routes.push(route)
    }
  }
  if (temp.length >= 1) {
    addDynamicRoutes(temp, routes)
  } else {
  }
  return routes
}

//解决多次点击同级目录控制台报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

router.selfaddRoutes = function (params) {
  router.matcher = new Router().matcher;
  router.addRoutes(params)
}

export default router;