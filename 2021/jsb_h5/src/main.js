import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//按需引入vant
import './plugins/vant'

import './plugins/echarts'

import "lib-flexible/flexible"

//全局样式
import './assets/css/index.less'

import https from './http/index.js'
Vue.prototype.$http = https;//接口

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
