import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import './element-variables.scss'
import api from './request'

Vue.use(ElementUI);
Vue.use(api);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
