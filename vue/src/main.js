import Vue from 'vue'
import App from './App'
import router from './router'

// Vue.config.productionTip = false
Vue.config.devtools = true;//配置是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false。
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
