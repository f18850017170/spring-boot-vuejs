// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import router from './router'
import store from './store'
import Element from 'element-ui'
import Cookies from 'js-cookie'
import App from './App'
import '@/icons' // icon 直接在自身的js中声明为Vue的components了
import '@/permission' // permission control
import { mockXHR } from '../mock'

if (process.env.NODE_ENV === 'production') {
  mockXHR()
}
Vue.config.productionTip = false
Vue.use(Element, {
  size: Cookies.get('size') || 'medium'
})
/* eslint-disable no-new */
/* new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}) */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
