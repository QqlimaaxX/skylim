import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import router from './router.js'
import css from 'vuetify/dist/vuetify.min.css' 


Vue.use(VueRouter)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
