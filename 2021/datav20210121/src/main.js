import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import './plugins/base.scss'

import './plugins/vEcharts.js'

Vue.config.productionTip = false;
// import VueAwesomeSwiper from 'vue-awesome-swiper'


// import style (<= Swiper 5.x)
// import 'swiper/css/swiper.css'

// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
import { Select,Option } from 'element-ui';


Vue.use(Select)
Vue.use(Option)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
