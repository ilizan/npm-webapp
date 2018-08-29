import Vue from 'vue'
import Home from './view/Home.vue'
import App from './App.vue'

import router from './router'
import './plugins/element.js'
import './css/element-variables.scss'
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
