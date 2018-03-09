import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import router from './router.js';
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
