// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElemetUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

// import axios from 'axios'

/* 拦截浏览器ajax接口,添加模拟数据 */
import mock from './mock/mock'
// import VueAxios from 'vue-axios'

// import MockAdapter from 'axios-mock-adapter';
// Vue.use(VueAxios, axios)
// Vue.use(mock);
/* 添加模拟数据 */

Vue.use(ElemetUI);
Vue.config.productionTip = false

//路由跳转前验证登录
router.beforeEach((to,from,next) =>{
  console.log(to.path);
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
