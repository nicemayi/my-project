import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import Vuex from 'vuex'
Vue.use(Element)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
