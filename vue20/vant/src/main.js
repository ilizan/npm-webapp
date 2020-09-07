import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { Button,Tabbar, TabbarItem } from "vant";
Vue.use(Button).use(Tabbar).use(TabbarItem);
import "lib-flexible/flexible";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
