import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
// import 'iview/dist/styles/iview.css';//默认主题
import './my-theme/index.less';//自定义主题
Vue.config.productionTip = false
Vue.use(iView);//注入ui组件

import axios from 'axios'
import Qs from 'qs'
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;

//QS是axios库中带的，不需要我们再npm安装一个
if(process.env.NODE_ENV == 'development')//开发环境
    Vue.prototype.HOST = '/api'
else if(process.env.NODE_ENV == 'production')//线上环境
    Vue.prototype.HOST = 'https://api.ilizan.cn'



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')




router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(route => {
    iView.LoadingBar.finish();
});