// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import "element-ui/lib/theme-default/index.css"
import "element-ui/lib/index.js"
import elementUi from "element-ui"
Vue.use(elementUi)
// import axios from "axios"
// import vueAxios from "vue-axios"
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
import'../static/Ueditor/ueditor.config.js'
import'../static/Ueditor/ueditor.all.min.js'
import'../static/Ueditor/lang/zh-cn/zh-cn.js'
import'../static/Ueditor/ueditor.parse.min.js'


Vue.config.productionTip = false
// Vue.prototype.$ajax = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
