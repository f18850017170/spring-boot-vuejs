// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'
import store from './store'
import Element from 'element-ui'
import Cookies from 'js-cookie'
import App from './App'
Vue.use(Element, {
  size: Cookies.get('size') || 'medium'
})
Vue.config.productionTip = false

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
