// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routes'
import { store } from './store'
import Vuetify from 'vuetify'
import axios from 'axios'

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Vuetify)

Vue.component('modal', {
  template: '#modal-template'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
