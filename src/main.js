import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
