import Vue from 'vue'
import Home from './view/Home.vue'
import App from './App.vue'

import router from './router'
import './plugins/element.js'
import './css/element-variables.scss'

// import { VueQuillEditor } from 'vue-quill-editor';
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// Vue.use(VueQuillEditor)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
