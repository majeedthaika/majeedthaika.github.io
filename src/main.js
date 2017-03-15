// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)

import Axios from 'axios'
Vue.$http = Axios

Axios.defaults.baseURL = 'https://iccs340-vue-api-auth.herokuapp.com/'
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.withCredentials = true

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    isLoggedIn: false
  },
  router,
  store,
  template: '<App/>',
  components: { App }
})
